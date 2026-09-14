import { expect, test } from "@playwright/test";

const base = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
const route = (path: string, locale = "en") =>
  `${base}${locale === "bn" ? "/bn" : ""}${path}`;
const securityCareers = ["security-operations", "offensive-security"];

for (const locale of ["en", "bn"]) {
  for (const career of securityCareers) {
    test(`${locale} ${career} provides a complete, safely scoped path`, async ({
      page,
    }) => {
      for (const section of ["careers", "roadmaps", "try", "ai"]) {
        const response = await page.goto(
          route(`/${section}/${career}/`, locale),
        );
        expect(response?.status()).toBe(200);
        await expect(page.locator("h1")).toBeVisible();
        await expect(page.locator("html")).toHaveAttribute("lang", locale);
        expect(await page.locator("main").innerText()).not.toMatch(
          /TODO|FIXME|Coming soon/i,
        );
      }

      await page.goto(route(`/careers/${career}/`, locale));
      await expect(page.locator(".specialization-grid .card")).toHaveCount(4);
      await page.goto(route(`/roadmaps/${career}/`, locale));
      await expect(page.locator(".stage-layout")).toHaveCount(5);
      await page.goto(route(`/try/${career}/`, locale));
      await expect(page.locator(".task-steps li")).toHaveCount(5);
      await expect(page.locator("main")).toContainText(
        locale === "bn" ? "অনুমতি" : "authorized",
      );
      await page.goto(route(`/ai/${career}/`, locale));
      await expect(page.locator(".exposure__item")).toHaveCount(3);
    });
  }
}

test("DevSecOps, automation and security-testing specializations are discoverable", async ({
  page,
}) => {
  await page.goto(route("/careers/devops-sre/"));
  await expect(page.locator(".specialization-grid")).toContainText("DevSecOps");

  await page.goto(route("/careers/software-quality-assurance/"));
  await expect(page.locator(".specialization-grid")).toContainText(
    "Test automation / SDET",
  );
  await expect(page.locator(".specialization-grid")).toContainText(
    "Security testing",
  );

  await page.goto(route("/careers/application-security/"));
  await expect(page.locator(".specialization-grid")).toContainText("DevSecOps");
});
