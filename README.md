# playwright-a11y-mcp

An MCP (Model Context Protocol) server that performs automated web accessibility audits using
Playwright + axe-core against WCAG 2.1 A/AA criteria.

- WCAG 2.1 A & AA rules (axe tags: `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`)
- Fast audits (target <30s end-to-end) using `networkidle` navigation
- Structured error handling with `McpError` codes
- Summarized metrics tool (`a11y_get_summary`) for quick issue overview

## Requirements

- Bun (https://bun.sh) installed locally
- Linux/macOS (Playwright Chromium will download automatically via dependency install)

## Installation

```sh
bun install
```

This installs dependencies and ensures Playwright browsers are available. If browsers are
missing, run:

```sh
bunx playwright install chromium
```

## Running the Server (Dev)

```sh
bun run dev
bunx @modelcontextprotocol/inspector
```

Server starts on `http://localhost:8080`.

### Endpoints

- `GET /healthcheck` → returns 200 when server is ready
- `POST /mcp` → MCP JSON-RPC endpoint (tools + capabilities)

## Development Notes

- Source: `src/index.ts` (server bootstrap), tools in `src/tools/`
- When adding new tools:
  - Validate all inputs with `zod`
  - Use `import type` for pure type imports
  - Wrap async logic in try/catch and throw `McpError` with a specific `ErrorCode`
  - Always close Playwright browser/context in `finally`
  - Keep performance in mind (short navigation & targeted evaluation)
- External imports first, blank line, then internal `@/*` paths

## Logging

Playwright console messages are prefixed with `PLAYWRIGHT LOG` and include the page URL for
easier traceability.

## Security Considerations

- Only navigates to the provided URL; does not execute arbitrary scripts beyond axe-core
  instrumentation
- Avoid scanning untrusted local file URLs
- Runs in headless Chromium with no persistent storage between audits

## Troubleshooting

- Browser download issues: run `bunx playwright install chromium`
- Slow audits: check network requests; pages with heavy third-party scripts may exceed the
  target time
- Empty results: ensure the URL is reachable and returns a valid HTML document

## Report Generation Prompt

The server exposes a prompt `generate-accessibility-report` that transforms raw tool JSON into
a comprehensive Markdown report (executive summary, detailed violations, remediation plan,
color contrast analysis, appendix).

### Steps

1. Run the detailed audit tool:
   - `a11y_audit_page` with `{ "url": "https://example.com" }`
2. Run the summary tool:
   - `a11y_get_summary` with `{ "url": "https://example.com" }`
3. Invoke the prompt with the raw JSON outputs (pass them as strings):

```json
{
  "name": "generate-accessibility-report",
  "arguments": {
    "url": "https://example.com",
    "auditJson": "<raw JSON string from a11y_audit_page>",
    "summaryJson": "<raw JSON string from a11y_get_summary>",
    "nodeDisplayThreshold": 50,
    "nodeDisplayHeadCount": 40,
    "paletteSuggestionsJson": "[ { \"role\": \"bodyText\", \"currentHex\": \"#666666\", \"proposedHex\": \"#4a4a4a\", \"contrastNote\": \"Improves contrast on light background\" } ]"
  }
}
```

### Arguments

- `url`: Page audited.
- `auditJson`: Raw JSON from `a11y_audit_page` (do not pre-parse; send exact string).
- `summaryJson`: Raw JSON from `a11y_get_summary`.
- `nodeDisplayThreshold` (default 50): If a violation affects more nodes than this, only a head
  subset is listed.
- `nodeDisplayHeadCount` (default 40): Number of nodes to list before truncation notice.
- `paletteSuggestionsJson` (optional): JSON array of suggested color contrast adjustments.

The prompt returns formatted Markdown suitable for inclusion in reports or documentation.
