# Diagnostic Outputs

These files are supporting diagnostics and conservative fallbacks. Do not treat them as canonical unless you are explicitly doing review, debugging, or preflight permission requests.

Use this directory for:

- markdown vs API Explorer permission diffs
- safe fallback scope bundles
- reverse indexes and scope snapshots
- archived `old` API inventory

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

Generated at: 2026-04-03T07:56:52.278Z
