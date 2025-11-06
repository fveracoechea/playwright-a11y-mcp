import AxeBuilder from '@axe-core/playwright';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp';
import { ErrorCode, McpError } from '@modelcontextprotocol/sdk/types.js';
import { chromium, devices } from 'playwright';
import z from 'zod';

export function auditPageTool(mcp: McpServer) {
  mcp.registerTool(
    'a11y_audit_page',
    {
      title: 'Accessibility Audit Webpage',
      description: 'Perform an WCAG 2.1 AA accessibility audit on a given webpage URL',
      inputSchema: { url: z.string().url() },
      // outputSchema: { url: z.string().url() },
    },
    async function ({ url }) {
      try {
        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext(devices['Desktop Chrome']);
        const page = await context.newPage();

        page.on('console', msg => console.log(`PLAYWRIGHT LOG`, url, msg.text()));

        await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

        // @ts-expect-error page types
        const result = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
          .analyze();

        await browser.close();

        console.log(result.violations[0].nodes);

        const output = result.violations;
        return {
          content: [{ type: 'text', text: JSON.stringify(output) }],
          // structuredContent: output,
        };
      } catch (e) {
        throw new McpError(
          ErrorCode.InternalError,
          `${e instanceof Error ? e.message : 'Error auditing webpage'} - ${url}`,
        );
      }
    },
  );
}
