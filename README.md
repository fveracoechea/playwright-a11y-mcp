# playwright-a11y-mcp

MCP server for automated web accessibility audits using Playwright + axe-core against WCAG 2.1 A/AA criteria.

**Features:**
- WCAG 2.1 A & AA compliance checks
- Fast audits (target <30s) with `networkidle` navigation
- Screenshot capture for critical/serious violations
- Structured JSON output with detailed violation data

## Quick Start

```sh
# Install dependencies
bun install

# Start dev server (http://localhost:8080)
bun run dev

# Test with MCP Inspector
bunx @modelcontextprotocol/inspector
```

**Requirements:** [Bun](https://bun.sh) on Linux/macOS

If browsers are missing: `bunx playwright install chromium`

## Available Tools

### `a11y_audit_page`
Performs full WCAG 2.1 AA audit with violation details and screenshots.

```json
{ "url": "https://example.com" }
```

### `a11y_get_summary`
Quick summary of violations by impact level (critical/serious/moderate/minor).

```json
{ "url": "https://example.com" }
```

### `a11y_test_page`
Simple connectivity test to verify URL is accessible before auditing.

```json
{ "url": "https://example.com" }
```

## Available Prompts

### `generate-accessibility-report`
Transforms audit JSON into comprehensive Markdown report with executive summary, detailed violations, and remediation plan.

**Usage:** Run `a11y_audit_page` and `a11y_get_summary`, then pass raw JSON outputs to this prompt.

## Development

```sh
bun run build              # Build for production
bun run prettier:check     # Check formatting
bun run prettier:write     # Auto-format code
```

**Code guidelines:** See [AGENTS.md](./AGENTS.md) for style rules, architecture notes, and best practices.

**Project structure:**
- `src/mcp.ts` - Server bootstrap and tool registration
- `src/tools/` - MCP tool implementations
- `src/utils/playwright.ts` - Browser automation utilities

## HTTP Endpoints

- `GET /healthcheck` - Health check (returns 200 when ready)
- `POST /mcp` - MCP JSON-RPC endpoint

## Troubleshooting

**Browser issues:** `bunx playwright install chromium`  
**Slow audits:** Pages with heavy scripts may exceed 30s target  
**Empty results:** Verify URL is reachable and returns valid HTML

## Security

- Only navigates to provided URLs (no arbitrary script execution beyond axe-core)
- Runs in headless Chromium with no persistent storage
- Avoid scanning untrusted local file URLs
