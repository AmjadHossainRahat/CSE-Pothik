import { expect, test } from "@playwright/test";

const basePath = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
const route = (path: string) => `${basePath}${path}`;

const viewports = [
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1280, height: 800 },
  { name: "wide", width: 1600, height: 900 },
];

for (const viewport of viewports) {
  for (const locale of ["en", "bn"] as const) {
    for (const theme of ["light", "dark"] as const) {
      test(`${locale} ${theme} homepage fits ${viewport.name} without console errors`, async ({
        page,
      }, testInfo) => {
        test.skip(
          testInfo.project.name === "mobile",
          "explicit viewport matrix runs once",
        );
        const consoleErrors: string[] = [];
        const pageErrors: string[] = [];
        page.on("console", (message) => {
          if (message.type() === "error") consoleErrors.push(message.text());
        });
        page.on("pageerror", (error) => pageErrors.push(error.message));
        await page.setViewportSize(viewport);
        await page.addInitScript(
          (value) => localStorage.setItem("cse-pothik-theme", value),
          theme,
        );
        await page.goto(route(locale === "en" ? "/" : "/bn/"));
        await expect(page.locator("html")).toHaveAttribute("lang", locale);
        await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
        await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
        const primary = page.locator('.hero-copy a[href="#starting-point"]');
        await expect(primary).toBeInViewport({ ratio: 1 });
        const introBox = await page.locator(".hero-lede").boundingBox();
        const buttonBox = await primary.boundingBox();
        expect(
          introBox && buttonBox && introBox.y + introBox.height <= buttonBox.y,
        ).toBe(true);
        if (viewport.width < 960) {
          const copyBox = await page.locator(".hero-copy").boundingBox();
          const artBox = await page.locator(".hero-visual").boundingBox();
          expect(
            copyBox && artBox && copyBox.y + copyBox.height <= artBox.y,
          ).toBe(true);
        }
        await page.screenshot({
          path: testInfo.outputPath(
            `hero-${locale}-${theme}-${viewport.name}.png`,
          ),
        });
        const artwork = page.locator(".hero-visual img");
        await expect
          .poll(() =>
            artwork.evaluate(
              (image: HTMLImageElement) =>
                image.complete && image.naturalWidth > 0,
            ),
          )
          .toBe(true);
        const illustrationGeometry = await artwork.evaluate(
          (image: HTMLImageElement) => {
            const bounds = image.getBoundingClientRect();
            const figure = image.closest("figure")!.getBoundingClientRect();
            return {
              aspectError: Math.abs(
                bounds.width / bounds.height -
                  image.naturalWidth / image.naturalHeight,
              ),
              left: bounds.left,
              right: bounds.right,
              figureLeft: figure.left,
              figureRight: figure.right,
              objectFit: getComputedStyle(image).objectFit,
            };
          },
        );
        expect(illustrationGeometry.aspectError).toBeLessThan(0.01);
        expect(illustrationGeometry.left).toBeGreaterThanOrEqual(
          illustrationGeometry.figureLeft - 1,
        );
        expect(illustrationGeometry.right).toBeLessThanOrEqual(
          illustrationGeometry.figureRight + 1,
        );
        expect(illustrationGeometry.objectFit).toBe("contain");
        const overflow = await page.evaluate(
          () =>
            document.documentElement.scrollWidth -
            document.documentElement.clientWidth,
        );
        expect(overflow).toBeLessThanOrEqual(1);
        const mapItems = await page
          .locator(".map-copy small")
          .evaluateAll((elements) =>
            elements.map((element) => element.getBoundingClientRect().width),
          );
        expect(mapItems.every((width) => width > 95)).toBe(true);
        if (viewport.width >= 1088) {
          await expect(page.locator(".nav-details nav")).toBeVisible();
        } else {
          const closedPanelDisplays = await page
            .locator(
              ".nav-details > nav, .topbar-search > .topbar-search__popover",
            )
            .evaluateAll((elements) =>
              elements.map((element) => getComputedStyle(element).display),
            );
          expect(closedPanelDisplays).toEqual(["none", "none"]);
          await page.locator(".nav-details > summary").click();
          await expect(page.locator(".nav-details nav")).toBeVisible();
          await page.screenshot({
            path: testInfo.outputPath(
              `navigation-${locale}-${theme}-${viewport.name}.png`,
            ),
          });
          await page.locator(".nav-details > summary").click();
          await expect(page.locator(".nav-details nav")).toBeHidden();
        }
        await page.locator('.hero-copy a[href="#starting-point"]').click();
        await expect(page.locator("#starting-title")).toBeInViewport();
        // Wait for the native smooth anchor scroll before taking a visual record.
        await expect
          .poll(() =>
            page
              .locator("#starting-point")
              .evaluate((element) =>
                Math.abs(
                  element.getBoundingClientRect().top -
                    Number.parseFloat(
                      getComputedStyle(document.documentElement)
                        .scrollPaddingTop,
                    ),
                ),
              ),
          )
          .toBeLessThan(2);
        await page.screenshot({
          path: testInfo.outputPath(
            `entry-${locale}-${theme}-${viewport.name}.png`,
          ),
        });
        await page.locator(".situation-options summary").click();
        await expect(page.locator(".situation-list a").last()).toBeVisible();
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth + 1,
          ),
        ).toBe(true);
        expect(consoleErrors).toEqual([]);
        expect(pageErrors).toEqual([]);
        await page.screenshot({
          path: testInfo.outputPath(
            `homepage-${locale}-${theme}-${viewport.name}.png`,
          ),
          fullPage: true,
        });
      });
    }
  }
}

test("Bangla, dark theme, compare and roadmap remain usable on tablet", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name === "mobile",
    "explicit viewport matrix runs once",
  );
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.addInitScript(() =>
    localStorage.setItem("cse-pothik-theme", "dark"),
  );
  for (const path of [
    "/bn/",
    "/bn/compare/",
    "/bn/roadmaps/backend-engineering/",
  ]) {
    await page.goto(route(path));
    await expect(page.locator("html")).toHaveAttribute("lang", "bn");
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
    const overflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth -
        document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);
  }
  expect(errors).toEqual([]);
  await page.screenshot({
    path: testInfo.outputPath("bangla-dark-roadmap.png"),
    fullPage: true,
  });
});
