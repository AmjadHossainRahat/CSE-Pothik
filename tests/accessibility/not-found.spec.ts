import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const base = (process.env.BASE_PATH ?? "").replace(/\/$/, "");

for (const theme of ["light", "dark"] as const) {
  test(`${theme} 404 page has no detectable WCAG A/AA violations`, async ({
    page,
  }) => {
    await page.addInitScript(
      (value) => localStorage.setItem("cse-pothik-theme", value),
      theme,
    );
    const response = await page.goto(`${base}/this-route-does-not-exist/`);
    expect(response?.status()).toBe(404);

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
}
