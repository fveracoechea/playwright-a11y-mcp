import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import fs from 'node:fs/promises';
import path from 'node:path';
import z from 'zod';

/**
 * Prompt to generate a comprehensive WCAG 2.1 A/AA Markdown accessibility report
 * */
export function generateReportPrompt(server: McpServer) {
  server.registerPrompt(
    'a11y_generate_report',
    {
      title: 'Generate Accessibility Report',
      description:
        'Guide an LLM to transform raw outputs from `a11y_audit_page` and `a11y_get_summary` tools into a polished WCAG 2.1 A/AA Markdown report',
      argsSchema: {
        url: z.string().url(),
      },
    },
    async ({ url }) => {
      const file = path.join(
        path.resolve(process.cwd(), 'public', 'templates'),
        'generate-prompt.md',
      );
      const text = await fs.readFile(file, { encoding: 'utf8' });
      return {
        messages: [
          {
            role: 'user',
            content: { type: 'text', text: text.replace('{{url}}', url) },
          },
        ],
      };
    },
  );
}
