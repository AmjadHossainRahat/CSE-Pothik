import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const basePath = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
const withBase = (path: string) => `${basePath}${path}`;

for (const route of [
  "/",
  "/bn/",
  "/careers/backend-engineering/",
  "/compare/",
  "/im-lost/",
  "/goals/",
  "/bn/goals/",
  "/goals/global-companies/",
  "/bn/goals/study-abroad/",
  "/careers/mobile-app-development/",
  "/bn/careers/ux-ui-engineering/",
  "/roadmaps/mobile-app-development/",
  "/try/ux-ui-engineering/",
]) {
  test(`has no detectable WCAG A/AA violations: ${route}`, async ({ page }) => {
    await page.goto(withBase(route));
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
}

for (const route of [
  "/",
  "/bn/",
  "/careers/backend-engineering/",
  "/compare/",
  "/goals/",
  "/bn/goals/global-companies/",
  "/goals/research-publication/",
  "/careers/ux-ui-engineering/",
  "/bn/roadmaps/mobile-app-development/",
  "/bn/try/ux-ui-engineering/",
]) {
  test(`has no detectable dark-theme WCAG A/AA violations: ${route}`, async ({
    page,
  }) => {
    await page.addInitScript(() =>
      localStorage.setItem("cse-compass-theme", "dark"),
    );
    await page.goto(withBase(route));
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
}
