import { analizeURL, calculateAxeScore } from '@/utils/playwright';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp';
import { ErrorCode, McpError } from '@modelcontextprotocol/sdk/types.js';
import z from 'zod';

export function summaryTool(mcp: McpServer) {
  mcp.registerTool(
    'a11y_get_summary',
    {
      title: 'Get Accessibility Summary',
      description: 'Get a summary of accessibility issues for a given webpage URL',
      inputSchema: {
        url: z.string().url(),
      },
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
        const {
          browser,
          results: { violations },
        } = await analizeURL(url);

        await browser.close();

        const output = {
          url,
          timestamp: new Date().toISOString(),
          results: calculateAxeScore(violations),
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
