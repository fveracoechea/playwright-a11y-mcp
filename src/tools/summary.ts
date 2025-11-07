import { calculateAxeScore } from '@/utils/playwright';
import AxeBuilder from '@axe-core/playwright';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp';
import { ErrorCode, McpError } from '@modelcontextprotocol/sdk/types.js';
import { chromium, devices } from 'playwright';
import z from 'zod';

export function summaryTool(mcp: McpServer) {
  mcp.registerTool(
    'a11y_get_summary',
    {
      title: 'Get Accessibility Summary',
      description: 'Get a summary of accessibility issues for a given webpage URL',
      inputSchema: { url: z.string().url() },
      outputSchema: {
        url: z.string().url(),
        timestamp: z.string().datetime(),
        results: z.object({
          score: z.string(),
          totalIssues: z.number(),
          critical: z.number(),
          serious: z.number(),
          moderate: z.number(),
          minor: z.number(),
        }),
      },
    },
    async function ({ url }) {
      try {
        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext(devices['Desktop Chrome']);
        const page = await context.newPage();

        await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

        const results = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
          .analyze();

        await browser.close();

        const output = {
          url,
          timestamp: new Date().toISOString(),
          results: calculateAxeScore(results.violations),
        };

        return {
          content: [{ type: 'text', text: JSON.stringify(output) }],
          structuredContent: output,
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
