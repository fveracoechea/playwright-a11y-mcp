import { analizeURL, captureScreenshot } from '@/utils/playwright';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp';
import z from 'zod';

const ResultSchema = z.object({
  id: z.string(),
  help: z.string(),
  impact: z.enum(['critical', 'serious', 'moderate', 'minor']),
  description: z.string(),
  nodes: z.array(
    z.object({
      html: z.string(),
      selector: z.string().nullable(),
      screenshot: z.string().nullable(),
      summary: z.string().nullable(),
    }),
  ),
});

type ResultType = z.infer<typeof ResultSchema>;

export function auditPageTool(mcp: McpServer) {
  mcp.registerTool(
    'a11y_audit_page',
    {
      title: 'Accessibility Audit Webpage',
      description: 'Perform an WCAG 2.1 AA accessibility audit on a given webpage URL',
      inputSchema: {
        url: z.string().url(),
      },
      outputSchema: {
        url: z.string().url(),
        timestamp: z.string().datetime(),
        totalViolations: z.number(),
        results: z.array(ResultSchema),
      },
    },
    async function ({ url, cookies }) {
      const {
        browser,
        results: { violations },
        page,
      } = await analizeURL(url, cookies);

      let screenshotsCaptured = 0;
      const timestamp = new Date();
      const results: ResultType[] = [];

      for (const violation of violations) {
        const item: ResultType = {
          id: violation.id,
          help: violation.help,
          impact: violation.impact ?? 'minor',
          description: violation.description,
          nodes: [],
        };

        for (const node of violation.nodes) {
          let screenshot: string | null = null;
          const selector = typeof node.target[0] === 'string' ? node.target[0] : null;

          if (node.impact === 'critical' || node.impact === 'serious') {
            screenshot = await captureScreenshot({ selector, page });
            if (screenshot) screenshotsCaptured++;
          }

          item.nodes.push({
            selector,
            screenshot,
            html: node.html,
            summary: node.failureSummary || null,
          });
        }

        results.push(item);
      }

      await browser.close();

      const output = {
        url,
        results,
        screenshotsCaptured,
        totalViolations: violations.length,
        timestamp: timestamp.toISOString(),
      };

      return {
        content: [{ type: 'text', text: JSON.stringify(output) }],
        structuredContent: output,
      };
    },
  );
}
