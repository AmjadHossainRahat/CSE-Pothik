import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const base = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
for (const locale of ["en", "bn"])
  for (const theme of ["light", "dark"]) {
    test(`${locale} ${theme} fully expanded project workflow accessibility`, async ({
      page,
    }) => {
      await page.addInitScript(
        (value) => localStorage.setItem("cse-pothik-theme", value),
        theme,
      );
      await page.goto(
        `${base}${locale === "bn" ? "/bn" : ""}/guidance/final-year-project/`,
      );
      await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
      for (const detail of await page
        .locator(".playbook-detail, .project-template")
        .all())
        await detail.locator("summary").click();
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();
      expect(results.violations).toEqual([]);
    });
  }
