import { expect, test } from "@playwright/test";
import { homepageEntries, homepageIntro } from "../../src/data/homepage";
import { studentSituations } from "../../src/data/situations";

const basePath = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
const route = (path: string) => `${basePath}${path}`;

for (const locale of ["en", "bn"] as const) {
  test(`${locale} homepage keeps a compact, illustrated orientation flow`, async ({
    page,
  }) => {
    await page.goto(route(locale === "en" ? "/" : "/bn/"));
    await expect(page.locator(".homepage > section").nth(1)).toHaveAttribute(
      "id",
      "ai-reality",
    );
    await expect(page.locator(".ai-decision-tree > li")).toHaveCount(3);
    await expect(page.locator(".ai-scenario")).not.toHaveAttribute("open", "");
    await page.locator(".ai-scenario > summary").click();
    await expect(page.locator(".scenario-grid article")).toHaveCount(3);
    await expect(page.locator(".scenario-grid article").last()).toBeVisible();
    await expect(page.locator(".ai-actions a[target='_blank']")).toHaveCount(2);
    await expect(page.locator(".orientation-note a")).toHaveCount(4);
    await expect(page.locator(".journey-disclosure")).not.toHaveAttribute(
      "open",
      "",
    );
    await page.locator(".journey-disclosure > summary").click();
    await expect(page.locator(".journey a")).toHaveCount(6);
    await expect(page.locator(".family-map article")).toHaveCount(8);
    await expect(page.locator(".family-paths[open]")).toHaveCount(0);
    await expect(
      page.locator(".experiment-grid--featured article"),
    ).toHaveCount(3);
    const expandingExperiments = page.locator(".more-experiments");
    await expect(expandingExperiments).not.toHaveAttribute("open", "");
    await expandingExperiments.locator("summary").click();
    await expect(
      expandingExperiments.locator(".experiment-grid article"),
    ).toHaveCount(3);
    await expect(
      expandingExperiments.locator(".experiment-grid article").last(),
    ).toBeVisible();
    await expect(page.locator(".family-track a")).toHaveAttribute(
      "href",
      route(
        `${locale === "en" ? "" : "/bn"}/guidance/competitive-programming/`,
      ),
    );
    await expect(page.locator(".entry-list a")).toHaveCount(3);
    await expect(page.locator(".hero-copy .eyebrow")).toHaveText(
      homepageIntro.eyebrow[locale],
    );
    await expect(page.locator(".hero-lede")).toHaveText(
      homepageIntro.description[locale],
    );
    await expect(page.locator(".hero-outcome")).toHaveText(
      homepageIntro.outcome[locale],
    );
    for (const entry of homepageEntries) {
      const link = page.locator(`[data-home-entry="${entry.id}"]`);
      await expect(link).toContainText(entry.label[locale]);
      await expect(link).toHaveAttribute(
        "href",
        route(`${locale === "bn" ? "/bn" : ""}${entry.destination}`),
      );
    }
    await expect(page.locator(".situation-options")).not.toHaveAttribute(
      "open",
      "",
    );
    await page.locator(".situation-options summary").click();
    await expect(page.locator(".situation-list a")).toHaveCount(7);
    for (const situation of studentSituations)
      await expect(
        page.locator(`[data-track-param-situation-id="${situation.id}"]`),
      ).toHaveAttribute("href", route(situation.destination[locale]));
    await expect(page.locator(".mentor-line").last()).toContainText(
      locale === "en" ? "behind? You" : "হচ্ছে? সবার",
    );
    const illustrations = page.locator(".hero-visual img, .ai-art img");
    await expect(illustrations).toHaveCount(2);
    const studyPartners = page.locator(".hero-visual img");
    await expect(studyPartners).toHaveAttribute(
      "alt",
      locale === "en"
        ? "A Chakma woman holds a QA checklist tablet between two teammates at laptops, all three smiling toward you."
        : "ল্যাপটপে কাজ করা দুই সতীর্থের মাঝে দাঁড়িয়ে ট্যাবলেটে সফটওয়্যার পরীক্ষার তালিকা দেখাচ্ছে এক চাকমা তরুণী; তিনজনই আপনার দিকে তাকিয়ে হাসছে।",
    );
    await expect(studyPartners).toHaveAttribute("loading", "eager");
    await expect(studyPartners).toHaveAttribute("fetchpriority", "high");
    await expect(studyPartners).toHaveAttribute("srcset", /400w.+640w.+900w/);
    await expect(page.locator(".ai-art img")).toHaveAttribute(
      "loading",
      "lazy",
    );
    for (const illustration of await illustrations.all()) {
      await illustration.scrollIntoViewIfNeeded();
      await expect(illustration).toHaveAttribute("alt", /.+/);
      await expect
        .poll(() =>
          illustration.evaluate(
            (image: HTMLImageElement) =>
              image.complete && image.naturalWidth > 0,
          ),
        )
        .toBe(true);
      await expect(illustration).toHaveAttribute("width", /\d+/);
      await expect(illustration).toHaveAttribute("height", /\d+/);
    }
    for (const selector of [".map-copy", ".journey-copy", ".entry-copy"]) {
      const captions = await page.locator(selector).evaluateAll((elements) =>
        elements.map((element) => {
          const title = element
            .querySelector("strong")!
            .getBoundingClientRect();
          const caption = element
            .querySelector("small, :scope > span")!
            .getBoundingClientRect();
          return {
            width: caption.width,
            offset: Math.abs(title.left - caption.left),
            below: caption.top >= title.bottom - 1,
          };
        }),
      );
      for (const caption of captions) {
        expect(caption.width).toBeGreaterThan(95);
        expect(caption.offset).toBeLessThanOrEqual(1);
        expect(caption.below).toBe(true);
      }
    }
    const localVoices = page.locator(".industry-voices--featured");
    await expect(localVoices.locator(".voice-card")).toHaveCount(2);
    await expect(localVoices.locator("a[target='_blank']")).toHaveCount(2);
    await expect(localVoices.locator(".voice-collection-link")).toBeVisible();
  });

  test(`${locale} study partners remain available without JavaScript and with reduced motion`, async ({
    browser,
  }) => {
    const context = await browser.newContext({
      javaScriptEnabled: false,
      reducedMotion: "reduce",
      viewport: { width: 320, height: 720 },
    });
    try {
      const page = await context.newPage();
      await page.goto(
        `http://127.0.0.1:4321${route(locale === "en" ? "/" : "/bn/")}`,
      );
      await expect(page.locator(".nav-details nav")).toBeHidden();
      await page.locator(".nav-details > summary").click();
      await expect(page.locator(".nav-details nav")).toBeVisible();
      await page.locator(".nav-details > summary").click();
      await expect(page.locator(".nav-details nav")).toBeHidden();
      const artwork = page.locator(".hero-visual img");
      await artwork.scrollIntoViewIfNeeded();
      await expect(artwork).toBeVisible();
      await expect(artwork).toHaveAttribute(
        "alt",
        locale === "en" ? /Chakma woman.*all three/ : /চাকমা তরুণী.*তিনজনই/,
      );
      await expect
        .poll(() =>
          artwork.evaluate(
            (image: HTMLImageElement) =>
              image.complete && image.naturalWidth > 0,
          ),
        )
        .toBe(true);
      await expect(page.locator(".mentor-caption")).toBeVisible();
      expect(
        await page
          .locator(".ai-art")
          .evaluate(
            (element) => getComputedStyle(element, "::after").animationDuration,
          ),
      ).not.toBe("3.2s");
      await page.locator(".ai-scenario > summary").click();
      await expect(page.locator(".scenario-grid article").last()).toBeVisible();
      const firstFamily = page.locator(".family-paths").first();
      await firstFamily.locator("summary").click();
      await expect(firstFamily.locator("a").first()).toBeVisible();
      await page.locator(".journey-disclosure > summary").click();
      await expect(page.locator(".journey a").last()).toBeVisible();
      await page.locator(".hero-copy .button").first().click();
      await expect(page).toHaveURL(/#starting-point$/);
      await expect(page.locator("#starting-title")).toBeInViewport();
      await page.locator(".situation-options summary").focus();
      await page.keyboard.press("Enter");
      await expect(page.locator(".situation-list a")).toHaveCount(7);
      await page.locator('[data-track-param-situation-id="behind"]').focus();
      await page.keyboard.press("Enter");
      await expect(page).toHaveURL(/\/guidance\/feel-behind\/$/);
    } finally {
      await context.close();
    }
  });
}

test("desktop sidebar and mobile drawer preserve the same navigation", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(route("/"));
  await expect(page.locator(".nav-details nav")).toBeVisible();
  await expect(page.locator(".nav-details > summary")).toBeHidden();
  await expect(page.locator(".nav-group")).toHaveCount(5);
  await expect(page.locator('[data-nav-item="home"]')).toHaveAttribute(
    "aria-current",
    "page",
  );
  await expect(page.locator('[data-nav-item="next-step"]')).not.toHaveAttribute(
    "aria-current",
    "page",
  );
  await expect(page.locator('[data-nav-item="why"]')).toHaveAttribute(
    "href",
    route("/about/#why-this-exists"),
  );
  const desktopGeometry = await page.evaluate(() => {
    const sidebar = document
      .querySelector(".header-nav")!
      .getBoundingClientRect();
    const frame = document
      .querySelector(".site-frame")!
      .getBoundingClientRect();
    return {
      position: getComputedStyle(document.querySelector(".header-nav")!)
        .position,
      sidebarRight: sidebar.right,
      frameLeft: frame.left,
      utilityTop: document
        .querySelector(".breadcrumb-bar")!
        .getBoundingClientRect().top,
      utilityLeft: document
        .querySelector(".breadcrumb-bar")!
        .getBoundingClientRect().left,
    };
  });
  expect(desktopGeometry.position).toBe("fixed");
  expect(
    Math.abs(desktopGeometry.sidebarRight - desktopGeometry.frameLeft),
  ).toBeLessThanOrEqual(1);
  expect(desktopGeometry.utilityTop).toBe(0);
  expect(
    Math.abs(desktopGeometry.utilityLeft - desktopGeometry.sidebarRight),
  ).toBeLessThanOrEqual(1);
  await expect(
    page.locator('.nav-details [data-nav-item="search"]'),
  ).toHaveCount(0);
  await expect(page.locator(".breadcrumb-bar .topbar-tools")).toBeVisible();
  await expect(page.getByRole("searchbox")).toBeVisible();
  await expect(
    page.locator(".breadcrumb-bar [data-language-switch]"),
  ).toBeVisible();
  await expect(
    page.locator(".breadcrumb-bar [data-theme-switch]"),
  ).toBeVisible();
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.locator(".nav-details nav")).toBeHidden();
  const menu = page.locator(".nav-details > summary");
  await expect(menu).toHaveAccessibleName("Menu");
  await expect(menu).toHaveText("☰");
  await menu.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator(".nav-details nav")).toBeVisible();
  await page.keyboard.press("Tab");
  await expect(page.locator(".nav-details a").first()).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.locator(".nav-details nav")).toBeHidden();
  await expect(menu).toBeFocused();
  await page.setViewportSize({ width: 1280, height: 900 });
  await expect(page.locator(".nav-details nav")).toBeVisible();
});

test("purpose is discoverable globally and the current section is identified", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(route("/careers/backend-engineering/"));
  await expect(page.locator('[data-nav-item="careers"]')).toHaveAttribute(
    "aria-current",
    "page",
  );
  await page.locator('[data-nav-item="why"]').click();
  await expect(page).toHaveURL(/\/about\/#why-this-exists$/);
  await expect(page.locator("#why-title")).toBeInViewport();
});

test("breadcrumbs align with page content and have no staggered margins", async ({
  page,
}) => {
  for (const path of [
    "/careers/backend-engineering/",
    "/bn/roadmaps/backend-engineering/",
  ]) {
    await page.goto(route(path));
    const geometry = await page.evaluate(() => {
      const breadcrumb = document.querySelector(".breadcrumb")!;
      const firstLink = breadcrumb.querySelector("a")!.getBoundingClientRect();
      const heading = document.querySelector("h1")!.getBoundingClientRect();
      const items = [...breadcrumb.querySelectorAll("li")];
      return {
        offset: Math.abs(firstLink.left - heading.left),
        margins: items.map((item) => getComputedStyle(item).marginTop),
        tops: items.map((item) => item.getBoundingClientRect().top),
        width: innerWidth,
      };
    });
    expect(geometry.offset).toBeLessThanOrEqual(1);
    expect(geometry.margins.every((margin) => margin === "0px")).toBe(true);
    if (geometry.width >= 768)
      expect(
        Math.max(...geometry.tops) - Math.min(...geometry.tops),
      ).toBeLessThanOrEqual(1);
  }
});

test("the unified breadcrumb top bar remains visible below only the mobile header", async ({
  page,
}) => {
  for (const locale of [
    {
      path: "/guidance/first-software-role/",
      current: "Enter software industry",
    },
    {
      path: "/bn/guidance/first-software-role/",
      current: "সফটওয়্যার ইন্ডাস্ট্রিতে প্রবেশ",
    },
  ]) {
    for (const viewport of [
      { width: 320, height: 780, expectedTop: 72 },
      { width: 390, height: 844, expectedTop: 72 },
      { width: 768, height: 1024, expectedTop: 72 },
      { width: 1280, height: 900, expectedTop: 0 },
    ]) {
      await page.setViewportSize(viewport);
      await page.goto(route(locale.path));
      await page.evaluate(() =>
        window.scrollTo(0, Math.floor(document.body.scrollHeight * 0.6)),
      );

      const geometry = await page.evaluate(() => {
        const bar = document.querySelector<HTMLElement>(".breadcrumb-bar")!;
        const breadcrumb = document.querySelector<HTMLElement>(".breadcrumb")!;
        const current = breadcrumb.querySelector<HTMLElement>(
          '[aria-current="page"]',
        )!;
        const rect = bar.getBoundingClientRect();
        return {
          top: rect.top,
          bottom: rect.bottom,
          positionBase: getComputedStyle(bar).position,
          currentText: current.textContent?.trim(),
          currentCount: breadcrumb.querySelectorAll('[aria-current="page"]')
            .length,
          horizontalOverflow:
            document.documentElement.scrollWidth > window.innerWidth,
        };
      });

      expect(geometry.positionBase).toBe("sticky");
      expect(geometry.top).toBeCloseTo(viewport.expectedTop, 0);
      expect(geometry.bottom).toBeGreaterThan(geometry.top);
      expect(geometry.bottom).toBeLessThanOrEqual(viewport.height);
      expect(geometry.currentText).toBe(locale.current);
      expect(geometry.currentCount).toBe(1);
      expect(geometry.horizontalOverflow).toBe(false);
    }
  }
});

test("homepage and navigation remain useful without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto(`http://127.0.0.1:4321${route("/")}`);
  await expect(page.locator(".nav-details nav")).toBeHidden();
  await page.locator(".nav-details > summary").click();
  await expect(page.locator(".nav-details nav")).toBeVisible();
  await page.locator(".nav-details > summary").click();
  await expect(page.locator(".nav-details nav")).toBeHidden();
  await page.locator('.orientation-note a[href$="/roadmaps/"]').click();
  await expect(page).toHaveURL(/\/roadmaps\/$/);
  await page.evaluate(() =>
    window.scrollTo(0, Math.floor(document.body.scrollHeight * 0.5)),
  );
  await expect
    .poll(async () =>
      page
        .locator(".breadcrumb-bar")
        .evaluate((element) => element.getBoundingClientRect().top),
    )
    .toBeCloseTo(0, 0);
  await context.close();

  const desktopContext = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 1280, height: 800 },
  });
  const desktopPage = await desktopContext.newPage();
  await desktopPage.goto(`http://127.0.0.1:4321${route("/")}`);
  const desktopSummary = desktopPage.locator(".nav-details > summary");
  await expect(desktopSummary).toBeVisible();
  await expect(desktopPage.locator(".nav-details nav")).toBeHidden();
  await desktopSummary.click();
  await expect(desktopPage.locator(".nav-details nav")).toBeVisible();
  await expect(desktopPage.locator('[data-nav-item="home"]')).toBeVisible();
  await desktopContext.close();
});
