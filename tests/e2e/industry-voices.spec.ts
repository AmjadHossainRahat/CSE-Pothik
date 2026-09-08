import { expect, test } from "@playwright/test";

const basePath = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
const route = (path: string) => `${basePath}${path}`;

for (const locale of ["en", "bn"] as const) {
  test(`${locale} homepage introduces real local voices without adding a feed`, async ({
    page,
  }) => {
    await page.goto(route(locale === "en" ? "/" : "/bn/"));
    const preview = page.locator(".industry-voices--featured");
    await expect(preview.locator(".voice-card")).toHaveCount(2);
    await expect(preview.locator("a[target='_blank']")).toHaveCount(2);
    await expect(preview.locator("a[target='_blank']").first()).toHaveAttribute(
      "rel",
      "noopener noreferrer",
    );
    await expect(preview.locator(".voice-collection-link")).toHaveAttribute(
      "href",
      route(
        locale === "en"
          ? "/resources/#industry-voices"
          : "/bn/resources/#industry-voices",
      ),
    );
  });

  test(`${locale} complete watchlist preserves order, context and native disclosure`, async ({
    page,
  }, testInfo) => {
    await page.goto(route(locale === "en" ? "/resources/" : "/bn/resources/"));
    const section = page.locator("#industry-voices");
    await expect(section.locator(".voices-heading .eyebrow")).toHaveText(
      locale === "en"
        ? "Bangladesh tech leaders & practitioners"
        : "বাংলাদেশের tech leaders ও practitioners",
    );
    await expect(section.locator(".voice-stages > li")).toHaveCount(3);
    await expect(section.locator("details[open]")).toHaveCount(1);
    await expect(section.locator(".voice-card")).toHaveCount(9);
    await expect(section.locator(".voice-card a[target='_blank']")).toHaveCount(
      9,
    );
    await expect(section.locator(".voice-number")).toHaveText(
      locale === "en"
        ? ["01", "02", "03", "04", "05", "06", "07", "08", "09"]
        : ["০১", "০২", "০৩", "০৪", "০৫", "০৬", "০৭", "০৮", "০৯"],
    );
    for (const details of await section.locator("details").all()) {
      if (
        !(await details.evaluate(
          (element) => (element as HTMLDetailsElement).open,
        ))
      )
        await details.locator("summary").click();
    }
    await expect(section.locator(".voice-card").last()).toBeVisible();
    if (locale === "en" && testInfo.project.name === "chromium") {
      const renderedLines = await section
        .locator(".voices-heading h2")
        .evaluate((heading) => {
          const lineHeight = Number.parseFloat(
            getComputedStyle(heading).lineHeight,
          );
          return Math.round(
            heading.getBoundingClientRect().height / lineHeight,
          );
        });
      expect(renderedLines).toBe(1);
    }
    await section.screenshot({
      path: testInfo.outputPath(`industry-voices-${locale}.png`),
    });
    const overflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth -
        document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);
  });
}

test("watchlist remains available without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(route("/resources/"));
  if (await page.locator(".nav-details nav").isVisible()) {
    await page.locator(".nav-details > summary").focus();
    await page.keyboard.press("Enter");
  }
  const lastStage = page.locator("#industry-voices details").last();
  await lastStage.locator("summary").focus();
  await page.keyboard.press("Enter");
  await expect(lastStage.locator(".voice-card").last()).toBeVisible();
  await context.close();
});
