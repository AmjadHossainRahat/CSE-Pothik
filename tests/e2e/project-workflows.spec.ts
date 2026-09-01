import { expect, test } from "@playwright/test";
import { projectPlaybooks } from "../../src/data/project/playbooks";
import { projectTemplates } from "../../src/data/project/templates";

const base = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
const route = (locale: string) =>
  `${base}${locale === "bn" ? "/bn" : ""}/guidance/final-year-project/`;

for (const locale of ["en", "bn"] as const) {
  test(`${locale} team playbooks, toolkit and equivalent route work`, async ({
    page,
    request,
  }) => {
    const response = await page.goto(route(locale));
    expect(response?.status()).toBe(200);
    await expect(page.locator(".playbook")).toHaveCount(7);
    await expect(page.locator(".project-template")).toHaveCount(10);
    for (const playbook of projectPlaybooks) {
      await page.locator(`.workflow-links a[href="#${playbook.id}"]`).click();
      await expect(page).toHaveURL(new RegExp(`#${playbook.id}$`));
      const detail = page.locator(`#${playbook.id} details`);
      await detail.locator("summary").click();
      await expect(detail.locator(".worked-example")).toBeVisible();
      await expect(detail).toContainText(playbook.steps[0]!.body[locale]);
      await detail.locator("summary").click();
    }
    const toolkit = await request.get(
      `${base}/downloads/final-year-project.${locale}.md/`,
    );
    expect(toolkit.ok()).toBe(true);
    const text = await toolkit.text();
    for (const template of projectTemplates) {
      const detail = page.locator(`#template-${template.id}`);
      await detail.locator("summary").click();
      await expect(detail).toContainText(template.fields[0]![locale]);
      expect(text).toContain(template.title[locale]);
      expect(text).toContain(template.fields[0]![locale]);
    }
    const downloadEvent = page.waitForEvent("download");
    await page.locator("#templates a[download]").click();
    expect((await downloadEvent).suggestedFilename()).toBe(
      `final-year-project.${locale}.md`,
    );
    await page.locator("[data-language-switch]").click();
    await expect(page).toHaveURL(route(locale === "en" ? "bn" : "en"));
  });

  test(`${locale} expanded guidance works without JavaScript and with keyboard`, async ({
    browser,
  }) => {
    const context = await browser.newContext({
      javaScriptEnabled: false,
      viewport: { width: 390, height: 844 },
    });
    const page = await context.newPage();
    await page.goto(`http://127.0.0.1:4321${route(locale)}`);
    await page.locator('.workflow-links a[href="#git-workflow"]').focus();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/#git-workflow$/);
    await page.locator("#git-workflow summary").focus();
    await page.keyboard.press("Enter");
    await expect(page.locator("#git-workflow pre")).toBeVisible();
    await expect(page.locator("#git-workflow pre")).toContainText(
      "git pull --ff-only",
    );
    await page.locator("#template-test-plan summary").focus();
    await page.keyboard.press("Enter");
    await expect(page.locator("#template-test-plan ul")).toBeVisible();
    await context.close();
  });
}

for (const width of [320, 390, 768, 1280, 1600])
  for (const locale of ["en", "bn"])
    for (const theme of ["light", "dark"]) {
      test(`${locale} ${theme} open playbooks and templates fit ${width}px`, async ({
        page,
      }, info) => {
        test.skip(
          info.project.name === "mobile",
          "Explicit viewport matrix runs once",
        );
        await page.setViewportSize({ width, height: 900 });
        await page.addInitScript(
          (value) => localStorage.setItem("cse-compass-theme", value),
          theme,
        );
        const errors: string[] = [];
        page.on("pageerror", (error) => errors.push(error.message));
        page.on("console", (message) => {
          if (message.type() === "error") errors.push(message.text());
        });
        await page.goto(route(locale));
        await expect(page.locator("html")).toHaveAttribute("lang", locale);
        await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
        await page.locator("#team-workflows > h2").scrollIntoViewIfNeeded();
        await page.screenshot({
          path: info.outputPath(`overview-${locale}-${theme}-${width}.png`),
        });
        for (const detail of await page
          .locator(".playbook-detail, .project-template")
          .all())
          await detail.locator("summary").click();
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth + 1,
          ),
        ).toBe(true);
        const crumb = await page.locator(".breadcrumb").boundingBox();
        const hero = await page.locator(".page-hero").boundingBox();
        expect(crumb && hero && Math.abs(crumb.x - hero.x) <= 1).toBe(true);
        for (const id of ["team-workflows", "git-workflow", "templates"]) {
          await page
            .locator(`#${id} > h2, #${id} > h3`)
            .first()
            .scrollIntoViewIfNeeded();
          await page.screenshot({
            path: info.outputPath(`${id}-${locale}-${theme}-${width}.png`),
          });
        }
        expect(errors).toEqual([]);
      });
    }

test("project toolkit and source links dispatch bounded analytics", async ({
  page,
}) => {
  const events: unknown[][] = [];
  page.on("console", (message) => {
    if (message.text().startsWith("compass-test-event:"))
      events.push(
        JSON.parse(
          message.text().slice("compass-test-event:".length),
        ) as unknown[],
      );
  });
  await page.route(/google-analytics\.com|googletagmanager\.com/, (request) =>
    request.abort(),
  );
  await page.addInitScript(() => {
    window.gtag = (...args: unknown[]) =>
      console.info(`compass-test-event:${JSON.stringify(args)}`);
  });
  await page.goto(route("en"));
  const download = page.waitForEvent("download");
  await page.locator("#templates a[download]").click();
  await download;
  await expect
    .poll(() => events)
    .toContainEqual([
      "event",
      "next_step_clicked",
      { destination: "fyp-evidence-template" },
    ]);
  await page.route("https://docs.github.com/**", (request) =>
    request.fulfill({
      status: 200,
      contentType: "text/html",
      body: "<p>Local reference test</p>",
    }),
  );
  await page.locator("#source-github-flow a").click();
  await expect
    .poll(() => events)
    .toContainEqual([
      "event",
      "learning_resource_clicked",
      { resource_id: "github-flow", provider: "GitHub Docs" },
    ]);
});
