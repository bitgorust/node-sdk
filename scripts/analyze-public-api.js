#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');

function removeIfExists(targetPath) {
    if (fs.existsSync(targetPath)) {
        fs.rmSync(targetPath, { recursive: true, force: true });
    }
}

function read(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}

function listProjectFiles() {
    const dir = path.join(repoRoot, 'code-gen', 'projects');
    return fs
        .readdirSync(dir)
        .filter((name) => name.endsWith('.ts'))
        .sort()
        .map((name) => path.join(dir, name));
}

function getIndent(line) {
    const match = line.match(/^(\s*)/);
    return match ? match[1].length : 0;
}

function buildLineIndex(lines) {
    const offsets = [];
    let cursor = 0;
    lines.forEach((line) => {
        offsets.push(cursor);
        cursor += line.length + 1;
    });
    return offsets;
}

function scanBraceDelta(text, state) {
    let delta = 0;
    let i = 0;

    while (i < text.length) {
        const ch = text[i];
        const next = text[i + 1];

        if (state.lineComment) {
            break;
        }

        if (state.blockComment) {
            if (ch === '*' && next === '/') {
                state.blockComment = false;
                i += 2;
                continue;
            }
            i += 1;
            continue;
        }

        if (state.quote) {
            if (ch === '\\') {
                i += 2;
                continue;
            }
            if (ch === state.quote) {
                state.quote = null;
            }
            i += 1;
            continue;
        }

        if (ch === '/' && next === '/') {
            state.lineComment = true;
            break;
        }

        if (ch === '/' && next === '*') {
            state.blockComment = true;
            i += 2;
            continue;
        }

        if (ch === '\'' || ch === '"' || ch === '`') {
            state.quote = ch;
            i += 1;
            continue;
        }

        if (ch === '{') {
            delta += 1;
        } else if (ch === '}') {
            delta -= 1;
        }

        i += 1;
    }

    state.lineComment = false;
    return delta;
}

function collectArrowFunction(lines, startLine) {
    const bodyLines = [];
    let lineIndex = startLine;
    let foundArrow = false;
    let braceDepth = 0;
    let bodyStarted = false;
    const state = {
        blockComment: false,
        lineComment: false,
        quote: null,
    };

    while (lineIndex < lines.length) {
        const line = lines[lineIndex];
        bodyLines.push(line);

        if (!foundArrow) {
            const arrowIndex = line.indexOf('=>');
            if (arrowIndex >= 0) {
                foundArrow = true;
                const afterArrow = line.slice(arrowIndex + 2);
                const openIndex = afterArrow.indexOf('{');
                if (openIndex >= 0) {
                    const chunk = afterArrow.slice(openIndex);
                    braceDepth += scanBraceDelta(chunk, state);
                    bodyStarted = true;
                    if (braceDepth === 0) {
                        break;
                    }
                }
            }
        } else if (bodyStarted) {
            braceDepth += scanBraceDelta(line, state);
            if (braceDepth === 0) {
                break;
            }
        }

        lineIndex += 1;
    }

    return {
        endLine: lineIndex,
        source: bodyLines.join('\n'),
    };
}

function extractRequestMeta(source) {
    const urlMatch = source.match(/url:\s*fillApiPath\(\s*`([^`]+)`/s);
    const methodMatch = source.match(/method:\s*"([A-Z]+)"/);
    const serializer = /paramsSerializer:/.test(source);
    const streamResponse = /responseType:\s*"stream"/.test(source);
    const writesFile = /writeFile:\s*async/.test(source);
    const returnsReadable = /getReadableStream:\s*\(/.test(source);

    if (!urlMatch || !methodMatch) {
        return null;
    }

    return {
        httpMethod: methodMatch[1],
        apiPath: urlMatch[1],
        traits: [
            serializer ? 'custom_params_serializer' : null,
            streamResponse ? 'stream_response' : null,
            writesFile ? 'write_file_helper' : null,
            returnsReadable ? 'readable_stream_helper' : null,
        ].filter(Boolean),
    };
}

function parseGeneratedProject(filePath) {
    const lines = read(filePath).split('\n');
    const projectName = path.basename(filePath, '.ts');
    const results = [];
    const stack = [];
    let lineIndex = 0;

    while (lineIndex < lines.length) {
        const line = lines[lineIndex];

        if (stack.length === 0) {
            const projectMatch = line.match(/^\s*([A-Za-z0-9_]+)\s*=\s*\{$/);
            if (projectMatch && projectMatch[1] === projectName) {
                stack.push({ key: projectMatch[1], indent: getIndent(line) });
            }
            lineIndex += 1;
            continue;
        }

        const methodMatch = line.match(/^(\s*)([A-Za-z0-9_]+):\s*async\s*\(/);
        if (methodMatch) {
            const fn = collectArrowFunction(lines, lineIndex);
            const requestMeta = extractRequestMeta(fn.source);
            if (requestMeta) {
                results.push({
                    clientPath: stack.map((item) => item.key).concat(methodMatch[2]).join('.'),
                    sourceFile: path.relative(repoRoot, filePath),
                    methodName: methodMatch[2],
                    ...requestMeta,
                    traits: [
                        ...requestMeta.traits,
                        methodMatch[2].endsWith('WithIterator')
                            ? 'iterator_helper'
                            : null,
                    ].filter(Boolean),
                });
            }
            lineIndex = fn.endLine + 1;
            continue;
        }

        const objectMatch = line.match(/^(\s*)([A-Za-z0-9_]+):\s*\{$/);
        if (objectMatch) {
            const indent = objectMatch[1].length;
            while (
                stack.length > 0 &&
                stack[stack.length - 1].indent >= indent
            ) {
                stack.pop();
            }
            stack.push({ key: objectMatch[2], indent });
            lineIndex += 1;
            continue;
        }

        const closeMatch = line.match(/^(\s*)},?\s*$/);
        if (closeMatch) {
            const indent = closeMatch[1].length;
            if (
                stack.length > 0 &&
                stack[stack.length - 1].indent === indent
            ) {
                stack.pop();
            }
        }

        lineIndex += 1;
    }

    return results;
}

function parseIndexExports() {
    const filePath = path.join(repoRoot, 'index.ts');
    const lines = read(filePath).split('\n');
    const exports = [];

    lines.forEach((line) => {
        let match = line.match(/^export \* from '(.+)';$/);
        if (match) {
            exports.push({
                type: 'star',
                source: match[1],
            });
            return;
        }

        match = line.match(/^export \* as ([A-Za-z0-9_]+) from '(.+)';$/);
        if (match) {
            exports.push({
                type: 'namespace',
                name: match[1],
                source: match[2],
            });
            return;
        }

        match = line.match(/^export \{(.+)\} from '(.+)';$/);
        if (match) {
            const names = match[1]
                .split(',')
                .map((item) => item.trim())
                .filter(Boolean)
                .map((item) => {
                    const aliasMatch = item.match(
                        /^([A-Za-z0-9_]+)\s+as\s+([A-Za-z0-9_]+)$/
                    );
                    if (aliasMatch) {
                        return {
                            imported: aliasMatch[1],
                            exported: aliasMatch[2],
                        };
                    }
                    return {
                        imported: item,
                        exported: item,
                    };
                });

            exports.push({
                type: 'named',
                names,
                source: match[2],
            });
        }
    });

    return exports;
}

function parseExportedDeclarations(filePath) {
    const lines = read(filePath).split('\n');
    const exports = [];

    lines.forEach((line) => {
        let match = line.match(/^\s*export class ([A-Za-z0-9_]+)/);
        if (match) {
            exports.push({ kind: 'class', name: match[1] });
            return;
        }

        match = line.match(/^\s*export const ([A-Za-z0-9_]+)/);
        if (match) {
            exports.push({ kind: 'const', name: match[1] });
            return;
        }

        match = line.match(/^\s*export enum ([A-Za-z0-9_]+)/);
        if (match) {
            exports.push({ kind: 'enum', name: match[1] });
        }
    });

    return exports;
}

function parseClassMethods(filePath, className) {
    const lines = read(filePath).split('\n');
    const methods = [];
    let inClass = false;
    let braceDepth = 0;
    let lineIndex = 0;

    while (lineIndex < lines.length) {
        const line = lines[lineIndex];

        if (!inClass) {
            const match = line.match(
                new RegExp(`^\\s*export class ${className}\\b`)
            );
            if (match) {
                inClass = true;
                braceDepth = scanBraceDelta(line, {
                    blockComment: false,
                    lineComment: false,
                    quote: null,
                });
            }
            lineIndex += 1;
            continue;
        }

        if (braceDepth <= 1) {
            const methodMatch = line.match(
                /^\s*(?!private\b)(?!protected\b)(?!static\b)(?:async\s+)?([A-Za-z0-9_]+)(?:<[^>]+>)?\s*\(/
            );
            if (methodMatch) {
                const name = methodMatch[1];
                if (name !== 'constructor') {
                    methods.push(name);
                }

                let memberDepth = 0;
                const state = {
                    blockComment: false,
                    lineComment: false,
                    quote: null,
                };

                let headerIndex = lineIndex;
                let openBraceIndex = line.indexOf('{');
                while (headerIndex < lines.length && openBraceIndex < 0) {
                    headerIndex += 1;
                    openBraceIndex = lines[headerIndex]
                        ? lines[headerIndex].indexOf('{')
                        : -1;
                }

                if (headerIndex >= lines.length || openBraceIndex < 0) {
                    lineIndex += 1;
                    continue;
                }

                memberDepth += scanBraceDelta(
                    lines[headerIndex].slice(openBraceIndex),
                    state
                );
                lineIndex = headerIndex + 1;

                while (lineIndex < lines.length && memberDepth > 0) {
                    memberDepth += scanBraceDelta(lines[lineIndex], state);
                    lineIndex += 1;
                }
                continue;
            }
        }

        braceDepth += scanBraceDelta(line, {
            blockComment: false,
            lineComment: false,
            quote: null,
        });
        if (braceDepth <= 0) {
            inClass = false;
        }
        lineIndex += 1;
    }

    return [...new Set(methods)];
}

function parseAilyCompletions() {
    const filePath = path.join(repoRoot, 'scene', 'aily', 'client.ts');
    const source = read(filePath);
    const match = source.match(/completions\s*=\s*\{([\s\S]+?)\n\s*\}/);
    if (!match) {
        return [];
    }

    const body = match[1];
    const results = [];

    if (/create:\s*this\.create\.bind\(this\)/.test(body)) {
        results.push('Aily.completions.create');
    }
    if (/createWithStream:\s*this\.createWithStream\.bind\(this\)/.test(body)) {
        results.push('Aily.completions.createWithStream');
    }
    if (/sessionRecords:\s*\{[\s\S]*get:\s*this\.getRecords\.bind\(this\)/.test(body)) {
        results.push('Aily.completions.sessionRecords.get');
    }
    if (/sessionRecords:\s*\{[\s\S]*update:\s*this\.updateRecords\.bind\(this\)/.test(body)) {
        results.push('Aily.completions.sessionRecords.update');
    }

    return results;
}

function parseEventHandles() {
    const filePath = path.join(repoRoot, 'code-gen', 'events-template.ts');
    const source = read(filePath);
    const results = [];
    const regex = /"([^"]+)"\?:\s*\(data:/g;
    let match;

    while ((match = regex.exec(source)) !== null) {
        results.push(match[1]);
    }

    return results.sort();
}

function summarizeProjects(apiMethods) {
    const groups = new Map();
    apiMethods.forEach((item) => {
        const project = item.clientPath.split('.')[0];
        if (!groups.has(project)) {
            groups.set(project, {
                project,
                methodCount: 0,
                methods: new Set(),
                resources: new Set(),
            });
        }

        const group = groups.get(project);
        group.methodCount += 1;
        group.methods.add(item.methodName);

        const parts = item.clientPath.split('.');
        if (parts.length > 2) {
            group.resources.add(parts.slice(1, -1).join('.'));
        }
    });

    return [...groups.values()]
        .map((item) => ({
            project: item.project,
            methodCount: item.methodCount,
            uniqueMethodNames: [...item.methods].sort(),
            resourceCount: item.resources.size,
        }))
        .sort((a, b) => a.project.localeCompare(b.project));
}

function toCanonicalClientPath(clientPath) {
    const parts = clientPath.split('.');
    if (parts.length >= 3 && /^v\d+$/.test(parts[1])) {
        return [parts[0]].concat(parts.slice(2)).join('.');
    }
    return clientPath;
}

function dedupeGeneratedApiMethods(apiMethods) {
    const byCanonical = new Map();

    apiMethods.forEach((item) => {
        const canonicalClientPath = toCanonicalClientPath(item.clientPath);
        const dedupeKey = [
            canonicalClientPath,
            item.httpMethod,
            item.apiPath,
        ].join('::');

        if (!byCanonical.has(dedupeKey)) {
            byCanonical.set(dedupeKey, {
                canonicalClientPath,
                httpMethod: item.httpMethod,
                apiPath: item.apiPath,
                traits: [...item.traits].sort(),
                aliases: [],
                sourceFiles: new Set(),
            });
        }

        const group = byCanonical.get(dedupeKey);
        group.aliases.push(item.clientPath);
        group.sourceFiles.add(item.sourceFile);
        group.traits = [...new Set(group.traits.concat(item.traits))].sort();
    });

    return [...byCanonical.values()]
        .map((item) => ({
            canonicalClientPath: item.canonicalClientPath,
            httpMethod: item.httpMethod,
            apiPath: item.apiPath,
            traits: item.traits,
            aliases: item.aliases.sort(),
            sourceFiles: [...item.sourceFiles].sort(),
        }))
        .sort((a, b) => a.canonicalClientPath.localeCompare(b.canonicalClientPath));
}

function summarizeCanonicalProjects(canonicalMethods) {
    const groups = new Map();
    canonicalMethods.forEach((item) => {
        const parts = item.canonicalClientPath.split('.');
        const project = parts[0];

        if (!groups.has(project)) {
            groups.set(project, {
                project,
                methodCount: 0,
                methods: new Set(),
                resources: new Set(),
                aliasCount: 0,
            });
        }

        const group = groups.get(project);
        group.methodCount += 1;
        group.aliasCount += item.aliases.length;
        group.methods.add(parts[parts.length - 1]);
        if (parts.length > 2) {
            group.resources.add(parts.slice(1, -1).join('.'));
        }
    });

    return [...groups.values()]
        .map((item) => ({
            project: item.project,
            canonicalMethodCount: item.methodCount,
            aliasCount: item.aliasCount,
            uniqueMethodNames: [...item.methods].sort(),
            resourceCount: item.resources.size,
        }))
        .sort((a, b) => a.project.localeCompare(b.project));
}

function buildAilyCompletionMappings(apiMethods) {
    const byPath = new Map(apiMethods.map((item) => [item.clientPath, item]));
    const pick = (clientPath) => {
        const item = byPath.get(clientPath);
        return item
            ? {
                  clientPath: item.clientPath,
                  httpMethod: item.httpMethod,
                  apiPath: item.apiPath,
              }
            : {
                  clientPath,
              };
    };

    return [
        {
            exportedPath: 'Aily.completions.create',
            sourceFile: 'scene/aily/client.ts',
            category: 'ai_scene',
            internalCalls: [
                {
                    kind: 'private_method',
                    target: 'Aily.waitReply',
                },
                {
                    kind: 'generated_api',
                    ...pick('aily.v1.ailySessionAilyMessage.listWithIterator'),
                },
            ],
            apiCalls: [
                pick('aily.v1.ailySession.create'),
                pick('aily.v1.ailySessionAilyMessage.create'),
                pick('aily.v1.ailySessionRun.create'),
                pick('aily.v1.ailySessionRun.get'),
                pick('aily.v1.ailySessionAilyMessage.listWithIterator'),
            ],
            notes: [
                'Creates a session if needed, sends a message, starts a run, polls run status, then returns the assistant reply.',
            ],
        },
        {
            exportedPath: 'Aily.completions.createWithStream',
            sourceFile: 'scene/aily/client.ts',
            category: 'ai_scene',
            internalCalls: [
                {
                    kind: 'private_method',
                    target: 'Aily.waitReply',
                },
                {
                    kind: 'generated_api',
                    ...pick('aily.v1.ailySessionAilyMessage.listWithIterator'),
                },
            ],
            apiCalls: [
                pick('aily.v1.ailySession.create'),
                pick('aily.v1.ailySessionAilyMessage.create'),
                pick('aily.v1.ailySessionRun.create'),
                pick('aily.v1.ailySessionRun.get'),
                pick('aily.v1.ailySessionAilyMessage.listWithIterator'),
            ],
            notes: [
                'Uses the same session/message/run flow as create, but streams assistant messages from listWithIterator.',
            ],
        },
        {
            exportedPath: 'Aily.completions.sessionRecords.get',
            sourceFile: 'scene/aily/client.ts',
            category: 'ai_scene',
            internalCalls: [
                {
                    kind: 'cache',
                    target: 'cache.get',
                    details: 'uses CAilySessionRecord key',
                },
            ],
            apiCalls: [],
            notes: ['Reads persisted session-id mappings from cache.'],
        },
        {
            exportedPath: 'Aily.completions.sessionRecords.update',
            sourceFile: 'scene/aily/client.ts',
            category: 'ai_scene',
            internalCalls: [
                {
                    kind: 'cache',
                    target: 'cache.set',
                    details: 'uses CAilySessionRecord key',
                },
            ],
            apiCalls: [],
            notes: ['Writes persisted session-id mappings to cache.'],
        },
    ];
}

function buildHandwrittenSurface(apiMethods) {
    const ailyCompletionMappings = buildAilyCompletionMappings(apiMethods);

    return [
        {
            exportedPath: 'Client.formatPayload',
            sourceFile: 'client/client.ts',
            category: 'request_pipeline',
            internalCalls: [
                { kind: 'internal_class', target: 'TokenManager.getTenantAccessToken' },
                { kind: 'internal_helper', target: 'string2Base64' },
            ],
            apiCalls: [],
            notes: [
                'Merges payload/options and injects Authorization or helpdesk headers before HTTP dispatch.',
            ],
        },
        {
            exportedPath: 'Client.request',
            sourceFile: 'client/client.ts',
            category: 'request_pipeline',
            internalCalls: [
                { kind: 'class_method', target: 'Client.formatPayload' },
                { kind: 'http_instance', target: 'httpInstance.request' },
            ],
            apiCalls: [],
            notes: [
                'Final HTTP dispatch path used by generated API methods after payload formatting.',
            ],
        },
        {
            exportedPath: 'withAll',
            sourceFile: 'client/request-with.ts',
            category: 'request_option_helper',
            internalCalls: [{ kind: 'library', target: 'lodash.merge' }],
            apiCalls: [],
            notes: ['Combines multiple IRequestOptions fragments.'],
        },
        {
            exportedPath: 'withTenantKey',
            sourceFile: 'client/request-with.ts',
            category: 'request_option_helper',
            internalCalls: [],
            apiCalls: [],
            notes: ['Produces request options carrying CTenantKey for ISV tenant token resolution.'],
        },
        {
            exportedPath: 'withHelpDeskCredential',
            sourceFile: 'client/request-with.ts',
            category: 'request_option_helper',
            internalCalls: [],
            apiCalls: [],
            notes: ['Marks a request so Client.formatPayload injects X-Lark-Helpdesk-Authorization.'],
        },
        {
            exportedPath: 'withTenantToken',
            sourceFile: 'client/request-with.ts',
            category: 'request_option_helper',
            internalCalls: [],
            apiCalls: [],
            notes: ['Builds Authorization header directly from a tenant token.'],
        },
        {
            exportedPath: 'withUserAccessToken',
            sourceFile: 'client/request-with.ts',
            category: 'request_option_helper',
            internalCalls: [],
            apiCalls: [],
            notes: ['Marks a request so Client.formatPayload injects a user access token.'],
        },
        {
            exportedPath: 'EventDispatcher.register',
            sourceFile: 'dispatcher/event.ts',
            category: 'event_dispatch',
            internalCalls: [],
            apiCalls: [],
            notes: ['Registers handlers keyed by event type.'],
        },
        {
            exportedPath: 'EventDispatcher.invoke',
            sourceFile: 'dispatcher/event.ts',
            category: 'event_dispatch',
            internalCalls: [
                { kind: 'internal_class', target: 'RequestHandle.checkIsEventValidated' },
                { kind: 'internal_class', target: 'RequestHandle.parse' },
                { kind: 'handler_map', target: 'registered event handlers' },
            ],
            apiCalls: [],
            notes: ['Validates, parses, and routes callback payloads to registered handlers.'],
        },
        {
            exportedPath: 'CardActionHandler.invoke',
            sourceFile: 'dispatcher/card.ts',
            category: 'event_dispatch',
            internalCalls: [
                { kind: 'internal_class', target: 'RequestHandle.checkIsCardEventValidated' },
                { kind: 'internal_class', target: 'RequestHandle.parse' },
                { kind: 'handler_map', target: 'registered event handlers' },
                { kind: 'handler', target: 'cardHandler callback' },
            ],
            apiCalls: [],
            notes: ['Validates card callbacks, runs app_ticket handler when needed, otherwise calls cardHandler.'],
        },
        {
            exportedPath: 'adaptDefault',
            sourceFile: 'adaptor/default.ts',
            category: 'web_adapter',
            internalCalls: [
                { kind: 'internal_helper', target: 'pickRequestData' },
                { kind: 'internal_helper', target: 'generateChallenge' },
                { kind: 'dispatcher', target: 'dispatcher.invoke' },
            ],
            apiCalls: [],
            notes: ['Builds a Node HTTP handler for event/card callbacks.'],
        },
        {
            exportedPath: 'adaptExpress',
            sourceFile: 'adaptor/express.ts',
            category: 'web_adapter',
            internalCalls: [
                { kind: 'internal_helper', target: 'pickRequestData' },
                { kind: 'internal_helper', target: 'generateChallenge' },
                { kind: 'dispatcher', target: 'dispatcher.invoke' },
            ],
            apiCalls: [],
            notes: ['Builds an Express handler for event/card callbacks.'],
        },
        {
            exportedPath: 'adaptKoa',
            sourceFile: 'adaptor/koa.ts',
            category: 'web_adapter',
            internalCalls: [
                { kind: 'internal_helper', target: 'pickRequestData' },
                { kind: 'internal_helper', target: 'generateChallenge' },
                { kind: 'dispatcher', target: 'dispatcher.invoke' },
            ],
            apiCalls: [],
            notes: ['Builds a Koa middleware for event/card callbacks.'],
        },
        {
            exportedPath: 'adaptKoaRouter',
            sourceFile: 'adaptor/koa-router.ts',
            category: 'web_adapter',
            internalCalls: [
                { kind: 'internal_helper', target: 'pickRequestData' },
                { kind: 'internal_helper', target: 'generateChallenge' },
                { kind: 'dispatcher', target: 'dispatcher.invoke' },
            ],
            apiCalls: [],
            notes: ['Builds a koa-router style middleware for event/card callbacks.'],
        },
        {
            exportedPath: 'generateChallenge',
            sourceFile: 'adaptor/services/challenge.ts',
            category: 'event_dispatch',
            internalCalls: [{ kind: 'internal_class', target: 'AESCipher.decrypt' }],
            apiCalls: [],
            notes: ['Detects url_verification challenge payloads and returns challenge response body.'],
        },
        {
            exportedPath: 'messageCard.defaultCard',
            sourceFile: 'utils/message-card.ts',
            category: 'message_card',
            internalCalls: [],
            apiCalls: [],
            notes: ['Creates a minimal interactive card JSON payload from title/content variables.'],
        },
        {
            exportedPath: 'AESCipher.decrypt',
            sourceFile: 'utils/aes-cipher.ts',
            category: 'crypto',
            internalCalls: [{ kind: 'node_builtin', target: 'crypto.createDecipheriv' }],
            apiCalls: [],
            notes: ['Decrypts Feishu encrypted callback payloads using AES-256-CBC.'],
        },
        {
            exportedPath: 'WSClient.start',
            sourceFile: 'ws-client/index.ts',
            category: 'websocket',
            internalCalls: [
                { kind: 'internal_method', target: 'WSClient.reConnect(true)' },
            ],
            apiCalls: [
                {
                    httpMethod: 'POST',
                    apiPath: 'wsConfig.wsConfigUrl',
                    details: 'performed inside pullConnectConfig via httpInstance.request',
                },
            ],
            notes: ['Starts persistent connection mode and binds an EventDispatcher.'],
        },
        {
            exportedPath: 'WSClient.close',
            sourceFile: 'ws-client/index.ts',
            category: 'websocket',
            internalCalls: [
                { kind: 'websocket', target: 'wsInstance.close / wsInstance.terminate' },
            ],
            apiCalls: [],
            notes: ['Stops ping/reconnect loops and closes the active WebSocket instance.'],
        },
        {
            exportedPath: 'WSClient.getReconnectInfo',
            sourceFile: 'ws-client/index.ts',
            category: 'websocket',
            internalCalls: [],
            apiCalls: [],
            notes: ['Returns in-memory reconnect timing state.'],
        },
    ].concat(ailyCompletionMappings);
}

function buildRuntimeSurface() {
    const exportedFiles = [
        'client/client.ts',
        'dispatcher/event.ts',
        'dispatcher/card.ts',
        'utils/aes-cipher.ts',
        'ws-client/index.ts',
        'scene/aily/client.ts',
    ];

    const classes = [];
    exportedFiles.forEach((relativePath) => {
        const filePath = path.join(repoRoot, relativePath);
        parseExportedDeclarations(filePath)
            .filter((item) => item.kind === 'class')
            .forEach((item) => {
                classes.push({
                    className: item.name,
                    sourceFile: relativePath,
                    methods: parseClassMethods(filePath, item.name),
                });
            });
    });

    return {
        functions: [
            'adaptDefault',
            'adaptExpress',
            'adaptKoa',
            'adaptKoaRouter',
            'generateChallenge',
            'withAll',
            'withTenantKey',
            'withHelpDeskCredential',
            'withTenantToken',
            'withUserAccessToken',
            'messageCard.defaultCard',
        ],
        classes,
        objectMethods: parseAilyCompletions(),
        notes: [
            'defaultHttpInstance is exported from http/index.ts as axios.create() result with request/response interceptors.',
        ],
    };
}

function buildReport() {
    const indexExports = parseIndexExports();
    const apiMethods = listProjectFiles().flatMap(parseGeneratedProject);
    const canonicalApiMethods = dedupeGeneratedApiMethods(apiMethods);
    const eventHandles = parseEventHandles();
    const runtimeSurface = buildRuntimeSurface();
    const handwrittenSurface = buildHandwrittenSurface(apiMethods);

    return {
        generatedAt: new Date().toISOString(),
        summary: {
            projectCount: new Set(
                apiMethods.map((item) => item.clientPath.split('.')[0])
            ).size,
            generatedApiMethodCount: apiMethods.length,
            canonicalGeneratedApiMethodCount: canonicalApiMethods.length,
            eventHandleCount: eventHandles.length,
            handwrittenExportedMethodCount: handwrittenSurface.length,
        },
        indexExports,
        runtimeSurface,
        handwrittenSurface,
        generatedProjects: summarizeProjects(apiMethods),
        canonicalGeneratedProjects: summarizeCanonicalProjects(canonicalApiMethods),
        generatedApiMethods: apiMethods.sort((a, b) =>
            a.clientPath.localeCompare(b.clientPath)
        ),
        canonicalGeneratedApiMethods: canonicalApiMethods,
        eventHandles,
    };
}

function buildCanonicalReport(report) {
    return {
        generatedAt: report.generatedAt,
        summary: {
            projectCount: report.summary.projectCount,
            canonicalGeneratedApiMethodCount:
                report.summary.canonicalGeneratedApiMethodCount,
            eventHandleCount: report.summary.eventHandleCount,
            handwrittenExportedMethodCount:
                report.summary.handwrittenExportedMethodCount,
        },
        indexExports: report.indexExports,
        runtimeSurface: report.runtimeSurface,
        handwrittenSurface: report.handwrittenSurface,
        canonicalGeneratedProjects: report.canonicalGeneratedProjects,
        canonicalGeneratedApiMethods: report.canonicalGeneratedApiMethods,
        eventHandles: report.eventHandles,
    };
}

function buildRawReport(report) {
    return {
        generatedAt: report.generatedAt,
        summary: {
            projectCount: report.summary.projectCount,
            generatedApiMethodCount: report.summary.generatedApiMethodCount,
        },
        generatedProjects: report.generatedProjects,
        generatedApiMethods: report.generatedApiMethods,
    };
}

function toMarkdown(report, options = {}) {
    const { rawOnly = false } = options;
    const lines = [];
    lines.push(rawOnly ? '# Raw Public API Inventory' : '# Public API Inventory');
    lines.push('');

    if (rawOnly) {
        lines.push(`- Raw exported API methods: ${report.summary.generatedApiMethodCount}`);
        lines.push(`- Generated projects: ${report.summary.projectCount}`);
        lines.push('');
        lines.push('## Raw Project Summary');
        lines.push('');
        report.generatedProjects.forEach((item) => {
            lines.push(
                `- ${item.project}: ${item.methodCount} methods across ${item.resourceCount} resources`
            );
        });
        lines.push('');
        lines.push('## Raw Exported Methods');
        lines.push('');
        report.generatedApiMethods.forEach((item) => {
            lines.push(
                `- ${item.clientPath} -> ${item.httpMethod} ${item.apiPath}${
                    item.traits.length ? ` [${item.traits.join(', ')}]` : ''
                }`
            );
        });
    } else {
        lines.push(`- Canonical generated API methods: ${report.summary.canonicalGeneratedApiMethodCount}`);
        lines.push(`- Generated event handles: ${report.summary.eventHandleCount}`);
        lines.push(`- Generated projects: ${report.summary.projectCount}`);
        lines.push(
            `- Handwritten exported methods/functions: ${report.summary.handwrittenExportedMethodCount}`
        );
        lines.push('');
        lines.push('## Runtime Surface');
        lines.push('');
        report.runtimeSurface.functions.forEach((name) => {
            lines.push(`- ${name}`);
        });
        report.runtimeSurface.objectMethods.forEach((name) => {
            lines.push(`- ${name}`);
        });
        report.runtimeSurface.classes.forEach((item) => {
            lines.push(`- ${item.className} (${item.sourceFile}): ${item.methods.join(', ')}`);
        });
        lines.push('');
        lines.push('## Canonical Project Summary');
        lines.push('');
        report.canonicalGeneratedProjects.forEach((item) => {
            lines.push(
                `- ${item.project}: ${item.canonicalMethodCount} canonical methods across ${item.resourceCount} resources (${item.aliasCount} exported aliases)`
            );
        });
        lines.push('');
        lines.push('## Handwritten Surface And Call Chains');
        lines.push('');
        report.handwrittenSurface.forEach((item) => {
            lines.push(`- ${item.exportedPath} (${item.sourceFile})`);
            (item.notes || []).forEach((note) => {
                lines.push(`  note: ${note}`);
            });
            if ((item.internalCalls || []).length) {
                lines.push(
                    `  internal: ${(item.internalCalls || [])
                        .map((call) =>
                            `${call.target || call.clientPath || call.apiPath}${
                                call.details ? ` (${call.details})` : ''
                            }`
                        )
                        .join(', ')}`
                );
            }
            if ((item.apiCalls || []).length) {
                lines.push(
                    `  apis: ${(item.apiCalls || [])
                        .map((call) =>
                            call.httpMethod && call.apiPath
                                ? `${call.httpMethod} ${call.apiPath}`
                                : call.clientPath || call.apiPath
                        )
                        .join(', ')}`
                );
            }
        });
        lines.push('');
        lines.push('## Canonical Generated API Methods');
        lines.push('');
        report.canonicalGeneratedApiMethods.forEach((item) => {
            lines.push(
                `- ${item.canonicalClientPath} -> ${item.httpMethod} ${item.apiPath}${
                    item.traits.length ? ` [${item.traits.join(', ')}]` : ''
                }${item.aliases.length > 1 ? ` aliases: ${item.aliases.join(', ')}` : ''}`
            );
        });
        lines.push('');
        lines.push('## Event Handles');
        lines.push('');
        report.eventHandles.forEach((name) => {
            lines.push(`- ${name}`);
        });
    }
    return `${lines.join('\n')}\n`;
}

function groupByProject(items, key) {
    const groups = new Map();
    items.forEach((item) => {
        const project = item[key].split('.')[0];
        if (!groups.has(project)) {
            groups.set(project, []);
        }
        groups.get(project).push(item);
    });
    return groups;
}

function ensureDir(dirPath) {
    fs.mkdirSync(dirPath, { recursive: true });
}

function writeCanonicalProjectMarkdownFiles(report, outputDir) {
    const absOutputDir = path.resolve(repoRoot, outputDir);
    ensureDir(absOutputDir);

    const canonicalByProject = groupByProject(
        report.canonicalGeneratedApiMethods,
        'canonicalClientPath'
    );
    const eventByProject = new Map();
    report.eventHandles.forEach((name) => {
        const project = name.split('.')[0];
        if (!eventByProject.has(project)) {
            eventByProject.set(project, []);
        }
        eventByProject.get(project).push(name);
    });

    const projects = [...new Set([
        ...canonicalByProject.keys(),
        ...eventByProject.keys(),
    ])].sort();

    const indexLines = [
        '# Canonical Inventory',
        '',
        'This directory contains the deduplicated capability view.',
        '',
        'Use this directory for:',
        '',
        '- checking the canonical SDK method surface',
        '- mapping one logical SDK method to one API capability',
        '- project-by-project capability review',
        '',
        'See also:',
        '',
        '- [summary markdown](./summary.md)',
        '- [summary json](./summary.json)',
        '',
        '## By Project',
        '',
    ];
    projects.forEach((project) => {
        indexLines.push(`- [${project}](./${project}.md)`);
    });
    indexLines.push('');
    fs.writeFileSync(path.join(absOutputDir, 'README.md'), `${indexLines.join('\n')}\n`);

    projects.forEach((project) => {
        const lines = [`# ${project} API Inventory`, ''];
        const canonicalItems = (canonicalByProject.get(project) || []).sort((a, b) =>
            a.canonicalClientPath.localeCompare(b.canonicalClientPath)
        );
        const events = (eventByProject.get(project) || []).sort();

        lines.push(`- Canonical methods: ${canonicalItems.length}`);
        lines.push(`- Event handles: ${events.length}`);
        lines.push('');

        lines.push('## Canonical Methods');
        lines.push('');
        canonicalItems.forEach((item) => {
            lines.push(
                `- ${item.canonicalClientPath} -> ${item.httpMethod} ${item.apiPath}${
                    item.traits.length ? ` [${item.traits.join(', ')}]` : ''
                }${item.aliases.length > 1 ? ` aliases: ${item.aliases.join(', ')}` : ''}`
            );
        });
        lines.push('');

        lines.push('## Event Handles');
        lines.push('');
        events.forEach((name) => {
            lines.push(`- ${name}`);
        });
        lines.push('');

        fs.writeFileSync(path.join(absOutputDir, `${project}.md`), `${lines.join('\n')}\n`);
    });
}

function writeRawProjectMarkdownFiles(report, outputDir) {
    const absOutputDir = path.resolve(repoRoot, outputDir);
    ensureDir(absOutputDir);
    const rawByProject = groupByProject(report.generatedApiMethods, 'clientPath');
    const projects = [...rawByProject.keys()].sort();

    const indexLines = [
        '# Raw Inventory',
        '',
        'This directory contains the raw exported-method view before canonical deduplication.',
        '',
        'Use this directory for:',
        '',
        '- checking all exported generated methods',
        '- investigating aliasing and versioned paths',
        '- understanding how canonical methods were collapsed from raw exports',
        '',
        'See also:',
        '',
        '- [summary markdown](./summary.md)',
        '- [summary json](./summary.json)',
        '',
        '## By Project',
        '',
    ];
    projects.forEach((project) => {
        indexLines.push(`- [${project}](./${project}.md)`);
    });
    indexLines.push('');
    fs.writeFileSync(path.join(absOutputDir, 'README.md'), `${indexLines.join('\n')}\n`);

    projects.forEach((project) => {
        const rawItems = (rawByProject.get(project) || []).sort((a, b) =>
            a.clientPath.localeCompare(b.clientPath)
        );
        const lines = [`# ${project} Raw API Inventory`, ''];
        lines.push(`- Raw exported methods: ${rawItems.length}`);
        lines.push('');
        lines.push('## Raw Exported Methods');
        lines.push('');
        rawItems.forEach((item) => {
            lines.push(
                `- ${item.clientPath} -> ${item.httpMethod} ${item.apiPath}${
                    item.traits.length ? ` [${item.traits.join(', ')}]` : ''
                }`
            );
        });
        lines.push('');
        fs.writeFileSync(path.join(absOutputDir, `${project}.md`), `${lines.join('\n')}\n`);
    });
}

function main() {
    const report = buildReport();
    const argv = process.argv.slice(2);
    const args = new Set(argv);
    const getArgValue = (name) => {
        const index = argv.indexOf(name);
        if (index >= 0 && index + 1 < argv.length) {
            return argv[index + 1];
        }
        return null;
    };
    const jsonOut = getArgValue('--out-json');
    const markdownOut = getArgValue('--out-markdown');
    const projectMarkdownDir = getArgValue('--out-project-markdown-dir');
    const rawJsonOut = getArgValue('--out-raw-json');
    const rawMarkdownOut = getArgValue('--out-raw-markdown');
    const rawProjectMarkdownDir = getArgValue('--out-raw-project-markdown-dir');
    const canonicalReport = buildCanonicalReport(report);
    const rawReport = buildRawReport(report);

    if (jsonOut) {
        fs.writeFileSync(
            path.resolve(repoRoot, jsonOut),
            `${JSON.stringify(canonicalReport, null, 2)}\n`
        );
    }

    if (markdownOut) {
        fs.writeFileSync(
            path.resolve(repoRoot, markdownOut),
            toMarkdown(canonicalReport)
        );
    }

    if (rawJsonOut) {
        fs.writeFileSync(
            path.resolve(repoRoot, rawJsonOut),
            `${JSON.stringify(rawReport, null, 2)}\n`
        );
    }

    if (rawMarkdownOut) {
        fs.writeFileSync(
            path.resolve(repoRoot, rawMarkdownOut),
            toMarkdown(rawReport, { rawOnly: true })
        );
    }

    if (projectMarkdownDir) {
        writeCanonicalProjectMarkdownFiles(canonicalReport, projectMarkdownDir);
    }

    if (rawProjectMarkdownDir) {
        writeRawProjectMarkdownFiles(rawReport, rawProjectMarkdownDir);
    }

    if (
        jsonOut === 'doc/api-inventory/canonical/summary.json' &&
        markdownOut === 'doc/api-inventory/canonical/summary.md' &&
        projectMarkdownDir === 'doc/api-inventory/canonical' &&
        rawJsonOut === 'doc/api-inventory/raw/summary.json' &&
        rawMarkdownOut === 'doc/api-inventory/raw/summary.md' &&
        rawProjectMarkdownDir === 'doc/api-inventory/raw'
    ) {
        removeIfExists(path.join(repoRoot, 'doc', 'api-inventory', 'canonical.json'));
        removeIfExists(path.join(repoRoot, 'doc', 'api-inventory', 'canonical.md'));
        removeIfExists(path.join(repoRoot, 'doc', 'api-inventory', 'raw.json'));
        removeIfExists(path.join(repoRoot, 'doc', 'api-inventory', 'raw.md'));
        const rootReadmePath = path.join(repoRoot, 'doc', 'api-inventory', 'README.md');
        const rootLines = [
            '# API Inventory',
            '',
            'This directory contains two views of the SDK API surface.',
            '',
            '## Canonical',
            '',
            '- [`canonical/summary.md`](./canonical/summary.md): deduplicated capability view',
            '- [`canonical/summary.json`](./canonical/summary.json): machine-readable canonical view',
            '- [`canonical/README.md`](./canonical/README.md): per-project canonical files',
            '',
            'Use canonical when you want the stable, non-duplicated SDK capability list.',
            '',
            '## Raw',
            '',
            '- [`raw/summary.md`](./raw/summary.md): full exported-method view',
            '- [`raw/summary.json`](./raw/summary.json): machine-readable raw view',
            '- [`raw/README.md`](./raw/README.md): per-project raw files',
            '',
            'Use raw when you want to inspect aliases, versioned exports, or pre-deduplication details.',
            '',
            'Regenerate with:',
            '',
            '```bash',
            'node scripts/analyze-public-api.js \\',
            '  --out-json doc/api-inventory/canonical/summary.json \\',
            '  --out-markdown doc/api-inventory/canonical/summary.md \\',
            '  --out-project-markdown-dir doc/api-inventory/canonical \\',
            '  --out-raw-json doc/api-inventory/raw/summary.json \\',
            '  --out-raw-markdown doc/api-inventory/raw/summary.md \\',
            '  --out-raw-project-markdown-dir doc/api-inventory/raw',
            '```',
            '',
        ];
        fs.writeFileSync(rootReadmePath, `${rootLines.join('\n')}\n`);
    }

    if (
        jsonOut ||
        markdownOut ||
        projectMarkdownDir ||
        rawJsonOut ||
        rawMarkdownOut ||
        rawProjectMarkdownDir
    ) {
        process.stdout.write(
            `${JSON.stringify(
                {
                    wrote: [
                        jsonOut,
                        markdownOut,
                        projectMarkdownDir,
                        rawJsonOut,
                        rawMarkdownOut,
                        rawProjectMarkdownDir,
                    ].filter(Boolean),
                    summary: report.summary,
                },
                null,
                2
            )}\n`
        );
        return;
    }

    if (args.has('--markdown')) {
        process.stdout.write(toMarkdown(canonicalReport));
        return;
    }

    process.stdout.write(`${JSON.stringify(canonicalReport, null, 2)}\n`);
}

main();
