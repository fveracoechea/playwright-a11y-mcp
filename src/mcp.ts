import { generateReportPrompt } from '@/prompts/generate-report';
import { auditPageTool } from '@/tools/audit-page';
import { summaryTool } from '@/tools/summary';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

const mcp = new McpServer(
  {
    name: 'playwright-a11y-mcp',
    version: '0.0.1',
  },
  {
    capabilities: {
      tools: { listChanged: true },
      capabilities: { listChanged: true },
    },
  },
);

auditPageTool(mcp);
summaryTool(mcp);
generateReportPrompt(mcp);

export default mcp;
