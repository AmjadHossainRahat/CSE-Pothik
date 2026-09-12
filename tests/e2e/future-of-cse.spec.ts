import { expect, test } from "@playwright/test";
import {
  futureEvidence,
  futureOriginalPrompt,
  futureWorkingPrompt,
} from "../../src/data/future-of-cse";

const base = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
const route = (locale: "en" | "bn", path = "/future-of-cse/") =>
  `${base}${locale === "bn" ? "/bn" : ""}${path}`;

for (const locale of ["en", "bn"] as const) {
  test(`${locale} outlook is discoverable, sourced, shareable and language-equivalent`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto(route(locale, "/"));
    await page.locator('[data-nav-item="future-of-cse"]').click();
    await expect(page).toHaveURL(new RegExp(`${route(locale)}$`));
    await expect(
      page.locator('[data-nav-item="future-of-cse"]'),
    ).toHaveAttribute("aria-current", "page");
    await expect(page.locator(".outlook-byline")).toContainText(
      "GPT-6 Astra (High)",
    );
    await expect(page.locator("html")).toHaveAttribute("lang", locale);
    await expect(page.locator(".evidence-list article")).toHaveCount(4);
    for (const source of futureEvidence) {
      const anchor = page.locator(`.evidence-list a[href="${source.url}"]`);
      await expect(anchor).toHaveAttribute("target", "_blank");
      await expect(anchor).toHaveAttribute("rel", "noopener noreferrer");
      await expect(anchor).toHaveAttribute(
        "aria-describedby",
        "external-link-description",
      );
    }
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      new RegExp(`${route(locale)}$`),
    );
    await expect(
      page.locator('meta[property="og:description"]'),
    ).toHaveAttribute("content", /AI/);
    const article = await page
      .locator('script[type="application/ld+json"]')
      .evaluateAll((nodes) =>
        nodes
          .flatMap((node) => JSON.parse(node.textContent ?? "{}"))
          .find((item) => item["@type"] === "Article"),
      );
    expect(article.creditText).toContain("GPT-6 Astra (High)");
    expect(article.citation).toHaveLength(4);
    await page.locator(".language-switch").click();
    await expect(page).toHaveURL(
      new RegExp(`${route(locale === "en" ? "bn" : "en")}$`),
    );
    await page.goto(route(locale, "/"));
    await page
      .getByRole("searchbox")
      .fill(locale === "en" ? "future of CSE" : "ভবিষ্যৎ");
    await page.getByRole("searchbox").press("Enter");
    await expect(
      page.locator(`.topbar-search__result[href="${route(locale)}"]`),
    ).toBeVisible();
    await page.goto(route(locale, "/ai/"));
    await expect(page.locator(`main a[href="${route(locale)}"]`)).toBeVisible();
  });

  test(`${locale} outlook disclosures and navigation work without JavaScript`, async ({
    browser,
  }) => {
    const context = await browser.newContext({
      javaScriptEnabled: false,
      viewport: { width: 390, height: 844 },
    });
    const page = await context.newPage();
    await page.goto(route(locale));
    for (const selector of [
      ".outlook-story",
      ".outlook-prompt",
      ".outlook-prompt-history",
    ]) {
      await page.locator(`${selector} summary`).focus();
      await page.keyboard.press("Enter");
      await expect(page.locator(selector)).toHaveAttribute("open", "");
    }
    await expect(page.locator(".outlook-prompt pre")).toHaveText(
      futureWorkingPrompt,
    );
    await expect(page.locator(".outlook-prompt-history pre")).toHaveText(
      futureOriginalPrompt,
    );
    await page.locator(".nav-details summary").click();
    await expect(page.locator('[data-nav-item="future-of-cse"]')).toBeVisible();
    await context.close();
  });

  for (const theme of ["light", "dark"] as const) {
    test(`${locale} ${theme} outlook fits five widths with expanded detail`, async ({
      page,
    }, testInfo) => {
      test.skip(
        testInfo.project.name === "mobile",
        "Explicit five-width matrix runs once",
      );
      test.setTimeout(90_000);
      const errors: string[] = [];
      page.on("pageerror", (error) => errors.push(error.message));
      page.on("console", (message) => {
        if (message.type() === "error") errors.push(message.text());
      });
      await page.addInitScript(
        (value) => localStorage.setItem("cse-pothik-theme", value),
        theme,
      );
      for (const width of [320, 390, 768, 1280, 1600]) {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(route(locale));
        await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
        await page.screenshot({
          path: testInfo.outputPath(`hero-${width}.png`),
        });
        for (const selector of [
          ".outlook-story",
          ".outlook-prompt",
          ".outlook-prompt-history",
        ])
          await page.locator(`${selector} summary`).click();
        expect(
          await page.evaluate(
            () =>
              document.documentElement.scrollWidth -
              document.documentElement.clientWidth,
          ),
        ).toBeLessThanOrEqual(1);
        await page.locator("#evidence").scrollIntoViewIfNeeded();
        await page.screenshot({
          path: testInfo.outputPath(`evidence-${width}.png`),
        });
        await page.locator("#prompt").scrollIntoViewIfNeeded();
        await page.screenshot({
          path: testInfo.outputPath(`prompt-${width}.png`),
        });
      }
      expect(errors).toEqual([]);
    });
  }
}
