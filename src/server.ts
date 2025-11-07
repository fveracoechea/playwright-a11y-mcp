import { Hono } from 'hono';

import { StreamableHTTPTransport } from '@hono/mcp';

import mcp from './mcp';

const app = new Hono();

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
  idleTimeout: 35,
  fetch: app.fetch,
};
