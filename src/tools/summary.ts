import AxeBuilder from '@axe-core/playwright';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp';
import { ErrorCode, McpError } from '@modelcontextprotocol/sdk/types.js';
import { chromium, devices } from 'playwright';
import z from 'zod';

const ImpactOrder = {
  critical: 0,
  serious: 1,
  moderate: 2,
  minor: 3,
};

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
        totalIssues: z.number().int().nonnegative(),
        passedTests: z.number().int().nonnegative(),
        incompleteTests: z.number().int().nonnegative(),
        issuesBySeverity: z.object({
          critical: z.number().int().nonnegative(),
          serious: z.number().int().nonnegative(),
          moderate: z.number().int().nonnegative(),
          minor: z.number().int().nonnegative(),
        }),
        topIssues: z.array(
          z.object({
            id: z.string(),
            impact: z.enum(['critical', 'serious', 'moderate', 'minor']).optional(),
            description: z.string(),
            helpUrl: z.string().url(),
          }),
        ),
      },
    },
    async function ({ url }) {
      try {
        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext(devices['Desktop Chrome']);
        const page = await context.newPage();

        page.on('console', msg => console.log(`PLAYWRIGHT LOG`, url, msg.text()));

        await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

        // @ts-expect-error page types
        const results = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
          .analyze();

        await browser.close();

        const output = {
          url,
          timestamp: new Date().toISOString(),
          totalIssues: results.violations.length,
          passedTests: results.passes.length,
          incompleteTests: results.incomplete.length,
          issuesBySeverity: {
            critical: results.violations.filter(v => v.impact === 'critical').length,
            serious: results.violations.filter(v => v.impact === 'serious').length,
            moderate: results.violations.filter(v => v.impact === 'moderate').length,
            minor: results.violations.filter(v => v.impact === 'minor').length,
          },
          topIssues: results.violations
            .sort((a, b) => {
              return ImpactOrder[a.impact ?? 'minor'] - ImpactOrder[b.impact ?? 'minor'];
            })
            .slice(0, 5)
            .map(violation => ({
              id: violation.id,
              impact: violation.impact,
              description: violation.description,
              helpUrl: violation.helpUrl,
            })),
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
