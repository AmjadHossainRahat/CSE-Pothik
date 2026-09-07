import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const basePath = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
const route = (path: string) => `${basePath}${path}`;

for (const locale of ["en", "bn"] as const) {
  for (const theme of ["light", "dark"] as const) {
    test(`${locale} ${theme} expanded local-industry watchlist is accessible`, async ({
      page,
    }) => {
      await page.addInitScript(
        (value) => localStorage.setItem("cse-compass-theme", value),
        theme,
      );
      await page.goto(
        route(locale === "en" ? "/resources/" : "/bn/resources/"),
      );
      const section = page.locator("#industry-voices");
      for (const details of await section.locator("details").all())
        if (
          !(await details.evaluate(
            (element) => (element as HTMLDetailsElement).open,
          ))
        )
          await details.locator("summary").click();
      await expect(section.locator(".voice-card").last()).toBeVisible();
      const results = await new AxeBuilder({ page })
        .include("#industry-voices")
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();
      expect(results.violations).toEqual([]);
    });
  }
}
