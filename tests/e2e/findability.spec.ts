import { expect, test } from "@playwright/test";

const basePath = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
const route = (path: string) => `${basePath}${path}`;

test("career, experiment, roadmap and resource directories expose jump indexes", async ({
  page,
}) => {
  for (const [path, target] of [
    ["/careers/", "#protect-systems"],
    ["/try/", "#experiments-protect-systems"],
    ["/roadmaps/", "#roadmaps-protect-systems"],
    ["/resources/", "#labs-practice"],
  ] as const) {
    await page.goto(route(path));
    const link = page.locator(`a[href="${target}"]`).first();
    await expect(link).toBeVisible();
    await link.click();
    await expect(page.locator(target)).toBeInViewport();
  }
});

test("the breadcrumb top bar search and scoped systems book are directly discoverable", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(route("/"));
  await expect(page.locator(".breadcrumb-bar .topbar-tools")).toBeVisible();
  await expect(page.getByRole("searchbox")).toBeVisible();
  await expect(page.getByRole("button", { name: "Search" })).toBeVisible();

  await page.goto(route("/resources/#resource-accidental-cto"));
  const book = page.locator("#resource-accidental-cto");
  await expect(book).toBeInViewport();
  await expect(
    book.getByRole("link", { name: /The Accidental CTO/ }),
  ).toHaveAttribute("target", "_blank");
  await expect(book).toContainText("not as a universal architecture recipe");
});

test("bilingual inline search finds careers, guidance and resources without changing the route", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(route("/"));
  await page.getByRole("searchbox").fill("network");
  await page.getByRole("button", { name: "Search" }).click();
  const networkCareer = page
    .locator(".topbar-search__result")
    .filter({ hasText: "Network Engineering" })
    .first();
  await expect(networkCareer).toBeVisible();
  await expect(networkCareer).toHaveAttribute(
    "href",
    route("/careers/network-engineering/"),
  );
  await expect(
    page
      .locator(".topbar-search__result")
      .filter({ hasText: "An Introduction to Computer Networks" }),
  ).toBeVisible();
  await expect(page).toHaveURL(new RegExp(`${basePath}/$`));

  await page.getByRole("searchbox").fill("OpenClaw");
  await page.getByRole("button", { name: "Search" }).click();
  await expect(
    page.getByRole("link", { name: "Build AI systems in the right order" }),
  ).toHaveAttribute("href", route("/roadmaps/ai-engineering/#ai-systems-path"));

  await page.goto(route("/bn/"));
  await page.getByRole("searchbox").fill("প্রজেক্ট");
  await page.getByRole("button", { name: "খুঁজে দেখো" }).click();
  await expect(
    page.getByRole("link", { name: /Final-year project standard/ }),
  ).toBeVisible();
  await expect(page.locator("[data-search-status]")).toContainText("ফল");
});

test("mobile search expands from the breadcrumb bar and returns keyboard-accessible results", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(route("/"));
  const contextBar = page.locator(".breadcrumb-bar");
  const search = contextBar.locator("[data-topbar-search]");
  await expect(search).not.toHaveAttribute("open", "");
  await search.locator("summary").focus();
  await page.keyboard.press("Enter");
  await expect(contextBar.getByRole("searchbox")).toBeVisible();
  const popoverBounds = await search
    .locator(".topbar-search__popover")
    .evaluate((element) => {
      const bounds = element.getBoundingClientRect();
      return {
        left: bounds.left,
        right: bounds.right,
        viewportWidth: window.innerWidth,
        documentOverflow:
          document.documentElement.scrollWidth -
          document.documentElement.clientWidth,
      };
    });
  expect(popoverBounds.left).toBeGreaterThanOrEqual(0);
  expect(popoverBounds.right).toBeLessThanOrEqual(popoverBounds.viewportWidth);
  expect(popoverBounds.documentOverflow).toBeLessThanOrEqual(0);
  await contextBar.getByRole("searchbox").fill("QA");
  await contextBar.getByRole("button", { name: "Search" }).click();
  await expect(
    contextBar
      .locator(".topbar-search__result")
      .filter({ hasText: "Software QA & Testing" })
      .first(),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(search).not.toHaveAttribute("open", "");
  await expect(search.locator("summary")).toBeFocused();
});

test("I’m Lost links grounded local perspectives to the ordered watchlist", async ({
  page,
}) => {
  await page.goto(route("/im-lost/"));
  const choice = page.getByRole("link", {
    name: /grounded career direction/i,
  });
  await expect(choice).toHaveAttribute(
    "href",
    route("/resources/#industry-voices"),
  );
  await choice.click();
  await expect(page.locator("[data-result-copy]")).toContainText(
    "ordered Bangladesh technology watchlist",
  );
  await page.locator("[data-result-link]").click();
  await expect(page).toHaveURL(/\/resources\/#industry-voices$/);
  await expect(page.locator("#industry-voices")).toBeInViewport();
});

test("I’m Lost progressively enhances real fallback links and resets cleanly", async ({
  page,
}) => {
  await page.goto(route("/im-lost/"));
  const choice = page.getByRole("link", { name: /worried about AI/i });
  await expect(choice).toHaveAttribute("href", new RegExp(`${basePath}/ai/$`));
  await choice.click();
  await expect(page.locator("[data-result-title]")).toHaveText(
    /worried about AI/i,
  );
  await expect(page).toHaveURL(/#ai$/);
  await page.locator("[data-lost-reset]").click();
  await expect(page.locator("[data-lost-result]")).toBeHidden();
  await expect(page).not.toHaveURL(/#/);
});

test("I’m Lost choices remain useful with JavaScript disabled", async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto(route("/im-lost/"));
  const choice = page.getByRole("link", { name: /worried about AI/i });
  await expect(choice).toHaveAttribute("href", new RegExp(`${basePath}/ai/$`));
  const navigation = page.locator(".nav-details");
  if ((await navigation.getAttribute("open")) !== null) {
    await navigation.locator("> summary").click();
  }
  await choice.click();
  await expect(page).toHaveURL(new RegExp(`${basePath}/ai/$`));
  await context.close();
});

test("comparison groups all careers by family and localizes live feedback", async ({
  page,
}) => {
  await page.goto(route("/compare/"));
  await expect(page.locator(".career-option-group")).toHaveCount(8);
  await page.goto(route("/bn/compare/"));
  await page.locator(".career-options input:checked").nth(1).uncheck();
  await expect(page.locator("#compare-status")).toHaveText(
    "কমপক্ষে দুটি ক্যারিয়ার বেছে নাও।",
  );
});
