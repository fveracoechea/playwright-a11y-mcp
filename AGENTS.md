# AGENTS.md
Purpose: MCP server for Playwright-based WCAG a11y audits.
Build/Dev: install deps `bun install`; hot dev `bun run dev`.
Run: server listens on :8080; health at `/healthcheck`; MCP endpoint `/mcp`.
Tests: Not required (runtime tooling server); focus on tool correctness.
Audit Tool: `auditPageTool` registers `a11y_audit_page` for URL WCAG 2.1 AA scan.
Accessibility: Use AxeBuilder tags `["wcag2a","wcag2aa","wcag21a","wcag21aa"]`; change only with justification.
Browser: Launch Chromium; always close browser/context in `finally` when adding tools.
Imports: external packages first, blank line, then internal `@/*` paths.
Type imports: prefer `import type { Foo } from ...` for pure types.
Types: TS strict; avoid `any`; validate all tool inputs with `zod`.
Naming: files kebab-case; functions/vars camelCase; exported tool funcs verb-noun.
Errors: wrap async tool bodies in try/catch; throw `McpError(ErrorCode.X, message)`.
Logging: prefix Playwright console logs with `PLAYWRIGHT LOG` and include URL.
Dependencies: after adding/removing run `bun install` to refresh `bun.nix`.
Performance: Keep audits under 30s timeout; use `networkidle` navigation.
Security: Never execute untrusted scripts; only navigate to provided URL.
No Cursor or Copilot rules present; include them here if added.
Keep changes minimal; avoid unrelated refactors.