import { registerCookies } from '@/utils/playwright';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp';
import { ErrorCode, McpError } from '@modelcontextprotocol/sdk/types.js';
import { chromium, devices } from 'playwright';
import z from 'zod';

export function testPageTool(mcp: McpServer) {
  mcp.registerTool(
    'a11y_test_page',
    {
      title: 'Load a page for testing',
      description: 'Teset playwright loading a given webpage URL',
      inputSchema: {
        url: z.string().url(),
        cookies: z.record(z.string(), z.string()).optional(),
      },
      outputSchema: {
        url: z.string().url(),
        timestamp: z.string().datetime(),
      },
    },
    async function ({ url, cookies }) {
      try {
        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext(devices['Desktop Chrome']);

        if (cookies) await registerCookies(context, cookies, url);
        const page = await context.newPage();

        await page.setViewportSize({ width: 1440, height: 900 });

        page.on('console', msg => console.log(`PLAYWRIGHT LOG`, url, msg.text()));
        await page.goto(url, { waitUntil: 'networkidle', timeout: 35000 });

        // Do not close for manual testing
        // await browser.close();

        const output = {
          url,
          timestamp: new Date().toISOString(),
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
