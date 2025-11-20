/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      home: 'aws',
      name: 'playwright-a11y-mpc',
      protect: input.stage === 'production',
      removal: input.stage === 'production' ? 'retain' : 'remove',
    };
  },
  async run() {
    const vpc = new sst.aws.Vpc('a11y-mpc-vpc');
    const bucket = new sst.aws.Bucket('a11y-mcp-bucket');
    const cluster = new sst.aws.Cluster('a11y-mcp-cluster', { vpc });

    new sst.aws.Service('a11y-mcp-bun-service', {
      cluster,
      link: [bucket],
      loadBalancer: {
        ports: [{ listen: '80/http', forward: '8080/http' }],
      },
      dev: {
        command: 'bun dev',
      },
    });
  },
});
