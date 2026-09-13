import { expect, test } from "@playwright/test";

const basePath = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
const route = (path: string) => `${basePath}${path}`;

test("homepage actions dispatch bounded GA4 events without contacting Google", async ({
  page,
}) => {
  const events: unknown[][] = [];
  page.on("console", (message) => {
    if (message.text().startsWith("compass-test-event:")) {
      events.push(
        JSON.parse(
          message.text().slice("compass-test-event:".length),
        ) as unknown[],
      );
    }
  });
  await page.route(/google-analytics\.com|googletagmanager\.com/, (request) =>
    request.abort(),
  );
  await page.addInitScript(() => {
    window.gtag = (...args: unknown[]) =>
      console.info(`compass-test-event:${JSON.stringify(args)}`);
  });
  await page.goto(route("/"));
  await page.locator("[data-theme-switch]").click();
  await expect
    .poll(() => events)
    .toContainEqual(["event", "theme_switch", { theme: "light" }]);
  await page.locator("[data-language-switch]").click();
  await expect
    .poll(() => events)
    .toContainEqual([
      "event",
      "language_switch",
      { from_locale: "en", to_locale: "bn" },
    ]);
  await page.goto(route("/"));
  await page
    .getByRole("link", { name: "Help me find my next step", exact: true })
    .click();
  await expect
    .poll(() => events)
    .toContainEqual([
      "event",
      "next_step_clicked",
      { destination: "starting-point" },
    ]);
  await page.locator(".situation-options summary").click();
  await page.locator(".situation-list a").first().click();
  await expect
    .poll(() => events.some((event) => event[1] === "starting_point_selected"))
    .toBe(true);
  await page.goto(route("/"));
  await page.locator(".family-paths summary").first().click();
  await page.locator(".family-links a").first().click();
  await expect
    .poll(() => events.some((event) => event[1] === "career_family_opened"))
    .toBe(true);
  await expect
    .poll(() => events.some((event) => event[1] === "career_viewed"))
    .toBe(true);
  expect(events.filter((event) => event[1] === "career_viewed")).toHaveLength(
    1,
  );
  await page
    .getByRole("link", { name: "See the roadmap", exact: true })
    .first()
    .click();
  await expect
    .poll(() => events)
    .toContainEqual([
      "event",
      "roadmap_viewed",
      { career_id: "backend-engineering" },
    ]);
  expect(events.filter((event) => event[1] === "roadmap_viewed")).toHaveLength(
    1,
  );
  await page.goto(route("/"));
  await page.locator(".experiment-grid a").first().click();
  await expect
    .poll(() =>
      events.some((event) => event[1] === "career_experiment_started"),
    )
    .toBe(true);
  await page.goto(route("/"));
  await page.locator('[data-track-event="ai_guidance_viewed"]').click();
  await expect
    .poll(() => events)
    .toContainEqual(["event", "ai_guidance_viewed", { career_id: "overview" }]);
  await page.goto(route("/goals/"));
  await page
    .locator('.goal-option a[href$="/goals/global-companies/"]')
    .click();
  await expect
    .poll(() => events)
    .toContainEqual([
      "event",
      "next_step_clicked",
      { destination: "goal/global-companies" },
    ]);
  await page.route("https://www.amazon.jobs/**", (request) =>
    request.fulfill({
      status: 200,
      contentType: "text/html",
      body: "<p>Local source navigation test</p>",
    }),
  );
  await page.locator("#source-amazon-interviews a").click();
  await expect
    .poll(() => events)
    .toContainEqual([
      "event",
      "learning_resource_clicked",
      { resource_id: "amazon-interviews", provider: "Amazon Jobs" },
    ]);
  await page.goto(route("/roadmaps/"));
  await page
    .locator('[data-track-param-destination="final-year-project"]')
    .click();
  await expect
    .poll(() => events)
    .toContainEqual([
      "event",
      "next_step_clicked",
      { destination: "final-year-project" },
    ]);
  const download = page.waitForEvent("download");
  await page.locator("a[download]").first().click();
  await download;
  await expect
    .poll(() => events)
    .toContainEqual([
      "event",
      "next_step_clicked",
      { destination: "fyp-evidence-template" },
    ]);
});
