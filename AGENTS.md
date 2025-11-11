# Agent Development Guidelines

## Build/Test Commands
- `bun install` - Install dependencies and Playwright browsers
- `bun run dev` - Start dev server with hot reload on http://localhost:8080
- `bun run build` - Build production bundle to `build/` directory
- `bun run prettier:check` - Check formatting (fails on issues)
- `bun run prettier:write` - Auto-format all code
- `bunx playwright install chromium` - Install Playwright browsers if missing

## Code Style
- **Imports**: External deps first, blank line, then `@/*` internal paths (auto-sorted by prettier plugin)
- **Type Imports**: Use `import type` for pure type imports (e.g., `import type { McpServer }`)
- **Formatting**: Single quotes, 95 char width, trailing commas, semicolons (enforced by Prettier)
- **Strict TypeScript**: All code must pass strict mode checks (`strict: true` in tsconfig)
- **Input Validation**: Validate all tool inputs with `zod` schemas
- **Error Handling**: Wrap async logic in try/catch, throw `McpError` with specific `ErrorCode`
- **Resource Cleanup**: Always close Playwright browser/context in `finally` blocks
- **Naming**: camelCase for functions/variables, PascalCase for types/schemas
- **Performance**: Target <30s audits, use `networkidle` navigation, avoid heavy operations
- **Path Aliases**: Use `@/*` for imports from `src/` directory

## Architecture Notes
- MCP server using `@hono/mcp` with tools registered in `src/tools/`
- Main server bootstrap: `src/mcp.ts`, HTTP wrapper: `src/server.ts`
- Playwright utils in `src/utils/playwright.ts` for browser automation
