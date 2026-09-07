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

test("bilingual static search finds careers, guidance and resources without tracking the query", async ({
  page,
}) => {
  await page.goto(route("/search/"));
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex, follow",
  );
  await page.getByRole("searchbox").fill("network");
  await expect(
    page.getByRole("link", { name: "Network Engineering", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /An Introduction to Computer Networks/ }),
  ).toBeVisible();
  await expect(page).not.toHaveURL(/\?q=/);

  await page.getByRole("searchbox").fill("OpenClaw");
  await expect(
    page.getByRole("link", { name: "Build AI systems in the right order" }),
  ).toHaveAttribute("href", route("/roadmaps/ai-engineering/#ai-systems-path"));

  await page.goto(route("/bn/search/"));
  await page.getByRole("searchbox").fill("প্রজেক্ট");
  await expect(
    page.getByRole("link", { name: /Final-year project standard/ }),
  ).toBeVisible();
  await expect(page.locator("[data-search-status]")).toContainText("ফল");
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
    "কমপক্ষে দুটি career বেছে নাও।",
  );
});
