#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');

const repoRoot = path.resolve(__dirname, '..');

const DEFAULTS = {
    cacheDir: path.join(repoRoot, '.cache', 'feishu-openapi'),
    outputDir: path.join(repoRoot, 'doc', 'feishu-coverage'),
    concurrency: 8,
    apiLimit: 0,
    eventLimit: 0,
};

const URLS = {
    apiCatalog: 'https://open.feishu.cn/api/tools/server-side-api/list',
    explorerApiCatalog: 'https://open.feishu.cn/api_explorer/v1/api_catalog',
    scopeCatalog: 'https://open.feishu.cn/api/tools/scope/list',
    eventCatalog: 'https://open.feishu.cn/api/tools/server-side-event/list',
    terminology:
        'https://open.feishu.cn/document/server-docs/api-call-guide/terminology.md',
    genericErrors:
        'https://open.feishu.cn/document/server-docs/api-call-guide/generic-error-code.md',
};

function ensureDir(dirPath) {
    fs.mkdirSync(dirPath, { recursive: true });
}

function writeJson(filePath, data) {
    fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`);
}

function writeText(filePath, text) {
    fs.writeFileSync(filePath, text);
}

function removeIfExists(targetPath) {
    if (fs.existsSync(targetPath)) {
        fs.rmSync(targetPath, { recursive: true, force: true });
    }
}

function parseArgs(argv) {
    const args = { ...DEFAULTS };
    for (let i = 0; i < argv.length; i += 1) {
        const key = argv[i];
        const value = argv[i + 1];
        if (key === '--cache-dir' && value) {
            args.cacheDir = path.resolve(repoRoot, value);
            i += 1;
        } else if (key === '--output-dir' && value) {
            args.outputDir = path.resolve(repoRoot, value);
            i += 1;
        } else if (key === '--concurrency' && value) {
            args.concurrency = Number(value) || DEFAULTS.concurrency;
            i += 1;
        } else if (key === '--api-limit' && value) {
            args.apiLimit = Number(value) || 0;
            i += 1;
        } else if (key === '--event-limit' && value) {
            args.eventLimit = Number(value) || 0;
            i += 1;
        }
    }
    return args;
}

function canonicalOut(outputDir, name) {
    return path.join(outputDir, 'canonical', name);
}

function diagnosticOut(outputDir, name) {
    return path.join(outputDir, 'diagnostic', name);
}

function sha1(input) {
    return crypto.createHash('sha1').update(input).digest('hex');
}

async function fetchText(url, cacheDir) {
    ensureDir(cacheDir);
    const cacheFile = path.join(cacheDir, `${sha1(url)}.txt`);
    if (fs.existsSync(cacheFile)) {
        return fs.readFileSync(cacheFile, 'utf8');
    }

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.status}`);
    }
    const text = await response.text();
    fs.writeFileSync(cacheFile, text);
    return text;
}

function buildFeishuMarkdownUrl(fullPath) {
    const normalizedPath = String(fullPath).replace(/\/{2,}/g, '/');
    return `https://open.feishu.cn${normalizedPath}.md`;
}

function buildApiExplorerDefinitionUrl({ project, version, resource, apiName }) {
    const search = new URLSearchParams({
        project,
        version,
        resource,
        apiName,
    });
    return `https://open.feishu.cn/api_explorer/v1/api_definition?${search.toString()}`;
}

async function fetchJson(url, cacheDir) {
    const text = await fetchText(url, cacheDir);
    return JSON.parse(text);
}

function normalizeEndpointPath(endpoint) {
    const match = String(endpoint).match(/(\/open-apis?\/.+)$/);
    if (!match) {
        return String(endpoint).trim();
    }
    return match[1].replace(/\/+$/, '');
}

function buildSdkInventory() {
    const stdout = execFileSync(process.execPath, ['scripts/analyze-public-api.js'], {
        cwd: repoRoot,
        encoding: 'utf8',
        maxBuffer: 1024 * 1024 * 128,
    });

    return JSON.parse(stdout);
}

function groupSdkByEndpoint(canonicalGeneratedApiMethods) {
    const map = new Map();
    canonicalGeneratedApiMethods.forEach((item) => {
        const key = `${item.httpMethod} ${normalizeEndpointPath(item.apiPath)}`;
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(item);
    });
    return map;
}

function parseMarkdownTables(markdown) {
    const lines = markdown.split('\n');
    const tables = [];

    for (let i = 0; i < lines.length; i += 1) {
        if (!/\|/.test(lines[i])) {
            continue;
        }
        if (i + 1 >= lines.length || !/^\s*---\|---/.test(lines[i + 1])) {
            continue;
        }

        const headerLine = lines[i];
        const headers = splitTableRow(headerLine);
        const rows = [];
        i += 2;
        while (i < lines.length && /\|/.test(lines[i]) && !/^#{1,6}\s/.test(lines[i])) {
            rows.push(splitTableRow(lines[i]));
            i += 1;
        }
        i -= 1;
        tables.push({
            headers,
            rows,
        });
    }

    return tables;
}

function splitTableRow(line) {
    const cells = line.split('|').map((cell) => cell.trim());
    if (line.trim().startsWith('|')) {
        cells.shift();
    }
    if (line.trim().endsWith('|')) {
        cells.pop();
    }
    return cells;
}

function parseHeadingSections(markdown) {
    const lines = markdown.split('\n');
    const sections = [];
    let current = { heading: '', level: 0, lines: [] };

    lines.forEach((line) => {
        const match = line.match(/^(#{1,6})\s+(.*)$/);
        if (match) {
            sections.push(current);
            current = {
                heading: match[2].trim(),
                level: match[1].length,
                lines: [line],
            };
            return;
        }
        current.lines.push(line);
    });
    sections.push(current);
    return sections;
}

function getSection(markdown, heading) {
    const sections = parseHeadingSections(markdown);
    return sections.find((section) => section.heading === heading) || null;
}

function getSectionText(section) {
    return section ? section.lines.join('\n') : '';
}

function getFirstTable(section) {
    if (!section) {
        return null;
    }
    return parseMarkdownTables(section.lines.join('\n'))[0] || null;
}

function tableToRecords(table) {
    if (!table) {
        return [];
    }
    const headers = table.headers.map((header) => stripHtml(header));
    return table.rows.map((row) => {
        const record = {};
        headers.forEach((header, index) => {
            record[header] = row[index] || '';
        });
        return record;
    });
}

function tableRowsToMap(table) {
    const map = {};
    if (!table) {
        return map;
    }
    table.rows.forEach((row) => {
        if (!row.length) {
            return;
        }
        map[stripHtml(row[0])] = row.slice(1).join(' | ');
    });
    return map;
}

function findRowValue(map, prefix) {
    const entry = Object.entries(map).find(([key]) => key.startsWith(prefix));
    return entry ? entry[1] : '';
}

function stripHtml(value) {
    return String(value)
        .replace(/<br\s*\/?>/gi, ' ')
        .replace(/<\/?[^>]+>/g, ' ')
        .replace(/&nbsp;/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function parseScopes(text) {
    const scopes = [];
    const regex = /\(([a-z0-9_.:-]+)\)/gi;
    let match;
    while ((match = regex.exec(text || '')) !== null) {
        scopes.push(match[1]);
    }
    return [...new Set(scopes)];
}

function detectPermissionMode(text) {
    if (!text) {
        return 'unknown';
    }
    if (/任意一项权限即可/.test(text)) {
        return 'any_of';
    }
    if (/所需的权限/.test(text)) {
        return 'all_or_unknown';
    }
    return 'unknown';
}

function parseTokenTypes(markdown, headerTableMap) {
    const detected = new Set();
    const evidence = [];
    const candidateArea = markdown.split('## 响应')[0].slice(0, 5000);
    const authHeader = headerTableMap.Authorization || '';
    const introMatches = candidateArea.match(
        /(通过 [`']?(?:user_access_token|tenant_access_token|app_access_token)[`']?[^。\n]*[。\n]|使用[^。\n]*(?:user_access_token|tenant_access_token|app_access_token)[^。\n]*[。\n]?)/g
    );

    if (authHeader) {
        evidence.push(`Authorization: ${stripHtml(authHeader)}`);
        const authTokens = authHeader.match(
            /\b(user_access_token|tenant_access_token|app_access_token)\b/g
        );
        (authTokens || []).forEach((token) => detected.add(token));
    }

    (introMatches || []).slice(0, 5).forEach((line) => {
        const stripped = stripHtml(line);
        evidence.push(stripped);
        const tokens = stripped.match(
            /\b(user_access_token|tenant_access_token|app_access_token)\b/g
        );
        (tokens || []).forEach((token) => detected.add(token));
    });

    if (detected.size === 0) {
        candidateArea
            .split(/\n+/)
            .map((line) => stripHtml(line))
            .filter(
                (line) =>
                    /\b(user_access_token|tenant_access_token|app_access_token)\b/.test(line) &&
                    !/如何选择与获取 access token/.test(line)
            )
            .slice(0, 5)
            .forEach((line) => {
                evidence.push(line);
                const tokens = line.match(
                    /\b(user_access_token|tenant_access_token|app_access_token)\b/g
                );
                (tokens || []).forEach((token) => detected.add(token));
            });
    }

    return {
        tokenTypes: [...detected].sort(),
        tokenEvidence: [...new Set(evidence)].filter(Boolean),
    };
}

function enrichScopes(scopeNames, scopeMap) {
    return scopeNames.map((name) => {
        const scope = scopeMap.get(name);
        return {
            name,
            desc: scope?.desc || null,
            detail: scope?.detail || null,
            supportAppTypes: scope?.supportAppTypes || [],
            level: scope?.level ?? null,
            bizTag: scope?.bizTag || null,
        };
    });
}

function uniq(values) {
    return [...new Set(values)];
}

function unionSorted(...groups) {
    return uniq(groups.flat().filter(Boolean)).sort();
}

function normalizeExplorerTokenType(tokenType) {
    if (tokenType === 'user') {
        return 'user_access_token';
    }
    if (tokenType === 'tenant') {
        return 'tenant_access_token';
    }
    if (tokenType === 'app') {
        return 'app_access_token';
    }
    return tokenType || null;
}

function buildAuthorizationHeaderRecords(accessTokens) {
    const tokenTypes = unionSorted(accessTokens.map(normalizeExplorerTokenType));
    if (!tokenTypes.length) {
        return [];
    }
    return [
        {
            name: 'Authorization',
            type: 'string',
            required: true,
            description: tokenTypes.join(', '),
        },
    ];
}

function flattenExplorerSchema(schema, prefix = '') {
    if (!schema || typeof schema !== 'object') {
        return [];
    }

    const rows = [];
    const properties = Array.isArray(schema.properties) ? schema.properties : [];

    properties.forEach((property) => {
        const propertyName = String(property.name || '').trim();
        const pathName = prefix
            ? `${prefix}.${propertyName}`
            : propertyName;
        const normalizedName = pathName || prefix || '(root)';
        rows.push({
            name: normalizedName,
            type: property.type || '',
            required: property.required === true,
            description: stripHtml(property.description || ''),
            format: property.format || '',
            ref: property.ref || '',
            example: property.example || '',
            defaultValue: property.defaultValue || '',
        });

        if (property.type === 'object' && Array.isArray(property.properties)) {
            rows.push(...flattenExplorerSchema(property, normalizedName));
        } else if (property.type === 'list' && property.items) {
            const itemPath = `${normalizedName}[]`;
            const item = property.items;
            rows.push({
                name: itemPath,
                type: item.type || '',
                required: item.required === true,
                description: stripHtml(item.description || ''),
                format: item.format || '',
                ref: item.ref || '',
                example: item.example || '',
                defaultValue: item.defaultValue || '',
            });
            if (item.type === 'object' && Array.isArray(item.properties)) {
                rows.push(...flattenExplorerSchema(item, itemPath));
            }
        }
    });

    return rows;
}

function buildApiScopeIndex(serviceCoverage) {
    const items = serviceCoverage.items.map((item) => {
        const requiredScopeNames = item.permissions.scopeNames || [];
        const fieldScopeNames = item.fieldPermissions.scopeNames || [];
        const allScopeNames = uniq(requiredScopeNames.concat(fieldScopeNames)).sort();

        return {
            endpointKey: item.endpointKey,
            name: item.name,
            httpMethod: item.httpMethod,
            path: item.path,
            markdownUrl: item.markdownUrl,
            project: item.meta.Project,
            resource: item.meta.Resource,
            methodName: item.meta.Name,
            version: item.meta.Version,
            permissionSource: item.permissionSource,
            requiredScopeNames,
            fieldScopeNames,
            allScopeNames,
            requiredScopeMode: item.permissions.mode,
            hasNoRequiredScope: item.permissions.hasNoPermission,
            tokenTypes: item.tokenTypes,
            sdkCoverage: item.sdkCoverage,
        };
    });

    const byScope = new Map();
    items.forEach((item) => {
        item.allScopeNames.forEach((scopeName) => {
            if (!byScope.has(scopeName)) {
                byScope.set(scopeName, []);
            }
            byScope.get(scopeName).push({
                endpointKey: item.endpointKey,
                name: item.name,
                project: item.project,
            });
        });
    });

    return {
        generatedAt: new Date().toISOString(),
        summary: {
            apiCount: items.length,
            apisWithRequiredScopes: items.filter((item) => item.requiredScopeNames.length > 0)
                .length,
            apisWithFieldScopes: items.filter((item) => item.fieldScopeNames.length > 0).length,
            distinctScopeCount: byScope.size,
        },
        items: items.sort((a, b) => a.endpointKey.localeCompare(b.endpointKey)),
        byScope: [...byScope.entries()]
            .map(([scopeName, apis]) => ({
                scopeName,
                apiCount: apis.length,
                apis: apis.sort((a, b) => a.endpointKey.localeCompare(b.endpointKey)),
            }))
            .sort((a, b) => a.scopeName.localeCompare(b.scopeName)),
    };
}

function buildRequiredApiScopeIndex(apiScopeIndex) {
    const items = apiScopeIndex.items.map((item) => ({
        endpointKey: item.endpointKey,
        name: item.name,
        httpMethod: item.httpMethod,
        path: item.path,
        markdownUrl: item.markdownUrl,
        project: item.project,
        resource: item.resource,
        methodName: item.methodName,
        version: item.version,
        requiredScopeNames: item.requiredScopeNames,
        requiredScopeMode: item.requiredScopeMode,
        hasNoRequiredScope: item.hasNoRequiredScope,
        permissionSource: item.permissionSource,
        tokenTypes: item.tokenTypes,
        sdkCoverage: item.sdkCoverage,
    }));

    return {
        generatedAt: new Date().toISOString(),
        summary: {
            apiCount: items.length,
            apisWithRequiredScopes: items.filter((item) => item.requiredScopeNames.length > 0)
                .length,
            distinctRequiredScopeCount: uniq(
                items.flatMap((item) => item.requiredScopeNames)
            ).length,
        },
        items,
    };
}

function buildScopeApiReverseIndex(apiScopeIndex) {
    const byScope = new Map();

    apiScopeIndex.items.forEach((item) => {
        item.allScopeNames.forEach((scopeName) => {
            if (!byScope.has(scopeName)) {
                byScope.set(scopeName, {
                    scopeName,
                    requiredBy: [],
                    fieldRequiredBy: [],
                    tokenTypes: new Set(),
                });
            }

            const entry = byScope.get(scopeName);
            if (item.requiredScopeNames.includes(scopeName)) {
                entry.requiredBy.push({
                    endpointKey: item.endpointKey,
                    name: item.name,
                    project: item.project,
                });
            }
            if (item.fieldScopeNames.includes(scopeName)) {
                entry.fieldRequiredBy.push({
                    endpointKey: item.endpointKey,
                    name: item.name,
                    project: item.project,
                });
            }
            item.tokenTypes.forEach((tokenType) => entry.tokenTypes.add(tokenType));
        });
    });

    const items = [...byScope.values()]
        .map((item) => ({
            scopeName: item.scopeName,
            tokenTypes: [...item.tokenTypes].sort(),
            requiredByCount: item.requiredBy.length,
            fieldRequiredByCount: item.fieldRequiredBy.length,
            requiredBy: item.requiredBy.sort((a, b) =>
                a.endpointKey.localeCompare(b.endpointKey)
            ),
            fieldRequiredBy: item.fieldRequiredBy.sort((a, b) =>
                a.endpointKey.localeCompare(b.endpointKey)
            ),
        }))
        .sort((a, b) => a.scopeName.localeCompare(b.scopeName));

    return {
        generatedAt: new Date().toISOString(),
        summary: {
            scopeCount: items.length,
        },
        items,
    };
}

function normalizeTokenTypeToImportBucket(tokenType) {
    if (tokenType === 'tenant_access_token' || tokenType === 'app_access_token') {
        return 'tenant';
    }
    if (tokenType === 'user_access_token') {
        return 'user';
    }
    return null;
}

function buildScopeImportBundle(apiScopeIndex) {
    const buckets = {
        tenant: new Set(),
        user: new Set(),
    };

    apiScopeIndex.items.forEach((item) => {
        item.requiredScopeNames.forEach((scopeName) => {
            item.tokenTypes.forEach((tokenType) => {
                const bucket = normalizeTokenTypeToImportBucket(tokenType);
                if (bucket) {
                    buckets[bucket].add(scopeName);
                }
            });
        });
    });

    return {
        generatedAt: new Date().toISOString(),
        scopes: {
            tenant: [...buckets.tenant].sort(),
            user: [...buckets.user].sort(),
        },
    };
}

function buildSafeRequiredApiScopeIndex(serviceCoverage) {
    const items = serviceCoverage.items.map((item) => ({
        endpointKey: item.endpointKey,
        name: item.name,
        httpMethod: item.httpMethod,
        path: item.path,
        markdownUrl: item.markdownUrl,
        project: item.meta.Project,
        resource: item.meta.Resource,
        methodName: item.meta.Name,
        version: item.meta.Version,
        requiredScopeNames: item.permissionSources.safe.requiredScopeNames,
        requiredScopeMode: item.permissions.mode,
        hasNoRequiredScope: item.permissions.hasNoPermission,
        tokenTypes: item.permissionSources.safe.tokenTypes,
        sdkCoverage: item.sdkCoverage,
    }));

    return {
        generatedAt: new Date().toISOString(),
        summary: {
            apiCount: items.length,
            apisWithRequiredScopes: items.filter((item) => item.requiredScopeNames.length > 0)
                .length,
            distinctRequiredScopeCount: uniq(
                items.flatMap((item) => item.requiredScopeNames)
            ).length,
        },
        items,
    };
}

function toApiScopeMarkdown(report) {
    const lines = [];
    lines.push('# Feishu API Scope Index');
    lines.push('');
    lines.push(`- APIs: ${report.summary.apiCount}`);
    lines.push(`- APIs with required scopes: ${report.summary.apisWithRequiredScopes}`);
    lines.push(`- APIs with field scopes: ${report.summary.apisWithFieldScopes}`);
    lines.push(`- Distinct scope names: ${report.summary.distinctScopeCount}`);
    lines.push('');
    lines.push('## API To Scope Names');
    lines.push('');
    report.items.forEach((item) => {
        lines.push(`- ${item.endpointKey} | ${item.name}`);
        lines.push(`  required: ${item.requiredScopeNames.length ? item.requiredScopeNames.join(', ') : '(none)'}`);
        lines.push(`  field: ${item.fieldScopeNames.length ? item.fieldScopeNames.join(', ') : '(none)'}`);
        lines.push(`  all: ${item.allScopeNames.length ? item.allScopeNames.join(', ') : '(none)'}`);
        if (item.tokenTypes.length) {
            lines.push(`  tokens: ${item.tokenTypes.join(', ')}`);
        }
    });
    lines.push('');
    return `${lines.join('\n')}\n`;
}

function toRequiredApiScopeMarkdown(report) {
    const lines = [];
    lines.push('# Feishu API Required Scope Index');
    lines.push('');
    lines.push(`- APIs: ${report.summary.apiCount}`);
    lines.push(`- APIs with required scopes: ${report.summary.apisWithRequiredScopes}`);
    lines.push(`- Distinct required scope names: ${report.summary.distinctRequiredScopeCount}`);
    lines.push('');
    report.items.forEach((item) => {
        lines.push(`- ${item.endpointKey} | ${item.name}`);
        lines.push(
            `  required: ${
                item.requiredScopeNames.length
                    ? item.requiredScopeNames.join(', ')
                    : '(none)'
            }`
        );
        if (item.tokenTypes.length) {
            lines.push(`  tokens: ${item.tokenTypes.join(', ')}`);
        }
    });
    lines.push('');
    return `${lines.join('\n')}\n`;
}

function toScopeApiReverseMarkdown(report) {
    const lines = [];
    lines.push('# Feishu Scope To API Index');
    lines.push('');
    lines.push(`- Scopes: ${report.summary.scopeCount}`);
    lines.push('');
    report.items.forEach((item) => {
        lines.push(`- ${item.scopeName}`);
        lines.push(`  tokens: ${item.tokenTypes.length ? item.tokenTypes.join(', ') : '(unknown)'}`);
        lines.push(`  requiredBy: ${item.requiredByCount}`);
        lines.push(
            `  fieldRequiredBy: ${item.fieldRequiredByCount}`
        );
    });
    lines.push('');
    return `${lines.join('\n')}\n`;
}

function parseApiMarkdown(markdown, scopeMap) {
    const requestSection = getSection(markdown, '请求');
    const requestTables = parseMarkdownTables(requestSection?.lines.join('\n') || '');
    const basicMap = tableRowsToMap(requestTables[0]);

    const requestHeadersSection = getSection(markdown, '请求头');
    const requestHeaderTable = getFirstTable(requestHeadersSection);
    const requestHeaderMap = {};
    if (requestHeaderTable) {
        requestHeaderTable.rows.forEach((row) => {
            requestHeaderMap[stripHtml(row[0])] = row.slice(1).join(' | ');
        });
    }

    const permissionText = findRowValue(basicMap, '权限要求');
    const fieldPermissionText = findRowValue(basicMap, '字段权限要求');
    const permissions = parseScopes(permissionText);
    const fieldPermissions = parseScopes(fieldPermissionText);
    const tokenInfo = parseTokenTypes(markdown, requestHeaderMap);

    return {
        supportAppTypesText: findRowValue(basicMap, '支持的应用类型'),
        historyNoticeDetected:
            /本接口已为历史版本|不再维护更新|不推荐使用|历史版本/.test(markdown),
        permissions: {
            rawText: permissionText,
            mode: detectPermissionMode(permissionText),
            hasNoPermission: /(^|\s)无($|\s)/.test(stripHtml(permissionText)),
            scopeNames: permissions,
            scopes: enrichScopes(permissions, scopeMap),
        },
        fieldPermissions: {
            rawText: fieldPermissionText,
            scopeNames: fieldPermissions,
            scopes: enrichScopes(fieldPermissions, scopeMap),
        },
        tokenTypes: tokenInfo.tokenTypes,
        tokenEvidence: tokenInfo.tokenEvidence,
    };
}

function extractApiDefinition(markdown, fallbackHttpMethod) {
    const requestSection = getSection(markdown, '请求');
    const responseSection = getSection(markdown, '响应');
    const errorSection = getSection(markdown, '错误码');

    const requestTables = parseMarkdownTables(getSectionText(requestSection));
    const basicRequest = tableRowsToMap(requestTables[0]);

    const requestHeaders = tableToRecords(getFirstTable(getSection(markdown, '请求头')));
    const pathParams = tableToRecords(getFirstTable(getSection(markdown, '路径参数')));
    const queryParams = tableToRecords(getFirstTable(getSection(markdown, '查询参数')));
    const requestBody = tableToRecords(getFirstTable(getSection(markdown, '请求体')));
    const responseBody = tableToRecords(getFirstTable(getSection(markdown, '响应体')));
    const errorCodes = tableToRecords(getFirstTable(errorSection));

    const responseText = getSectionText(responseSection);
    const traits = {
        pagination:
            /(page_size|page_token|next_page_token|has_more)/.test(markdown),
        upload: /(multipart\/form-data|上传文件|上传图片)/.test(markdown),
        download: /(返回文件二进制流|下载文件|下载图片|下载资源)/.test(responseText),
        stream: /(返回文件二进制流|流式|event stream|SSE)/i.test(responseText),
        fileResponse:
            /(返回文件二进制流|Content-Disposition|文件二进制流)/.test(responseText),
    };

    return {
        request: {
            basic: {
                httpUrl: findRowValue(basicRequest, 'HTTP URL'),
                httpMethod: findRowValue(basicRequest, 'HTTP Method') || fallbackHttpMethod,
                rateLimit: findRowValue(basicRequest, '接口频率限制'),
                supportAppTypes: findRowValue(basicRequest, '支持的应用类型'),
            },
            headers: requestHeaders,
            pathParams,
            queryParams,
            body: requestBody,
        },
        response: {
            summary: stripHtml(
                responseText
                    .split('###')[0]
                    .replace(/^##\s+响应/m, '')
                    .trim()
            ),
            body: responseBody,
        },
        errorCodes,
        traits,
    };
}

function extractApiDefinitionFromExplorer(
    apiDefinition,
    fallbackHttpMethod,
    fallbackSupportAppTypes
) {
    const request = apiDefinition.request || {};
    const response = apiDefinition.response || {};
    const responseBody = flattenExplorerSchema(response.body);
    const responseSummarySource = stripHtml(
        [apiDefinition.description || '', response.body?.description || '']
            .filter(Boolean)
            .join(' ')
    );

    return {
        request: {
            basic: {
                httpUrl: apiDefinition.apiPath
                    ? `https://open.feishu.cn${apiDefinition.apiPath}`
                    : '',
                httpMethod: apiDefinition.httpMethod || fallbackHttpMethod,
                rateLimit:
                    apiDefinition.basicRateLimit?.tier !== undefined
                        ? `tier ${apiDefinition.basicRateLimit.tier}`
                        : '',
                supportAppTypes: fallbackSupportAppTypes || '',
                contentType: request.contentType || '',
            },
            headers: buildAuthorizationHeaderRecords(apiDefinition.accessTokens || []),
            pathParams: flattenExplorerSchema(request.path),
            queryParams: flattenExplorerSchema(request.query),
            body: flattenExplorerSchema(request.body),
        },
        response: {
            summary: responseSummarySource,
            body: responseBody,
        },
        errorCodes: (apiDefinition.errorMappings || []).map((item) => ({
            httpCode: item.httpCode ?? '',
            code: item.code ?? '',
            msg: item.msg || '',
        })),
        traits: {
            pagination: Boolean(apiDefinition.pagination),
            upload: Boolean(apiDefinition.supportFileUpload),
            download: Boolean(apiDefinition.supportFileDownload),
            stream:
                /event stream|sse|流式/i.test(
                    `${apiDefinition.description || ''}\n${responseSummarySource}`
                ),
            fileResponse:
                Boolean(apiDefinition.supportFileDownload) ||
                /file|binary|octet-stream|文件/i.test(
                    `${response.contentType || ''}\n${responseSummarySource}`
                ),
        },
    };
}

function buildPermissionSources(markdownParsed, apiDefinition, scopeMap) {
    const explorerRequiredScopeNames = unionSorted(apiDefinition?.scopesOfDebugRequired || []);
    const explorerFieldScopeNames = unionSorted(apiDefinition?.scopesOfFieldRequired || []);
    const explorerTokenTypes = unionSorted(
        (apiDefinition?.accessTokens || []).map(normalizeExplorerTokenType)
    );

    const markdownRequiredScopeNames = markdownParsed.permissions.scopeNames || [];
    const markdownFieldScopeNames = markdownParsed.fieldPermissions.scopeNames || [];
    const markdownTokenTypes = markdownParsed.tokenTypes || [];

    const mergedRequiredScopeNames = unionSorted(
        explorerRequiredScopeNames,
        markdownRequiredScopeNames
    );
    const mergedFieldScopeNames = unionSorted(
        explorerFieldScopeNames,
        markdownFieldScopeNames
    );
    const mergedTokenTypes = unionSorted(explorerTokenTypes, markdownTokenTypes);

    const canonicalRequiredScopeNames = apiDefinition
        ? explorerRequiredScopeNames
        : markdownRequiredScopeNames;
    const canonicalFieldScopeNames = apiDefinition
        ? explorerFieldScopeNames
        : markdownFieldScopeNames;
    const canonicalTokenTypes = apiDefinition ? explorerTokenTypes : markdownTokenTypes;

    return {
        markdown: {
            requiredScopeNames: markdownRequiredScopeNames,
            fieldScopeNames: markdownFieldScopeNames,
            tokenTypes: markdownTokenTypes,
            requiredScopeMode: markdownParsed.permissions.mode,
            hasNoRequiredScope: markdownParsed.permissions.hasNoPermission,
            rawPermissionText: markdownParsed.permissions.rawText,
            rawFieldPermissionText: markdownParsed.fieldPermissions.rawText,
        },
        apiExplorer: {
            available: Boolean(apiDefinition),
            requiredScopeNames: explorerRequiredScopeNames,
            fieldScopeNames: explorerFieldScopeNames,
            tokenTypes: explorerTokenTypes,
        },
        canonical: {
            source: apiDefinition ? 'api_explorer' : 'markdown',
            requiredScopeNames: canonicalRequiredScopeNames,
            fieldScopeNames: canonicalFieldScopeNames,
            tokenTypes: canonicalTokenTypes,
            requiredScopes: enrichScopes(canonicalRequiredScopeNames, scopeMap),
            fieldScopes: enrichScopes(canonicalFieldScopeNames, scopeMap),
        },
        safe: {
            requiredScopeNames: mergedRequiredScopeNames,
            fieldScopeNames: mergedFieldScopeNames,
            tokenTypes: mergedTokenTypes,
            requiredScopes: enrichScopes(mergedRequiredScopeNames, scopeMap),
            fieldScopes: enrichScopes(mergedFieldScopeNames, scopeMap),
        },
    };
}

function parseEventMarkdown(markdown, scopeMap) {
    const eventSection = getSection(markdown, '事件');
    const eventTables = parseMarkdownTables(eventSection?.lines.join('\n') || '');
    const basicMap = tableRowsToMap(eventTables[0]);
    const permissionText = findRowValue(basicMap, '权限要求');
    const fieldPermissionText = findRowValue(basicMap, '字段权限要求');
    const permissions = parseScopes(permissionText);
    const fieldPermissions = parseScopes(fieldPermissionText);

    return {
        eventType: findRowValue(basicMap, '事件类型') || null,
        supportAppTypesText: findRowValue(basicMap, '支持的应用类型'),
        permissions: {
            rawText: permissionText,
            mode: detectPermissionMode(permissionText),
            hasNoPermission: /(^|\s)无($|\s)/.test(stripHtml(permissionText)),
            scopeNames: permissions,
            scopes: enrichScopes(permissions, scopeMap),
        },
        fieldPermissions: {
            rawText: fieldPermissionText,
            scopeNames: fieldPermissions,
            scopes: enrichScopes(fieldPermissions, scopeMap),
        },
    };
}

async function mapLimit(items, concurrency, worker) {
    const results = new Array(items.length);
    let index = 0;

    async function run() {
        while (index < items.length) {
            const currentIndex = index;
            index += 1;
            results[currentIndex] = await worker(items[currentIndex], currentIndex);
        }
    }

    const runners = Array.from(
        { length: Math.max(1, Math.min(concurrency, items.length || 1)) },
        () => run()
    );

    await Promise.all(runners);
    return results;
}

function projectKeyFromMeta(meta) {
    return `${meta.Project}.${meta.Resource}.${meta.Name}`;
}

function buildCoverageSummary(items, keyName) {
    const total = items.length;
    const covered = items.filter((item) => item.sdkCoverage.covered).length;
    const uncovered = total - covered;
    const byProjectMap = new Map();

    items.forEach((item) => {
        const project = item.meta.Project;
        if (!byProjectMap.has(project)) {
            byProjectMap.set(project, {
                project,
                total: 0,
                covered: 0,
                uncovered: 0,
            });
        }
        const group = byProjectMap.get(project);
        group.total += 1;
        if (item.sdkCoverage.covered) {
            group.covered += 1;
        } else {
            group.uncovered += 1;
        }
    });

    return {
        total,
        covered,
        uncovered,
        coverageRate: total ? Number(((covered / total) * 100).toFixed(2)) : 0,
        byProject: [...byProjectMap.values()].sort((a, b) =>
            a.project.localeCompare(b.project)
        ),
        keyName,
    };
}

function toServiceCoverageMarkdown(report) {
    const lines = [];
    lines.push('# Feishu Service API Coverage');
    lines.push('');
    lines.push(`- Evaluated current APIs: ${report.summary.total}`);
    lines.push(`- Covered by SDK: ${report.summary.covered}`);
    lines.push(`- Uncovered by SDK: ${report.summary.uncovered}`);
    lines.push(`- Coverage rate: ${report.summary.coverageRate}%`);
    lines.push(`- Old APIs archived separately: ${report.oldApiCount}`);
    lines.push(`- History/deprecated APIs archived separately: ${report.historyApiCount}`);
    lines.push('');
    lines.push('## By Project');
    lines.push('');
    report.summary.byProject.forEach((item) => {
        lines.push(
            `- ${item.project}: ${item.covered}/${item.total} covered (${item.uncovered} uncovered)`
        );
    });
    lines.push('');
    lines.push('## Uncovered APIs');
    lines.push('');
    report.items
        .filter((item) => !item.sdkCoverage.covered)
        .forEach((item) => {
            lines.push(
                `- ${item.httpMethod} ${item.path} | ${item.name} | ${item.meta.Project}.${item.meta.Resource}.${item.meta.Name}`
            );
            lines.push(
                `  doc: ${item.markdownUrl}`
            );
            if (item.permissions.scopeNames.length) {
                lines.push(
                    `  permissions: ${item.permissions.scopeNames.join(', ')}`
                );
            }
            if (item.tokenTypes.length) {
                lines.push(`  tokens: ${item.tokenTypes.join(', ')}`);
            }
        });
    lines.push('');
    return `${lines.join('\n')}\n`;
}

function toOldApiMarkdown(report) {
    const lines = [];
    lines.push('# Feishu Old Service APIs');
    lines.push('');
    lines.push(
        '- APIs in this file have `meta.Version === "old"` and are excluded from SDK coverage evaluation.'
    );
    lines.push(`- Archived APIs: ${report.items.length}`);
    lines.push('');
    report.items.forEach((item) => {
        lines.push(
            `- ${item.httpMethod} ${item.path} | ${item.name} | ${item.meta.Project}.${item.meta.Resource}.${item.meta.Name}`
        );
    });
    lines.push('');
    return `${lines.join('\n')}\n`;
}

function toLegacyApiMarkdown(report) {
    const lines = [];
    lines.push('# Feishu Legacy Service APIs');
    lines.push('');
    lines.push(
        '- APIs in this file are excluded from SDK coverage, definition snapshots, and permission diff analysis.'
    );
    lines.push(`- Legacy APIs archived: ${report.items.length}`);
    lines.push('');
    report.items.forEach((item) => {
        lines.push(
            `- ${item.httpMethod} ${item.path} | ${item.name} | ${item.meta.Project}.${item.meta.Resource}.${item.meta.Name}`
        );
        lines.push(`  legacyReason: ${item.legacyReason}`);
        if (item.tags?.length) {
            lines.push(`  tags: ${item.tags.join(', ')}`);
        }
        if (item.markdownHistoryNoticeDetected) {
            lines.push('  markdownHistoryNoticeDetected: true');
        }
    });
    lines.push('');
    return `${lines.join('\n')}\n`;
}

function toEventCoverageMarkdown(report) {
    const lines = [];
    lines.push('# Feishu Event Coverage');
    lines.push('');
    lines.push(`- Evaluated events: ${report.summary.total}`);
    lines.push(`- Covered by SDK: ${report.summary.covered}`);
    lines.push(`- Uncovered by SDK: ${report.summary.uncovered}`);
    lines.push(`- Coverage rate: ${report.summary.coverageRate}%`);
    lines.push('');
    lines.push('## By Project');
    lines.push('');
    report.summary.byProject.forEach((item) => {
        lines.push(
            `- ${item.project}: ${item.covered}/${item.total} covered (${item.uncovered} uncovered)`
        );
    });
    lines.push('');
    lines.push('## Uncovered Events');
    lines.push('');
    report.items
        .filter((item) => !item.sdkCoverage.covered)
        .forEach((item) => {
            lines.push(`- ${item.eventType} | ${item.name}`);
            lines.push(`  doc: ${item.markdownUrl}`);
            if (item.permissions.scopeNames.length) {
                lines.push(`  permissions: ${item.permissions.scopeNames.join(', ')}`);
            }
        });
    lines.push('');
    return `${lines.join('\n')}\n`;
}

function buildApiDefinitionSnapshot(serviceCoverage) {
    return {
        generatedAt: new Date().toISOString(),
        summary: {
            apiCount: serviceCoverage.items.length,
            oldApiExcludedCount: serviceCoverage.oldItems.length,
            historyApiExcludedCount: serviceCoverage.historyItems.length,
            explorerDefinitionCount: serviceCoverage.items.filter(
                (item) => item.definitionSource === 'api_explorer'
            ).length,
            paginationCandidates: serviceCoverage.items.filter(
                (item) => item.definition?.traits?.pagination
            ).length,
            uploadCandidates: serviceCoverage.items.filter(
                (item) => item.definition?.traits?.upload
            ).length,
            downloadCandidates: serviceCoverage.items.filter(
                (item) => item.definition?.traits?.download
            ).length,
            streamCandidates: serviceCoverage.items.filter(
                (item) => item.definition?.traits?.stream
            ).length,
        },
        items: serviceCoverage.items.map((item) => ({
            endpointKey: item.endpointKey,
            name: item.name,
            markdownUrl: item.markdownUrl,
            project: item.meta.Project,
            resource: item.meta.Resource,
            methodName: item.meta.Name,
            version: item.meta.Version,
            definitionSource: item.definitionSource,
            tokenTypes: item.tokenTypes,
            requiredScopeNames: item.permissions.scopeNames,
            fieldScopeNames: item.fieldPermissions.scopeNames,
            definition: item.definition,
            sdkCoverage: item.sdkCoverage,
        })),
    };
}

function buildPermissionDiffReport(serviceCoverage) {
    const items = serviceCoverage.items.map((item) => {
        const markdown = item.permissionSources.markdown;
        const apiExplorer = item.permissionSources.apiExplorer;
        const safe = item.permissionSources.safe;

        const requiredScopeDiff = {
            markdownOnly: markdown.requiredScopeNames.filter(
                (name) => !apiExplorer.requiredScopeNames.includes(name)
            ),
            explorerOnly: apiExplorer.requiredScopeNames.filter(
                (name) => !markdown.requiredScopeNames.includes(name)
            ),
        };
        const fieldScopeDiff = {
            markdownOnly: markdown.fieldScopeNames.filter(
                (name) => !apiExplorer.fieldScopeNames.includes(name)
            ),
            explorerOnly: apiExplorer.fieldScopeNames.filter(
                (name) => !markdown.fieldScopeNames.includes(name)
            ),
        };
        const tokenTypeDiff = {
            markdownOnly: markdown.tokenTypes.filter(
                (name) => !apiExplorer.tokenTypes.includes(name)
            ),
            explorerOnly: apiExplorer.tokenTypes.filter(
                (name) => !markdown.tokenTypes.includes(name)
            ),
        };

        return {
            endpointKey: item.endpointKey,
            name: item.name,
            markdownUrl: item.markdownUrl,
            project: item.meta.Project,
            resource: item.meta.Resource,
            methodName: item.meta.Name,
            version: item.meta.Version,
            markdown,
            apiExplorer,
            safe,
            requiredScopeDiff,
            fieldScopeDiff,
            tokenTypeDiff,
            hasAnyDiff:
                requiredScopeDiff.markdownOnly.length > 0 ||
                requiredScopeDiff.explorerOnly.length > 0 ||
                fieldScopeDiff.markdownOnly.length > 0 ||
                fieldScopeDiff.explorerOnly.length > 0 ||
                tokenTypeDiff.markdownOnly.length > 0 ||
                tokenTypeDiff.explorerOnly.length > 0,
        };
    });

    const diffs = items.filter((item) => item.hasAnyDiff);

    return {
        generatedAt: new Date().toISOString(),
        summary: {
            apiCount: items.length,
            oldApiExcludedCount: serviceCoverage.oldItems.length,
            historyApiExcludedCount: serviceCoverage.historyItems.length,
            apisWithAnyDiff: diffs.length,
            requiredScopeDiffCount: diffs.filter(
                (item) =>
                    item.requiredScopeDiff.markdownOnly.length > 0 ||
                    item.requiredScopeDiff.explorerOnly.length > 0
            ).length,
            fieldScopeDiffCount: diffs.filter(
                (item) =>
                    item.fieldScopeDiff.markdownOnly.length > 0 ||
                    item.fieldScopeDiff.explorerOnly.length > 0
            ).length,
            tokenTypeDiffCount: diffs.filter(
                (item) =>
                    item.tokenTypeDiff.markdownOnly.length > 0 ||
                    item.tokenTypeDiff.explorerOnly.length > 0
            ).length,
        },
        items,
        diffs,
    };
}

function toApiDefinitionMarkdown(report) {
    const lines = [];
    lines.push('# Feishu API Definition Snapshot');
    lines.push('');
    lines.push(`- APIs: ${report.summary.apiCount}`);
    lines.push(`- Old APIs excluded: ${report.summary.oldApiExcludedCount}`);
    lines.push(`- History/deprecated APIs excluded: ${report.summary.historyApiExcludedCount}`);
    lines.push(`- Explorer-backed definitions: ${report.summary.explorerDefinitionCount}`);
    lines.push(`- Pagination candidates: ${report.summary.paginationCandidates}`);
    lines.push(`- Upload candidates: ${report.summary.uploadCandidates}`);
    lines.push(`- Download candidates: ${report.summary.downloadCandidates}`);
    lines.push(`- Stream candidates: ${report.summary.streamCandidates}`);
    lines.push('');
    report.items.forEach((item) => {
        lines.push(`- ${item.endpointKey} | ${item.name}`);
        if (item.requiredScopeNames.length) {
            lines.push(`  required scopes: ${item.requiredScopeNames.join(', ')}`);
        }
        if (item.tokenTypes.length) {
            lines.push(`  tokens: ${item.tokenTypes.join(', ')}`);
        }
        lines.push(
            `  request: headers=${item.definition.request.headers.length}, path=${item.definition.request.pathParams.length}, query=${item.definition.request.queryParams.length}, body=${item.definition.request.body.length}`
        );
        lines.push(
            `  response: body=${item.definition.response.body.length}, errors=${item.definition.errorCodes.length}`
        );
        const traits = Object.entries(item.definition.traits)
            .filter(([, value]) => value)
            .map(([key]) => key);
        if (traits.length) {
            lines.push(`  traits: ${traits.join(', ')}`);
        }
    });
    lines.push('');
    return `${lines.join('\n')}\n`;
}

function toPermissionDiffMarkdown(report) {
    const lines = [];
    lines.push('# Feishu API Permission Source Diff');
    lines.push('');
    lines.push(`- APIs: ${report.summary.apiCount}`);
    lines.push(`- Old APIs excluded: ${report.summary.oldApiExcludedCount}`);
    lines.push(`- History/deprecated APIs excluded: ${report.summary.historyApiExcludedCount}`);
    lines.push(`- APIs with any diff: ${report.summary.apisWithAnyDiff}`);
    lines.push(`- Required-scope diffs: ${report.summary.requiredScopeDiffCount}`);
    lines.push(`- Field-scope diffs: ${report.summary.fieldScopeDiffCount}`);
    lines.push(`- Token-type diffs: ${report.summary.tokenTypeDiffCount}`);
    lines.push('');
    lines.push('## Field Scope Diffs');
    lines.push('');
    report.diffs
        .filter(
            (item) =>
                item.fieldScopeDiff.markdownOnly.length > 0 ||
                item.fieldScopeDiff.explorerOnly.length > 0
        )
        .forEach((item) => {
            lines.push(`- ${item.endpointKey} | ${item.name}`);
            lines.push(
                `  markdownOnly: ${
                    item.fieldScopeDiff.markdownOnly.length
                        ? item.fieldScopeDiff.markdownOnly.join(', ')
                        : '(none)'
                }`
            );
            lines.push(
                `  explorerOnly: ${
                    item.fieldScopeDiff.explorerOnly.length
                        ? item.fieldScopeDiff.explorerOnly.join(', ')
                        : '(none)'
                }`
            );
        });
    lines.push('');
    lines.push('## Other Source Diffs');
    lines.push('');
    report.diffs
        .filter(
            (item) =>
                item.requiredScopeDiff.markdownOnly.length > 0 ||
                item.requiredScopeDiff.explorerOnly.length > 0 ||
                item.tokenTypeDiff.markdownOnly.length > 0 ||
                item.tokenTypeDiff.explorerOnly.length > 0
        )
        .slice(0, 200)
        .forEach((item) => {
            lines.push(`- ${item.endpointKey} | ${item.name}`);
            if (
                item.requiredScopeDiff.markdownOnly.length > 0 ||
                item.requiredScopeDiff.explorerOnly.length > 0
            ) {
                lines.push(
                    `  required markdownOnly: ${
                        item.requiredScopeDiff.markdownOnly.length
                            ? item.requiredScopeDiff.markdownOnly.join(', ')
                            : '(none)'
                    }`
                );
                lines.push(
                    `  required explorerOnly: ${
                        item.requiredScopeDiff.explorerOnly.length
                            ? item.requiredScopeDiff.explorerOnly.join(', ')
                            : '(none)'
                    }`
                );
            }
            if (
                item.tokenTypeDiff.markdownOnly.length > 0 ||
                item.tokenTypeDiff.explorerOnly.length > 0
            ) {
                lines.push(
                    `  token markdownOnly: ${
                        item.tokenTypeDiff.markdownOnly.length
                            ? item.tokenTypeDiff.markdownOnly.join(', ')
                            : '(none)'
                    }`
                );
                lines.push(
                    `  token explorerOnly: ${
                        item.tokenTypeDiff.explorerOnly.length
                            ? item.tokenTypeDiff.explorerOnly.join(', ')
                            : '(none)'
                    }`
                );
            }
        });
    lines.push('');
    return `${lines.join('\n')}\n`;
}

function toReadme(report) {
    return `# Feishu Coverage

This directory contains generated coverage artifacts comparing the SDK with the official Feishu server-side API and event catalogs.

## Canonical

- [canonical/service-api-coverage.md](./canonical/service-api-coverage.md): current service API coverage summary
- [canonical/service-api-coverage.json](./canonical/service-api-coverage.json): detailed current service API coverage data
- [canonical/service-api-required-scopes.md](./canonical/service-api-required-scopes.md): canonical required scopes only for each API
- [canonical/service-api-required-scopes.json](./canonical/service-api-required-scopes.json): machine-readable canonical required-scope index
- [canonical/scope-import-bundle.json](./canonical/scope-import-bundle.json): canonical required-scope union grouped into \`tenant\` / \`user\`
- [canonical/service-api-definitions.md](./canonical/service-api-definitions.md): implementation-oriented request/response/error summary per current API
- [canonical/service-api-definitions.json](./canonical/service-api-definitions.json): machine-readable request/response/error snapshot for current APIs only
- [canonical/service-api-legacy.md](./canonical/service-api-legacy.md): archived APIs excluded from evaluation, including \`old\` and history/deprecated APIs
- [canonical/service-api-legacy.json](./canonical/service-api-legacy.json): machine-readable legacy API archive
- [canonical/event-coverage.md](./canonical/event-coverage.md): server-side event coverage summary
- [canonical/event-coverage.json](./canonical/event-coverage.json): detailed event coverage data

## Diagnostic

- [diagnostic/service-api-required-scopes-safe.json](./diagnostic/service-api-required-scopes-safe.json): conservative fallback required-scope index using union across sources
- [diagnostic/scope-import-bundle-safe.json](./diagnostic/scope-import-bundle-safe.json): conservative fallback scope union grouped into \`tenant\` / \`user\`
- [diagnostic/service-api-scopes.md](./diagnostic/service-api-scopes.md): per-API scope-name lists
- [diagnostic/service-api-scopes.json](./diagnostic/service-api-scopes.json): machine-readable API-to-scope index
- [diagnostic/scope-to-apis.md](./diagnostic/scope-to-apis.md): reverse index from scope name to APIs
- [diagnostic/scope-to-apis.json](./diagnostic/scope-to-apis.json): machine-readable reverse index
- [diagnostic/service-api-permission-diff.md](./diagnostic/service-api-permission-diff.md): markdown vs API Explorer permission/token diffs for current APIs only
- [diagnostic/service-api-permission-diff.json](./diagnostic/service-api-permission-diff.json): machine-readable permission source diff report for current APIs only
- [diagnostic/service-api-old.md](./diagnostic/service-api-old.md): archived APIs with \`meta.Version === "old"\`
- [diagnostic/service-api-old.json](./diagnostic/service-api-old.json): archived old API data
- [diagnostic/scopes.json](./diagnostic/scopes.json): scope catalog snapshot used for permission enrichment

Methodology:

- Service API source: ${URLS.apiCatalog}
- API definition source: ${buildApiExplorerDefinitionUrl({
    project: 'event',
    version: 'v1',
    resource: 'outbound_ip',
    apiName: 'list',
})}
- Event source: ${URLS.eventCatalog}
- Scope source: ${URLS.scopeCatalog}
- SDK source: generated from \`scripts/analyze-public-api.js\`
- Old APIs and history/deprecated APIs are excluded from service API coverage evaluation and archived separately.
- Service API coverage keeps using \`server-side-api/list\`; request/response/token/scope metadata is merged from API Explorer and markdown, and markdown notices are used to detect history/deprecated APIs.
- Canonical permission outputs use API Explorer when available and fall back to markdown only when API Explorer is unavailable.
- Safe fallback permission outputs are generated from the union of API Explorer and markdown for preflight permission requests.

Regenerate with:

\`\`\`bash
node scripts/analyze-feishu-coverage.js
\`\`\`

Generated at: ${report.generatedAt}
`;
}

function toCanonicalReadme(report) {
    return `# Canonical Outputs

These files are the authoritative outputs for current Feishu APIs after excluding \`old\` and history/deprecated APIs.

Use this directory for:

- SDK coverage evaluation
- canonical per-API required scopes
- canonical application permission import bundles
- implementation-oriented API definitions

Files:

- [service-api-coverage.md](./service-api-coverage.md)
- [service-api-coverage.json](./service-api-coverage.json)
- [service-api-required-scopes.md](./service-api-required-scopes.md)
- [service-api-required-scopes.json](./service-api-required-scopes.json)
- [scope-import-bundle.json](./scope-import-bundle.json)
- [service-api-definitions.md](./service-api-definitions.md)
- [service-api-definitions.json](./service-api-definitions.json)
- [service-api-legacy.md](./service-api-legacy.md)
- [service-api-legacy.json](./service-api-legacy.json)
- [event-coverage.md](./event-coverage.md)
- [event-coverage.json](./event-coverage.json)

Rule:

- Permission outputs use API Explorer when available, and fall back to markdown only when API Explorer is unavailable.

Generated at: ${report.generatedAt}
`;
}

function toDiagnosticReadme(report) {
    return `# Diagnostic Outputs

These files are supporting diagnostics and conservative fallbacks. Do not treat them as canonical unless you are explicitly doing review, debugging, or preflight permission requests.

Use this directory for:

- markdown vs API Explorer permission diffs
- safe fallback scope bundles
- reverse indexes and scope snapshots
- archived \`old\` API inventory

Files:

- [service-api-required-scopes-safe.json](./service-api-required-scopes-safe.json)
- [scope-import-bundle-safe.json](./scope-import-bundle-safe.json)
- [service-api-scopes.md](./service-api-scopes.md)
- [service-api-scopes.json](./service-api-scopes.json)
- [scope-to-apis.md](./scope-to-apis.md)
- [scope-to-apis.json](./scope-to-apis.json)
- [service-api-permission-diff.md](./service-api-permission-diff.md)
- [service-api-permission-diff.json](./service-api-permission-diff.json)
- [service-api-old.md](./service-api-old.md)
- [service-api-old.json](./service-api-old.json)
- [scopes.json](./scopes.json)

Rule:

- Safe fallback permission outputs are generated from the union of API Explorer and markdown for preflight permission requests.

Generated at: ${report.generatedAt}
`;
}

async function analyzeServiceApis({
    apiCatalog,
    sdkByEndpoint,
    scopeMap,
    cacheDir,
    concurrency,
    apiLimit,
}) {
    const allApis = apiCatalog.data.apis.filter((item) => item.meta?.Type === 1);
    const selectedApis = apiLimit > 0 ? allApis.slice(0, apiLimit) : allApis;

    const analyzedItems = await mapLimit(selectedApis, concurrency, async (api) => {
        const httpMethod = String(api.url).split(':')[0];
        const pathValue = normalizeEndpointPath(String(api.url).split(':').slice(1).join(':'));
        const endpointKey = `${httpMethod} ${pathValue}`;
        const markdownUrl = buildFeishuMarkdownUrl(api.fullPath);
        let parsed = {
            supportAppTypesText: '',
            permissions: {
                rawText: '',
                mode: 'unknown',
                hasNoPermission: false,
                scopeNames: [],
                scopes: [],
            },
            fieldPermissions: {
                rawText: '',
                scopeNames: [],
                scopes: [],
            },
            tokenTypes: [],
            tokenEvidence: [],
        };
        let definition = {
            request: {
                basic: {
                    httpUrl: '',
                    httpMethod,
                    rateLimit: '',
                    supportAppTypes: '',
                },
                headers: [],
                pathParams: [],
                queryParams: [],
                body: [],
            },
            response: {
                summary: '',
                body: [],
            },
            errorCodes: [],
            traits: {
                pagination: false,
                upload: false,
                download: false,
                stream: false,
                fileResponse: false,
            },
        };
        let docFetchError = null;
        let explorerDefinition = null;
        let explorerDefinitionFetchError = null;
        let legacyReason = null;
        let markdownHistoryNoticeDetected = false;

        try {
            const markdown = await fetchText(markdownUrl, path.join(cacheDir, 'docs'));
            parsed = parseApiMarkdown(markdown, scopeMap);
            markdownHistoryNoticeDetected = Boolean(parsed.historyNoticeDetected);
            definition = extractApiDefinition(markdown, httpMethod);
        } catch (error) {
            docFetchError = String(error.message || error);
        }

        try {
            const explorerResponse = await fetchJson(
                buildApiExplorerDefinitionUrl({
                    project: api.meta.Project,
                    version: api.meta.Version,
                    resource: api.meta.Resource,
                    apiName: api.meta.Name,
                }),
                path.join(cacheDir, 'api-definition')
            );
            explorerDefinition = explorerResponse?.data || null;
            if (explorerDefinition) {
                definition = extractApiDefinitionFromExplorer(
                    explorerDefinition,
                    httpMethod,
                    parsed.supportAppTypesText || (api.supportAppTypes || []).join(', ')
                );
            }
        } catch (error) {
            explorerDefinitionFetchError = String(error.message || error);
        }

        const permissionSources = buildPermissionSources(parsed, explorerDefinition, scopeMap);
        const sdkMatches = sdkByEndpoint.get(endpointKey) || [];

        if (api.meta?.Version === 'old') {
            legacyReason = 'old_version';
        } else if ((api.tags || []).includes('history') || markdownHistoryNoticeDetected) {
            legacyReason = 'history';
        }

        return {
            id: api.id,
            name: api.name,
            detail: api.detail,
            bizTag: api.bizTag,
            fullPath: api.fullPath,
            markdownUrl,
            httpMethod,
            path: pathValue,
            endpointKey,
            supportAppTypes: api.supportAppTypes || [],
            meta: api.meta,
            tags: api.tags || [],
            updateTime: api.updateTime,
            permissions: {
                ...parsed.permissions,
                scopeNames: permissionSources.canonical.requiredScopeNames,
                scopes: permissionSources.canonical.requiredScopes,
            },
            fieldPermissions: {
                ...parsed.fieldPermissions,
                scopeNames: permissionSources.canonical.fieldScopeNames,
                scopes: permissionSources.canonical.fieldScopes,
            },
            tokenTypes: permissionSources.canonical.tokenTypes,
            tokenEvidence: parsed.tokenEvidence,
            definition,
            definitionSource: explorerDefinition ? 'api_explorer' : 'markdown',
            permissionSource: permissionSources.canonical.source,
            docFetchError,
            explorerDefinitionFetchError,
            markdownHistoryNoticeDetected,
            legacyReason,
            permissionSources,
            sdkCoverage: {
                covered: sdkMatches.length > 0,
                sdkMethods: sdkMatches.map((match) => match.canonicalClientPath),
                sdkAliases: sdkMatches.flatMap((match) => match.aliases),
                sdkSourceFiles: [...new Set(sdkMatches.flatMap((match) => match.sourceFiles))],
            },
        };
    });

    const currentItems = analyzedItems.filter((item) => !item.legacyReason);
    const oldItems = analyzedItems.filter((item) => item.legacyReason === 'old_version');
    const historyItems = analyzedItems.filter((item) => item.legacyReason === 'history');
    const legacyItems = analyzedItems.filter((item) => item.legacyReason);

    return {
        generatedAt: new Date().toISOString(),
        summary: buildCoverageSummary(currentItems, 'endpointKey'),
        oldApiCount: oldItems.length,
        historyApiCount: historyItems.length,
        items: currentItems.sort((a, b) => a.endpointKey.localeCompare(b.endpointKey)),
        oldItems: oldItems.sort((a, b) => a.endpointKey.localeCompare(b.endpointKey)),
        historyItems: historyItems.sort((a, b) => a.endpointKey.localeCompare(b.endpointKey)),
        legacyItems: legacyItems.sort((a, b) => a.endpointKey.localeCompare(b.endpointKey)),
    };
}

async function analyzeEvents({
    eventCatalog,
    sdkEventHandles,
    scopeMap,
    cacheDir,
    concurrency,
    eventLimit,
}) {
    const events = eventCatalog.data.events || [];
    const selectedEvents = eventLimit > 0 ? events.slice(0, eventLimit) : events;

    const items = await mapLimit(selectedEvents, concurrency, async (event) => {
        const markdownUrl = buildFeishuMarkdownUrl(event.fullPath);
        let parsed = {
            eventType: null,
            supportAppTypesText: '',
            permissions: {
                rawText: '',
                mode: 'unknown',
                hasNoPermission: false,
                scopeNames: [],
                scopes: [],
            },
            fieldPermissions: {
                rawText: '',
                scopeNames: [],
                scopes: [],
            },
        };
        let docFetchError = null;

        try {
            const markdown = await fetchText(markdownUrl, path.join(cacheDir, 'docs'));
            parsed = parseEventMarkdown(markdown, scopeMap);
        } catch (error) {
            docFetchError = String(error.message || error);
        }
        const eventType =
            parsed.eventType || `${event.meta?.Project}.${event.meta?.Resource}.${event.meta?.Name}_${event.meta?.Version}`;

        return {
            id: event.id,
            name: event.name,
            detail: event.detail,
            bizTag: event.bizTag,
            fullPath: event.fullPath,
            markdownUrl,
            supportAppTypes: event.supportAppTypes || [],
            meta: event.meta,
            tags: event.tags || [],
            updateTime: event.updateTime,
            eventType,
            permissions: parsed.permissions,
            fieldPermissions: parsed.fieldPermissions,
            docFetchError,
            sdkCoverage: {
                covered: sdkEventHandles.has(eventType),
                sdkHandle: sdkEventHandles.has(eventType) ? eventType : null,
            },
        };
    });

    return {
        generatedAt: new Date().toISOString(),
        summary: buildCoverageSummary(items, 'eventType'),
        items: items.sort((a, b) => a.eventType.localeCompare(b.eventType)),
    };
}

async function main() {
    const args = parseArgs(process.argv.slice(2));
    ensureDir(args.outputDir);
    ensureDir(path.join(args.outputDir, 'canonical'));
    ensureDir(path.join(args.outputDir, 'diagnostic'));
    ensureDir(args.cacheDir);

    [
        'service-api-coverage.json',
        'service-api-coverage.md',
        'service-api-old.json',
        'service-api-old.md',
        'service-api-legacy.json',
        'service-api-legacy.md',
        'event-coverage.json',
        'event-coverage.md',
        'service-api-scopes.json',
        'service-api-scopes.md',
        'service-api-required-scopes.json',
        'service-api-required-scopes.md',
        'service-api-required-scopes-safe.json',
        'scope-to-apis.json',
        'scope-to-apis.md',
        'scope-import-bundle.json',
        'scope-import-bundle-safe.json',
        'service-api-definitions.json',
        'service-api-definitions.md',
        'service-api-permission-diff.json',
        'service-api-permission-diff.md',
        'scopes.json',
    ].forEach((name) => removeIfExists(path.join(args.outputDir, name)));

    const sdkInventory = buildSdkInventory();
    const sdkByEndpoint = groupSdkByEndpoint(
        sdkInventory.canonicalGeneratedApiMethods || []
    );
    const sdkEventHandles = new Set(sdkInventory.eventHandles || []);

    const [apiCatalog, scopeCatalog, eventCatalog] = await Promise.all([
        fetchJson(URLS.apiCatalog, path.join(args.cacheDir, 'catalog')),
        fetchJson(URLS.scopeCatalog, path.join(args.cacheDir, 'catalog')),
        fetchJson(URLS.eventCatalog, path.join(args.cacheDir, 'catalog')),
    ]);

    const scopeMap = new Map(
        (scopeCatalog.data.scopes || []).map((scope) => [scope.name, scope])
    );

    const [serviceCoverage, eventCoverage] = await Promise.all([
        analyzeServiceApis({
            apiCatalog,
            sdkByEndpoint,
            scopeMap,
            cacheDir: args.cacheDir,
            concurrency: args.concurrency,
            apiLimit: args.apiLimit,
        }),
        analyzeEvents({
            eventCatalog,
            sdkEventHandles,
            scopeMap,
            cacheDir: args.cacheDir,
            concurrency: args.concurrency,
            eventLimit: args.eventLimit,
        }),
    ]);
    const apiScopeIndex = buildApiScopeIndex(serviceCoverage);
    const requiredApiScopeIndex = buildRequiredApiScopeIndex(apiScopeIndex);
    const safeRequiredApiScopeIndex = buildSafeRequiredApiScopeIndex(serviceCoverage);
    const scopeApiReverseIndex = buildScopeApiReverseIndex(apiScopeIndex);
    const scopeImportBundle = buildScopeImportBundle(apiScopeIndex);
    const safeScopeImportBundle = buildScopeImportBundle(safeRequiredApiScopeIndex);
    const apiDefinitions = buildApiDefinitionSnapshot(serviceCoverage);
    const permissionDiffReport = buildPermissionDiffReport(serviceCoverage);

    const generatedAt = new Date().toISOString();
    const scopeSnapshot = {
        generatedAt,
        source: URLS.scopeCatalog,
        bizInfos: scopeCatalog.data.bizInfos || [],
        scopes: scopeCatalog.data.scopes || [],
    };

    writeJson(canonicalOut(args.outputDir, 'service-api-coverage.json'), serviceCoverage);
    writeText(
        canonicalOut(args.outputDir, 'service-api-coverage.md'),
        toServiceCoverageMarkdown(serviceCoverage)
    );
    writeJson(
        diagnosticOut(args.outputDir, 'service-api-old.json'),
        {
            generatedAt,
            items: serviceCoverage.oldItems,
        }
    );
    writeText(
        diagnosticOut(args.outputDir, 'service-api-old.md'),
        toOldApiMarkdown({
            generatedAt,
            items: serviceCoverage.oldItems,
        })
    );
    writeJson(
        canonicalOut(args.outputDir, 'service-api-legacy.json'),
        {
            generatedAt,
            items: serviceCoverage.legacyItems,
        }
    );
    writeText(
        canonicalOut(args.outputDir, 'service-api-legacy.md'),
        toLegacyApiMarkdown({
            generatedAt,
            items: serviceCoverage.legacyItems,
        })
    );
    writeJson(canonicalOut(args.outputDir, 'event-coverage.json'), eventCoverage);
    writeText(
        canonicalOut(args.outputDir, 'event-coverage.md'),
        toEventCoverageMarkdown(eventCoverage)
    );
    writeJson(diagnosticOut(args.outputDir, 'service-api-scopes.json'), apiScopeIndex);
    writeText(
        diagnosticOut(args.outputDir, 'service-api-scopes.md'),
        toApiScopeMarkdown(apiScopeIndex)
    );
    writeJson(
        canonicalOut(args.outputDir, 'service-api-required-scopes.json'),
        requiredApiScopeIndex
    );
    writeJson(
        diagnosticOut(args.outputDir, 'service-api-required-scopes-safe.json'),
        safeRequiredApiScopeIndex
    );
    writeText(
        canonicalOut(args.outputDir, 'service-api-required-scopes.md'),
        toRequiredApiScopeMarkdown(requiredApiScopeIndex)
    );
    writeJson(
        diagnosticOut(args.outputDir, 'scope-to-apis.json'),
        scopeApiReverseIndex
    );
    writeText(
        diagnosticOut(args.outputDir, 'scope-to-apis.md'),
        toScopeApiReverseMarkdown(scopeApiReverseIndex)
    );
    writeJson(
        canonicalOut(args.outputDir, 'scope-import-bundle.json'),
        scopeImportBundle
    );
    writeJson(
        diagnosticOut(args.outputDir, 'scope-import-bundle-safe.json'),
        safeScopeImportBundle
    );
    writeJson(
        canonicalOut(args.outputDir, 'service-api-definitions.json'),
        apiDefinitions
    );
    writeText(
        canonicalOut(args.outputDir, 'service-api-definitions.md'),
        toApiDefinitionMarkdown(apiDefinitions)
    );
    writeJson(
        diagnosticOut(args.outputDir, 'service-api-permission-diff.json'),
        permissionDiffReport
    );
    writeText(
        diagnosticOut(args.outputDir, 'service-api-permission-diff.md'),
        toPermissionDiffMarkdown(permissionDiffReport)
    );
    writeJson(diagnosticOut(args.outputDir, 'scopes.json'), scopeSnapshot);
    writeText(
        path.join(args.outputDir, 'README.md'),
        toReadme({
            generatedAt,
        })
    );
    writeText(
        canonicalOut(args.outputDir, 'README.md'),
        toCanonicalReadme({
            generatedAt,
        })
    );
    writeText(
        diagnosticOut(args.outputDir, 'README.md'),
        toDiagnosticReadme({
            generatedAt,
        })
    );

    process.stdout.write(
        `${JSON.stringify(
            {
                wrote: [
                    'canonical/service-api-coverage.json',
                    'canonical/service-api-coverage.md',
                    'diagnostic/service-api-old.json',
                    'diagnostic/service-api-old.md',
                    'canonical/service-api-legacy.json',
                    'canonical/service-api-legacy.md',
                    'canonical/event-coverage.json',
                    'canonical/event-coverage.md',
                    'diagnostic/service-api-scopes.json',
                    'diagnostic/service-api-scopes.md',
                    'canonical/service-api-required-scopes.json',
                    'canonical/service-api-required-scopes.md',
                    'diagnostic/service-api-required-scopes-safe.json',
                    'diagnostic/scope-to-apis.json',
                    'diagnostic/scope-to-apis.md',
                    'canonical/scope-import-bundle.json',
                    'diagnostic/scope-import-bundle-safe.json',
                    'canonical/service-api-definitions.json',
                    'canonical/service-api-definitions.md',
                    'diagnostic/service-api-permission-diff.json',
                    'diagnostic/service-api-permission-diff.md',
                    'diagnostic/scopes.json',
                    'canonical/README.md',
                    'diagnostic/README.md',
                    'README.md',
                ].map((name) => path.join(path.relative(repoRoot, args.outputDir), name)),
                serviceApiCoverage: serviceCoverage.summary,
                eventCoverage: eventCoverage.summary,
            },
            null,
            2
        )}\n`
    );
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
