import { expect, test } from "@playwright/test";
import {
  futureEvidence,
  futureGenerationPrompt,
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
    const promptSection = page.locator("#prompt");
    await expect(promptSection).not.toContainText(
      locale === "en"
        ? "This is the single generation prompt"
        : "পেজের পেছনের একক generation prompt",
    );
    await expect(promptSection).not.toContainText(
      locale === "en"
        ? "The prompt removes history and repetition"
        : "Prompt-টি অযথা ইতিহাস",
    );
    await expect(promptSection).not.toContainText(
      locale === "en"
        ? "This prompt is carefully optimized"
        : "যত্ন করে optimized করা prompt",
    );
    await expect(promptSection).toContainText(
      locale === "en"
        ? "A prompt-design reference."
        : "Prompt গঠনের সহায়ক সূত্র।",
    );
    await expect(page.locator("html")).toHaveAttribute("lang", locale);
    await expect(page.locator(".evidence-list article")).toHaveCount(4);
    const realityLinks = page.locator(
      "#short-answer .outlook-reality-links > .outlook-link-note",
    );
    await expect(realityLinks).toHaveCount(2);
    const firstNote = await realityLinks.first().boundingBox();
    const secondNote = await realityLinks.last().boundingBox();
    expect(
      firstNote && secondNote && Math.abs(firstNote.y - secondNote.y) <= 1,
    ).toBe(true);
    await expect(
      page.locator('.outlook-link-note--careers a[href$="/careers/"]'),
    ).toBeVisible();
    await expect(
      page.locator(
        '.outlook-link-note--voices a[href$="/resources/#industry-voices"]',
      ),
    ).toBeVisible();
    await expect(page.locator(".outlook-link-note--voices")).toContainText(
      locale === "en"
        ? "Bangladesh tech leaders and practitioners"
        : "বাংলাদেশের tech leaders ও practitioners",
    );
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
    for (const selector of [".outlook-story", ".outlook-prompt"]) {
      await page.locator(`${selector} summary`).focus();
      await page.keyboard.press("Enter");
      await expect(page.locator(selector)).toHaveAttribute("open", "");
    }
    await expect(
      page.locator("#short-answer .outlook-reality-links"),
    ).toContainText(
      locale === "en" ? "Bangladesh industry context" : "industry context",
    );
    await expect(page.locator(".outlook-prompt pre")).toHaveText(
      futureGenerationPrompt,
    );
    await expect(page.locator(".outlook-prompt-history")).toHaveCount(0);
    await page.locator(".nav-details summary").click();
    await expect(page.locator('[data-nav-item="future-of-cse"]')).toBeVisible();
    await context.close();
  });

  for (const theme of ["light", "dark"] as const) {
    test(`${locale} ${theme} outlook fits four widths with expanded detail`, async ({
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
      for (const width of [390, 768, 1280, 1600]) {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(route(locale));
        await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
        await page.screenshot({
          path: testInfo.outputPath(`hero-${width}.png`),
        });
        for (const selector of [".outlook-story", ".outlook-prompt"])
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

  test(`${locale} prompt heading uses the desktop article width`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1600, height: 900 });
    await page.goto(route(locale));
    const lines = await page.locator("#prompt-title").evaluate((heading) => {
      const style = getComputedStyle(heading);
      return (
        heading.getBoundingClientRect().height / parseFloat(style.lineHeight)
      );
    });
    expect(lines).toBeLessThan(1.25);
  });
}
