import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';
import { logger } from 'hono/logger';

import { StreamableHTTPTransport } from '@hono/mcp';

import mcp from './mcp';

const app = new Hono();

app.use(logger());

app.all('/mcp', async c => {
  const transport = new StreamableHTTPTransport();
  await mcp.connect(transport);
  return transport.handleRequest(c);
});

app.get('/screenshots/*', serveStatic({ root: './public' }));

app.get('/healthcheck', c =>
  c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  }),
);

export default {
  port: 8080,
  idleTimeout: 120,
  fetch: app.fetch,
};
