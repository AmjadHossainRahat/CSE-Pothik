import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const base = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
for (const locale of ["en", "bn"] as const) {
  for (const theme of ["light", "dark"] as const) {
    test(`${locale} ${theme} future outlook has no detectable WCAG A/AA violations`, async ({
      page,
    }) => {
      await page.addInitScript(
        (value) => localStorage.setItem("cse-pothik-theme", value),
        theme,
      );
      await page.goto(`${base}${locale === "bn" ? "/bn" : ""}/future-of-cse/`);
      for (const selector of [".outlook-story", ".outlook-prompt"])
        await page.locator(`${selector} summary`).click();
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();
      expect(results.violations).toEqual([]);
    });
  }
}
