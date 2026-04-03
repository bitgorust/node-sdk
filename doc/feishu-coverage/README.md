# Feishu Coverage

This directory contains generated coverage artifacts comparing the SDK with the official Feishu server-side API and event catalogs.

## Canonical

- [canonical/service-api-coverage.md](./canonical/service-api-coverage.md): current service API coverage summary
- [canonical/service-api-coverage.json](./canonical/service-api-coverage.json): detailed current service API coverage data
- [canonical/service-api-required-scopes.md](./canonical/service-api-required-scopes.md): canonical required scopes only for each API
- [canonical/service-api-required-scopes.json](./canonical/service-api-required-scopes.json): machine-readable canonical required-scope index
- [canonical/scope-import-bundle.json](./canonical/scope-import-bundle.json): canonical required-scope union grouped into `tenant` / `user`
- [canonical/service-api-definitions.md](./canonical/service-api-definitions.md): implementation-oriented request/response/error summary per current API
- [canonical/service-api-definitions.json](./canonical/service-api-definitions.json): machine-readable request/response/error snapshot for current APIs only
- [canonical/service-api-legacy.md](./canonical/service-api-legacy.md): archived APIs excluded from evaluation, including `old` and history/deprecated APIs
- [canonical/service-api-legacy.json](./canonical/service-api-legacy.json): machine-readable legacy API archive
- [canonical/event-coverage.md](./canonical/event-coverage.md): server-side event coverage summary
- [canonical/event-coverage.json](./canonical/event-coverage.json): detailed event coverage data

## Diagnostic

- [diagnostic/service-api-required-scopes-safe.json](./diagnostic/service-api-required-scopes-safe.json): conservative fallback required-scope index using union across sources
- [diagnostic/scope-import-bundle-safe.json](./diagnostic/scope-import-bundle-safe.json): conservative fallback scope union grouped into `tenant` / `user`
- [diagnostic/service-api-scopes.md](./diagnostic/service-api-scopes.md): per-API scope-name lists
- [diagnostic/service-api-scopes.json](./diagnostic/service-api-scopes.json): machine-readable API-to-scope index
- [diagnostic/scope-to-apis.md](./diagnostic/scope-to-apis.md): reverse index from scope name to APIs
- [diagnostic/scope-to-apis.json](./diagnostic/scope-to-apis.json): machine-readable reverse index
- [diagnostic/service-api-permission-diff.md](./diagnostic/service-api-permission-diff.md): markdown vs API Explorer permission/token diffs for current APIs only
- [diagnostic/service-api-permission-diff.json](./diagnostic/service-api-permission-diff.json): machine-readable permission source diff report for current APIs only
- [diagnostic/service-api-old.md](./diagnostic/service-api-old.md): archived APIs with `meta.Version === "old"`
- [diagnostic/service-api-old.json](./diagnostic/service-api-old.json): archived old API data
- [diagnostic/scopes.json](./diagnostic/scopes.json): scope catalog snapshot used for permission enrichment

Methodology:

- Service API source: https://open.feishu.cn/api/tools/server-side-api/list
- API definition source: https://open.feishu.cn/api_explorer/v1/api_definition?project=event&version=v1&resource=outbound_ip&apiName=list
- Event source: https://open.feishu.cn/api/tools/server-side-event/list
- Scope source: https://open.feishu.cn/api/tools/scope/list
- SDK source: generated from `scripts/analyze-public-api.js`
- Old APIs and history/deprecated APIs are excluded from service API coverage evaluation and archived separately.
- Service API coverage keeps using `server-side-api/list`; request/response/token/scope metadata is merged from API Explorer and markdown, and markdown notices are used to detect history/deprecated APIs.
- Canonical permission outputs use API Explorer when available and fall back to markdown only when API Explorer is unavailable.
- Safe fallback permission outputs are generated from the union of API Explorer and markdown for preflight permission requests.

Regenerate with:

```bash
node scripts/analyze-feishu-coverage.js
```

Generated at: 2026-04-03T07:56:52.278Z
