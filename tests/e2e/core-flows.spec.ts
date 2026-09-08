import { expect, test } from "@playwright/test";

const basePath = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
const route = (path: string) => `${basePath}${path}`;

test("homepage exposes the complete orientation journey", async ({ page }) => {
  await page.goto(route("/"));
  await expect(
    page.getByRole("heading", { level: 1, name: /You got into CSE/ }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "What would help you today?" }),
  ).toBeVisible();
  await expect(
    page.getByText("Understand → Explore → Compare → Try → Prepare → Adapt", {
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    /\/$/,
  );
  await expect(page.locator('link[hreflang="bn"]')).toHaveAttribute(
    "href",
    /\/bn\/$/,
  );
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    "CSE Compass — Find Your Direction in CSE",
  );
  await expect(page.locator('meta[property="og:description"]')).toHaveAttribute(
    "content",
    /Free career guidance.*strong foundations.*AI era/,
  );
  await expect(page.locator('meta[property="og:image:width"]')).toHaveAttribute(
    "content",
    "1731",
  );
  await expect(
    page.locator('meta[property="og:image:height"]'),
  ).toHaveAttribute("content", "909");
});

test("language switching preserves the equivalent route", async ({ page }) => {
  await page.goto(route("/careers/backend-engineering/"));
  await page.locator("[data-language-switch]").click();
  await expect(page).toHaveURL(/\/bn\/careers\/backend-engineering\/$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "bn");
  await expect(
    page.getByRole("heading", { level: 1, name: "Backend Engineering" }),
  ).toBeVisible();
});

test("theme switching persists and defaults safely", async ({ page }) => {
  await page.goto(route("/"));
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.locator("[data-theme-switch]").click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute(
    "content",
    "#061522",
  );
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("starting point and lost flow route to useful guidance", async ({
  page,
}) => {
  await page.goto(route("/"));
  await page.locator(".situation-options summary").click();
  await page.getByRole("link", { name: /close to graduation/i }).click();
  await expect(page).toHaveURL(/\/guidance\/feel-behind\/$/);
  await page.goto(route("/im-lost/"));
  await page.getByRole("link", { name: /worried about AI/i }).click();
  await expect(page.locator("[data-lost-result]")).toBeVisible();
  await expect(page.locator("[data-result-title]")).toContainText(
    /worried about AI/i,
  );
  await page.locator("[data-result-link]").click();
  await expect(page).toHaveURL(/\/ai\/$/);
});

test("career connects to roadmap, experiment and AI guidance", async ({
  page,
}) => {
  await page.goto(route("/careers/cybersecurity/"));
  await expect(
    page.getByRole("heading", { name: "The uncomfortable part" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Task Automation Exposure" }),
  ).toBeVisible();
  await page.getByRole("link", { name: "See the roadmap" }).first().click();
  await expect(page).toHaveURL(/\/roadmaps\/cybersecurity\/$/);
  await expect(
    page.getByRole("heading", { name: /Foundation/ }).first(),
  ).toBeVisible();
  await page.goto(route("/try/cybersecurity/"));
  await expect(page.getByText(/explicitly authorized labs/i)).toBeVisible();
});

test("comparison supports two to three careers and a shareable URL", async ({
  page,
}) => {
  await page.goto(route("/compare/"));
  await expect(page.locator(".career-options input:checked")).toHaveCount(2);
  await page.getByLabel("Machine Learning Engineering").check();
  await expect(page.locator(".career-options input:checked")).toHaveCount(3);
  await expect(page).toHaveURL(
    /careers=backend-engineering%2Cfrontend-engineering%2Cmachine-learning/,
  );
  await expect(page.getByLabel("Cybersecurity")).toBeDisabled();
});

test("mobile navigation and outbound resource links work", async ({
  page,
}, testInfo) => {
  test.skip(
    !testInfo.project.name.includes("mobile"),
    "mobile-only navigation check",
  );
  await page.goto(route("/"));
  await page.locator(".nav-details > summary").click();
  await expect(page.getByRole("link", { name: "I’m Lost" })).toBeVisible();
  await expect(page.locator('[data-nav-item="why"]')).toBeVisible();
  await page.goto(route("/resources/"));
  const resource = page
    .locator('[data-track-event="learning_resource_clicked"]')
    .first();
  await expect(resource).toHaveAttribute("href", /^https:\/\//);
  await expect(resource).toHaveAttribute("target", "_blank");
  await expect(resource).toHaveAttribute("rel", "noopener noreferrer");
  await expect(resource).toHaveAttribute(
    "aria-describedby",
    "external-link-description",
  );
});
