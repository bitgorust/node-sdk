# API Inventory

This directory contains two views of the SDK API surface.

## Canonical

- [`canonical/summary.md`](./canonical/summary.md): deduplicated capability view
- [`canonical/summary.json`](./canonical/summary.json): machine-readable canonical view
- [`canonical/README.md`](./canonical/README.md): per-project canonical files

Use canonical when you want the stable, non-duplicated SDK capability list.

## Raw

- [`raw/summary.md`](./raw/summary.md): full exported-method view
- [`raw/summary.json`](./raw/summary.json): machine-readable raw view
- [`raw/README.md`](./raw/README.md): per-project raw files

Use raw when you want to inspect aliases, versioned exports, or pre-deduplication details.

Regenerate with:

```bash
node scripts/analyze-public-api.js \
  --out-json doc/api-inventory/canonical/summary.json \
  --out-markdown doc/api-inventory/canonical/summary.md \
  --out-project-markdown-dir doc/api-inventory/canonical \
  --out-raw-json doc/api-inventory/raw/summary.json \
  --out-raw-markdown doc/api-inventory/raw/summary.md \
  --out-raw-project-markdown-dir doc/api-inventory/raw
```

