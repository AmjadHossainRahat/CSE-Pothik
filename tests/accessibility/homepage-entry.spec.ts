import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const base = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
for (const locale of ["en", "bn"])
  for (const theme of ["light", "dark"])
    test(`${locale} ${theme} homepage entry choices and expanded situations are accessible`, async ({
      page,
    }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.addInitScript(
        (value) => localStorage.setItem("cse-compass-theme", value),
        theme,
      );
      await page.goto(`${base}${locale === "bn" ? "/bn" : ""}/`);
      await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
      await page.locator(".nav-details > summary").click();
      await expect(page.locator(".nav-details nav")).toBeVisible();
      const navigationResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();
      expect(navigationResults.violations).toEqual([]);
      await page.locator(".nav-details > summary").click();
      await page.locator(".situation-options summary").click();
      await expect(page.locator(".situation-list a")).toHaveCount(6);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();
      expect(results.violations).toEqual([]);
    });
