import AxeBuilder from '@axe-core/playwright';
import { ErrorCode, McpError } from '@modelcontextprotocol/sdk/types.js';
import { Result } from 'axe-core';
import { BrowserContext, Page, chromium, devices } from 'playwright';

import { env } from './env';
import { uploadFile } from './upload';

/**
 * Helper function to register cookies in a Playwright browser context.
 * */
export async function registerCookies(context: BrowserContext, url: string) {
  const { origin } = new URL(url);
  await context.addCookies([
    {
      name: env.AUTH_COOKIE_NAME,
      value: env.AUTH_COOKIE_VALUE,
      sameSite: 'Lax',
      url: origin,
    },
  ]);
}

/**
 * Helper function to launch Playwright, navigate to a URL, and run Axe accessibility analysis.
 * */
export async function analizeURL(url: string) {
  try {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext(devices['Desktop Chrome']);

    await registerCookies(context, url);
    const page = await context.newPage();

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(url, { waitUntil: 'networkidle', timeout: 35000 });

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();
    return { results, page, browser };
  } catch (error) {
    throw new McpError(ErrorCode.InternalError, 'Unable to analyze page', {
      reason: error instanceof Error ? error : undefined,
    });
  }
}

/**
 * Capture a screenshot of a specific element on the page identified by a selector.
 * Returns the full URL to access the screenshot.
 * */
export async function captureScreenshot(args: { page: Page; selector: string | null }) {
  try {
    const { selector, page } = args;
    if (!selector) return null;

    const handle = await page.$(selector);
    if (!handle) throw new Error(`Element not found for selector: ${selector}`);

    const buffer = await handle.screenshot({ type: 'jpeg' });
    const { url } = await uploadFile(buffer, 'jpeg');

    return url;
  } catch (e) {
    console.error(`SCREENSHOT ERROR`, e);
    return null;
  }
}

/**
 * Calculate a custom accessibility score based on Axe violations.
 * The scoring system is subjective and can be adjusted as needed.
 * */
export function calculateAxeScore(violations: Result[]) {
  let critical = 0;
  let serious = 0;
  let moderate = 0;
  let minor = 0;
  let totalIssues = 0;

  violations.forEach(violation => {
    totalIssues++;
    switch (violation.impact) {
      case 'critical':
        critical++;
        break;
      case 'serious':
        serious++;
        break;
      case 'moderate':
        moderate++;
        break;
      case 'minor':
        minor++;
        break;
    }
  });

  // A simple, custom weighting system. You can adjust the weights as needed.
  // Example: Critical issues penalize more heavily than minor issues.
  const penalty = critical * 10 + serious * 5 + moderate * 2 + minor * 1;

  // A hypothetical way to normalize the score (this is highly subjective)
  // You may need a more sophisticated formula based on your project's needs.
  const maxPenalty = 100; // Arbitrary maximum for demonstration
  let score = 100 - (penalty / maxPenalty) * 100;

  // Ensure the score is not negative
  if (score < 0) score = 0;

  return { score: score.toFixed(2), totalIssues, critical, serious, moderate, minor };
}
