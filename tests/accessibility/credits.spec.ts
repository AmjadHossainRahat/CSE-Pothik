import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const base = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
for (const locale of ["en", "bn"])
  for (const theme of ["light", "dark"])
    test(`${locale} ${theme} About and fresher footer accessibility`, async ({
      page,
    }) => {
      await page.addInitScript(
        (value) => localStorage.setItem("cse-compass-theme", value),
        theme,
      );
      for (const path of ["/about/", "/guidance/new-cse-student/"]) {
        await page.goto(`${base}${locale === "bn" ? "/bn" : ""}${path}`);
        await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
        const result = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
          .analyze();
        expect(result.violations).toEqual([]);
      }
    });
