import { expect, test } from "@playwright/test";
import { siteConfig } from "../../src/config/site";
import { collaborators, inspirations } from "../../src/data/credits";
import { sitePurpose } from "../../src/data/homepage";

const base = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
const route = (locale: string, path: string) =>
  `${base}${locale === "bn" ? "/bn" : ""}${path}`;

for (const locale of ["en", "bn"] as const) {
  test(`${locale} fresher can discover credits and switch to the equivalent language`, async ({
    page,
  }) => {
    await page.goto(route(locale, "/guidance/new-cse-student/"));
    const footer = page.locator(".footer-credits");
    await expect(footer).toContainText("Orchestrator");
    for (const source of inspirations)
      await expect(
        footer.getByRole("link", { name: source.name, exact: true }),
      ).toHaveAttribute("href", source.url);
    const feedbackLink = page.locator(".site-footer").getByRole("link", {
      name: locale === "en" ? "Share feedback" : "ইচ্ছা হলে জানিয়ে দিন",
      exact: true,
    });
    await expect(feedbackLink).toHaveAttribute("href", siteConfig.feedbackUrl);
    await expect(feedbackLink).toHaveAttribute("target", "_blank");
    await expect(feedbackLink).toHaveAttribute("rel", "noopener noreferrer");
    await expect(feedbackLink).toHaveAttribute(
      "data-track-event",
      "next_step_clicked",
    );
    await expect(feedbackLink).toHaveAttribute(
      "data-track-param-destination",
      "feedback-form",
    );
    await footer
      .getByRole("link", {
        name: locale === "en" ? "Full credits" : "বিস্তারিত কৃতজ্ঞতা",
        exact: true,
      })
      .click();
    await expect(page).toHaveURL(route(locale, "/about/#credits"));
    await expect(
      page
        .getByRole("region", {
          name:
            locale === "en"
              ? "Inspiration & collaboration"
              : "অনুপ্রেরণা ও সহযোগিতা",
          exact: true,
        })
        .first(),
    ).toBeVisible();
    const story = page.locator("#why-this-exists");
    await expect(story).toContainText(sitePurpose.purpose[locale]);
    await expect(story).toContainText(sitePurpose.goal[locale]);
    await expect(story.locator(".story-arc li")).toHaveCount(4);
    for (const person of collaborators) {
      await expect(page.locator("#credits")).toContainText(person.name);
      await expect(page.locator("#credits")).toContainText(person.role[locale]);
      await expect(page.locator("#credits")).toContainText(
        person.contribution[locale],
      );
    }
    const creatorLink = page
      .locator("#credits")
      .getByRole("link", { name: siteConfig.creator });
    await expect(creatorLink).toHaveAttribute("href", siteConfig.creatorUrl);
    await expect(creatorLink).toHaveAttribute("target", "_blank");
    await expect(creatorLink).toHaveAttribute("rel", "noopener noreferrer");
    for (const source of inspirations)
      await expect(
        page
          .locator("#credits")
          .getByRole("link", { name: source.name, exact: true }),
      ).toHaveAttribute("href", source.url);
    await page.locator("[data-language-switch]").click();
    const other = locale === "en" ? "bn" : "en";
    await expect(page).toHaveURL(route(other, "/about/"));
    await expect(page.locator("html")).toHaveAttribute("lang", other);
    await page.locator('.page-hero a[href="#credits"]').click();
    await expect(page).toHaveURL(route(other, "/about/#credits"));
  });

  test(`${locale} credits work with keyboard and JavaScript disabled`, async ({
    browser,
  }) => {
    const context = await browser.newContext({
      javaScriptEnabled: false,
      viewport: { width: 390, height: 844 },
    });
    const page = await context.newPage();
    await page.goto(`http://127.0.0.1:4321${route(locale, "/about/")}`);
    await page.locator('.page-hero a[href="#credits"]').focus();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/\/about\/#credits$/);
    const source = page.locator('#credits a[href="https://roadmap.sh/"]');
    await source.focus();
    await expect(source).toBeFocused();
    expect(
      await source.evaluate(
        (element) => getComputedStyle(element).outlineStyle,
      ),
    ).not.toBe("none");
    await expect(page.locator("#credits")).toContainText("Orchestrator");
    await expect(page.locator("#why-this-exists")).toContainText(
      sitePurpose.purpose[locale],
    );
    await expect(page.locator(".footer-credits")).toContainText("ChatGPT");
    await context.close();
  });
}

for (const width of [320, 390, 768, 1280, 1600])
  for (const locale of ["en", "bn"])
    for (const theme of ["light", "dark"]) {
      test(`${locale} ${theme} credits layout and console at ${width}px`, async ({
        page,
      }, info) => {
        test.skip(
          info.project.name === "mobile",
          "Explicit viewport matrix runs once",
        );
        await page.setViewportSize({ width, height: 900 });
        await page.addInitScript(
          (value) => localStorage.setItem("cse-pothik-theme", value),
          theme,
        );
        await page.route(
          /google-analytics\.com|googletagmanager\.com/,
          (route) =>
            route.fulfill({
              status: 200,
              contentType: "application/javascript",
              body: "/* GA4 network stub for deterministic local UI checks. */",
            }),
        );
        const errors: string[] = [];
        page.on("pageerror", (error) => errors.push(error.message));
        page.on("console", (message) => {
          if (message.type() === "error") errors.push(message.text());
        });
        await page.goto(route(locale, "/about/"));
        await expect(page.locator("html")).toHaveAttribute("lang", locale);
        await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth + 1,
          ),
        ).toBe(true);
        await page.locator('.page-hero a[href="#why-this-exists"]').click();
        await expect(page.locator("#why-title")).toBeInViewport();
        await expect
          .poll(() =>
            page.locator("#why-this-exists").evaluate((element) => {
              const scrollPadding = Number.parseFloat(
                getComputedStyle(document.documentElement).scrollPaddingTop,
              );

              return Math.abs(
                element.getBoundingClientRect().top - scrollPadding,
              );
            }),
          )
          .toBeLessThan(2);
        await page.screenshot({
          path: info.outputPath(`story-intro-${locale}-${theme}-${width}.png`),
        });
        for (const { selector, name } of [
          { selector: "#credits h2", name: "about" },
          { selector: ".footer-credits", name: "footer" },
        ]) {
          await page.locator(selector).scrollIntoViewIfNeeded();
          await page.screenshot({
            path: info.outputPath(`${name}-${locale}-${theme}-${width}.png`),
          });
        }
        for (const link of await page.locator(".footer-credits a").all()) {
          const box = await link.boundingBox();
          expect(
            box &&
              box.x >= 0 &&
              box.x + box.width <= width + 1 &&
              box.height >= 44,
          ).toBe(true);
        }
        expect(errors).toEqual([]);
      });
    }
