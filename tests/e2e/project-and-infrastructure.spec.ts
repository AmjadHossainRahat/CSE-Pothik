import { expect, test } from "@playwright/test";

const base = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
const route = (path: string, locale = "en") =>
  `${base}${locale === "bn" ? "/bn" : ""}${path}`;
const newCareers = [
  "network-engineering",
  "hardware-engineering",
  "software-quality-assurance",
];

for (const locale of ["en", "bn"]) {
  for (const career of newCareers) {
    test(`${locale} ${career} connects all four complete experiences`, async ({
      page,
    }) => {
      for (const section of ["careers", "roadmaps", "try", "ai"]) {
        const response = await page.goto(
          route(`/${section}/${career}/`, locale),
        );
        expect(response?.status()).toBe(200);
        await expect(page.locator("h1")).toBeVisible();
        await expect(page.locator("html")).toHaveAttribute("lang", locale);
        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
          "href",
          new RegExp(`/${section}/${career}/$`),
        );
        expect(await page.locator("main").innerText()).not.toMatch(
          /TODO|FIXME|Coming soon/i,
        );
      }
      await page.goto(route(`/roadmaps/${career}/`, locale));
      await expect(page.locator(".stage-layout")).toHaveCount(5);
      await page
        .locator('[data-track-param-destination="final-year-project"]')
        .click();
      await expect(page).toHaveURL(
        new RegExp(
          `${locale === "bn" ? "/bn" : ""}/guidance/final-year-project/$`,
        ),
      );
    });
  }

  test(`${locale} project guide downloads real evidence templates and switches to its equivalent`, async ({
    page,
    request,
  }) => {
    await page.goto(route("/roadmaps/", locale));
    await page
      .locator('[data-track-param-destination="final-year-project"]')
      .click();
    for (const id of [
      "start",
      "define",
      "specify",
      "design",
      "build",
      "verify",
      "release",
      "defend",
      "traceability",
      "handover",
      "sources",
    ])
      await expect(page.locator(`#${id}`)).toBeAttached();
    await expect(page.locator(".project-variant")).toHaveCount(4);
    await page.locator(".project-variant summary").first().click();
    await expect(page.locator(".project-variant").first()).toHaveAttribute(
      "open",
      "",
    );
    const template = await request.get(
      `${base}/downloads/final-year-project.${locale}.md`,
    );
    expect(template.ok()).toBe(true);
    expect(await template.text()).toContain(
      locale === "en"
        ? "working template, not a completed report"
        : "কাজের template, completed report নয়",
    );
    const downloadEvent = page.waitForEvent("download");
    await page.locator("a[download]").first().click();
    const download = await downloadEvent;
    expect(download.suggestedFilename()).toBe(
      `final-year-project.${locale}.md`,
    );
    await page.locator("[data-language-switch]").click();
    await expect(page).toHaveURL(
      route("/guidance/final-year-project/", locale === "en" ? "bn" : "en"),
    );
    await expect(page.locator("html")).toHaveAttribute(
      "lang",
      locale === "en" ? "bn" : "en",
    );
  });
}

test("project contents and branch guidance work using only keyboard without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto(
    `http://127.0.0.1:4321${route("/guidance/final-year-project/")}`,
  );
  const link = page.locator('.project-index a[href="#verify"]');
  await link.focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#verify$/);
  const branch = page.locator(".project-variant summary").nth(2);
  await branch.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator(".project-variant").nth(2)).toHaveAttribute(
    "open",
    "",
  );
  await expect(page.locator(".project-variant").nth(2)).toContainText(
    "supervised safety review",
  );
  await page.locator("[data-language-switch]").click();
  await expect(page.locator("html")).toHaveAttribute("lang", "bn");
  await context.close();
});

test("new careers can be compared together", async ({ page }) => {
  await page.goto(`${route("/compare/")}?careers=${newCareers.join(",")}`);
  await expect(page.locator(".career-options input:checked")).toHaveCount(3);
  for (const career of newCareers)
    await expect(
      page.locator(`.career-options input[value="${career}"]`),
    ).toBeChecked();
});

for (const width of [390, 768, 1280, 1600])
  for (const locale of ["en", "bn"])
    for (const theme of ["light", "dark"]) {
      test(`${locale} ${theme} project and infrastructure layouts fit ${width}px`, async ({
        page,
      }, info) => {
        test.skip(
          info.project.name.includes("mobile"),
          "Explicit viewport matrix runs once, independent of device project",
        );
        await page.setViewportSize({ width, height: 900 });
        await page.addInitScript(
          (value) => localStorage.setItem("cse-pothik-theme", value),
          theme,
        );
        const errors: string[] = [];
        page.on("pageerror", (error) => errors.push(error.message));
        for (const path of [
          "/guidance/final-year-project/",
          ...newCareers.map((id) => `/careers/${id}/`),
        ]) {
          await page.goto(route(path, locale));
          await expect(page.locator("html")).toHaveAttribute(
            "data-theme",
            theme,
          );
          expect(
            await page.evaluate(
              () =>
                document.documentElement.scrollWidth <= window.innerWidth + 1,
            ),
          ).toBe(true);
          const crumb = await page.locator(".breadcrumb").boundingBox();
          const heading = await page.locator(".page-hero").boundingBox();
          expect(crumb && heading && Math.abs(crumb.x - heading.x) <= 1).toBe(
            true,
          );
        }
        expect(errors).toEqual([]);
      });
    }
