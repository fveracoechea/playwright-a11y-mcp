# Stage 1: Get Bun binary
FROM oven/bun:1.2.23 AS bun-base

# Stage 2: Final image with Playwright + Bun
FROM mcr.microsoft.com/playwright:v1.56.1-noble
WORKDIR /app

# Copy Bun from base
COPY --from=bun-base /usr/local/bin/bun /usr/local/bin/bun

# Copy dependency files (layer caching)
COPY package.json bun.lock ./

# Install production dependencies only
RUN bun install --frozen-lockfile

# Copy source code and config
COPY tsconfig.json ./
COPY src ./src

EXPOSE 8080
CMD ["bun", "src/server.ts"]
