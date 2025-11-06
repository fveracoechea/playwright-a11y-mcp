import { Hono } from 'hono';

import { auditPageTool } from '@/tools/audit-page';
import { summaryTool } from '@/tools/summary';
import { StreamableHTTPTransport } from '@hono/mcp';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

const app = new Hono();

const mcp = new McpServer({
  name: 'playwright-a11y-mcp',
  version: '0.0.1',
});

auditPageTool(mcp);
summaryTool(mcp);

app.all('/mcp', async c => {
  const transport = new StreamableHTTPTransport();
  await mcp.connect(transport);
  return transport.handleRequest(c);
});

app.get('/healthcheck', c => {
  return c.text('OK');
});

export default {
  port: 8080,
  fetch: app.fetch,
};
