import { defineConfig, devices } from "@playwright/test";

delete process.env.NO_COLOR;

export default defineConfig({
  testDir: "./tests",
  globalSetup: "./scripts/playwright-global-setup.ts",
  globalTeardown: "./scripts/playwright-global-teardown.ts",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : 4,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: "http://127.0.0.1:4321",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
});
