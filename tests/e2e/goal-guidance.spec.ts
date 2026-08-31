import { expect, test } from "@playwright/test";
import { goalIds } from "../../src/types/content";
const base = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
const route = (path: string) => `${base}${path}`;

for (const locale of ["en", "bn"] as const) {
  const prefix = locale === "en" ? "" : "/bn";
  test(`${locale} all seven goal guides have stages, sources and equivalent routes`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    await page.goto(route(`${prefix}/goals/`));
    await expect(page.locator(".goal-option")).toHaveCount(7);
    for (const id of goalIds) {
      await page.goto(route(`${prefix}/goals/${id}/`));
      await expect(page.locator("html")).toHaveAttribute("lang", locale);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      await expect(page.locator(".goal-stage")).toHaveCount(4);
      await expect(page.locator(".evidence-note")).toHaveCount(4);
      await expect(page.locator("#this-week")).toContainText(
        locale === "en" ? "what I learned" : "কী শিখলাম",
      );
      expect(
        await page.locator(".source-list li").count(),
      ).toBeGreaterThanOrEqual(2);
      const alternate = locale === "en" ? "bn" : "en";
      await expect(
        page.locator(`[hreflang="${alternate}"][rel="alternate"]`),
      ).toHaveAttribute(
        "href",
        new RegExp(`${alternate === "bn" ? "/bn" : ""}/goals/${id}/$`),
      );
      const article = await page
        .locator('script[type="application/ld+json"]')
        .allTextContents();
      expect(
        article.some((text) =>
          JSON.parse(text).some?.(
            (entity: { "@type": string }) => entity["@type"] === "Article",
          ),
        ),
      ).toBe(true);
    }
    expect(errors).toEqual([]);
  });
  test(`${locale} new careers connect roadmap, experiment, AI and goals`, async ({
    page,
  }) => {
    for (const id of ["mobile-app-development", "ux-ui-engineering"]) {
      for (const section of ["careers", "roadmaps", "try", "ai"]) {
        await page.goto(route(`${prefix}/${section}/${id}/`));
        await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
        await expect(page.locator("html")).toHaveAttribute("lang", locale);
        if (id === "mobile-app-development" && section !== "ai") {
          const tags = await page
            .locator(".resource-list .tag")
            .allTextContents();
          expect(tags.length).toBeGreaterThanOrEqual(4);
          expect(
            tags.every(
              (tag) =>
                tag.trim() ===
                (locale === "en" ? "Platform option" : "Platform-এর বিকল্প"),
            ),
          ).toBe(true);
        }
        if (section === "careers" || section === "roadmaps")
          expect(
            await page.locator(".goal-links a").count(),
          ).toBeGreaterThanOrEqual(4);
      }
    }
  });
}

test("homepage and roadmap hub lead to goals; goal connects back to a learning roadmap", async ({
  page,
}) => {
  await page.goto(route("/"));
  await page.locator('[data-home-entry="prepare"]').click();
  await expect(page).toHaveURL(/\/goals\/$/);
  await page
    .locator('.goal-option a[href$="/goals/remote-employment/"]')
    .click();
  await page
    .getByRole("link", { name: "Give me one action this week", exact: true })
    .click();
  await expect(page).toHaveURL(/#this-week$/);
  await page
    .locator('#career-paths a[href$="/roadmaps/mobile-app-development/"]')
    .click();
  await expect(page).toHaveURL(/\/roadmaps\/mobile-app-development\/$/);
  await page.goto(route("/roadmaps/"));
  await page
    .getByRole("link", { name: "Find my goal guide", exact: true })
    .click();
  await expect(page).toHaveURL(/\/goals\/$/);
  await page.goto(route("/im-lost/"));
  await page.locator('[data-lost-choice="goal"]').click();
  await page.locator("[data-result-link]").click();
  await expect(page).toHaveURL(/\/goals\/$/);
});

test("goal language switching and keyboard section navigation work without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto(`http://127.0.0.1:4321${route("/goals/study-abroad/")}`);
  const summary = page.locator(".mobile-index > summary");
  await summary.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator(".mobile-index")).toHaveAttribute("open", "");
  await page.keyboard.press("Tab");
  await expect(page.locator(".mobile-index a").first()).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#orientation$/);
  await page.locator("[data-language-switch]").click();
  await expect(page).toHaveURL(/\/bn\/goals\/study-abroad\/$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "bn");
  await context.close();
});

for (const width of [320, 390, 768, 1280, 1600]) {
  for (const locale of ["en", "bn"] as const) {
    for (const theme of ["light", "dark"] as const) {
      test(`${locale} ${theme} guidance and new careers fit ${width}px`, async ({
        page,
      }, testInfo) => {
        test.skip(
          testInfo.project.name === "mobile",
          "explicit viewport matrix runs once",
        );
        await page.setViewportSize({ width, height: 900 });
        await page.addInitScript(
          (value) => localStorage.setItem("cse-compass-theme", value),
          theme,
        );
        const prefix = locale === "en" ? "" : "/bn";
        for (const path of [
          "/goals/",
          "/goals/global-companies/",
          "/careers/ux-ui-engineering/",
          "/roadmaps/mobile-app-development/",
        ]) {
          await page.goto(route(`${prefix}${path}`));
          await expect(page.locator("html")).toHaveAttribute(
            "data-theme",
            theme,
          );
          expect(
            await page.evaluate(
              () =>
                document.documentElement.scrollWidth -
                document.documentElement.clientWidth,
            ),
          ).toBeLessThanOrEqual(1);
          const alignment = await page.evaluate(() =>
            Math.abs(
              document.querySelector(".breadcrumb")!.getBoundingClientRect()
                .left -
                document.querySelector(".page-hero")!.getBoundingClientRect()
                  .left,
            ),
          );
          expect(alignment).toBeLessThanOrEqual(1);
          if (path === "/goals/global-companies/") {
            await expect(
              page.locator(width >= 1024 ? ".desktop-index" : ".mobile-index"),
            ).toBeVisible();
            await page.locator("#stage-evidence").scrollIntoViewIfNeeded();
            await page.screenshot({
              path: testInfo.outputPath(`goal-${locale}-${theme}-${width}.png`),
            });
          }
        }
      });
    }
  }
}
