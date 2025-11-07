import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

import mcp from './mcp';

const transport = new StdioServerTransport();
mcp.connect(transport).catch(console.log);
