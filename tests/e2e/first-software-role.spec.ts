import { expect, test } from "@playwright/test";

const base = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
const route = (path: string, locale: "en" | "bn" = "en") =>
  `${base}${locale === "bn" ? "/bn" : ""}${path}`;

for (const locale of ["en", "bn"] as const) {
  test(`${locale} first-role guide connects evidence, interviews and applications`, async ({
    page,
  }) => {
    await page.goto(route("/guidance/first-software-role/", locale));
    await expect(page.locator("h1")).toContainText(
      locale === "bn" ? "প্রথম software role" : "first software role",
    );
    await expect(page.locator(".start-list a")).toHaveCount(5);
    await expect(page.locator(".role-stage")).toHaveCount(6);
    await expect(page.locator("#interview-baseline")).toContainText(
      locale === "bn"
        ? "universal junior-job prerequisite নয়"
        : "not a universal junior-job prerequisite",
    );
    await expect(page.locator(".feedback-list article")).toHaveCount(4);
    await expect(page.locator(".source-list li")).toHaveCount(6);
    await expect(
      page.locator('a[href$="/roadmaps/backend-engineering/"]'),
    ).toBeVisible();

    const languageLink = page.locator("[data-language-switch]");
    await expect(languageLink).toHaveAttribute(
      "href",
      route("/guidance/first-software-role/", locale === "en" ? "bn" : "en"),
    );
  });
}

test("first-role journey is discoverable from home, navigation and I’m Lost", async ({
  page,
}) => {
  await page.goto(route("/"));
  await expect(page.locator(".first-role-prompt a")).toHaveAttribute(
    "href",
    route("/guidance/first-software-role/"),
  );
  await expect(
    page.locator('[data-nav-item="first-role"]').first(),
  ).toHaveAttribute("href", route("/guidance/first-software-role/"));
  await page.goto(route("/im-lost/"));
  const choice = page.locator('[data-lost-choice="first-role"]');
  await expect(choice).toHaveAttribute(
    "href",
    route("/guidance/first-software-role/"),
  );
});

test("first-role content remains usable without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(route("/guidance/first-software-role/"));
  await expect(page.locator("#stage-strengthen")).toContainText(
    "Make one genuine version 1.1 improvement now",
  );
  await expect(page.locator("#stage-practice")).toContainText(
    "bounded DSA baseline",
  );
  await expect(page.locator("#this-week")).toBeVisible();
  await context.close();
});

test("first-role guide fits five widths, both themes and both languages", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name === "mobile", "Responsive matrix runs once");
  test.setTimeout(120_000);
  for (const locale of ["en", "bn"] as const) {
    for (const theme of ["light", "dark"] as const) {
      for (const [width, height] of [
        [320, 720],
        [390, 844],
        [768, 1024],
        [1280, 800],
        [1600, 900],
      ] as const) {
        await page.setViewportSize({ width, height });
        await page.addInitScript((value) => {
          localStorage.setItem("cse-compass-theme", value);
        }, theme);
        await page.goto(route("/guidance/first-software-role/", locale));
        const geometry = await page.evaluate(() => ({
          overflow:
            document.documentElement.scrollWidth -
            document.documentElement.clientWidth,
          mainWidth: document.querySelector("main")!.getBoundingClientRect()
            .width,
          viewport: document.documentElement.clientWidth,
        }));
        expect(geometry.overflow, `${locale} ${theme} ${width}px`).toBe(0);
        expect(geometry.mainWidth).toBeLessThanOrEqual(geometry.viewport);
        await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
      }
    }
  }
});
