import { expect, test } from "@playwright/test";

const basePath = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
const route = (path: string) => `${basePath}${path}`;

for (const locale of ["en", "bn"] as const) {
  test(`${locale} foundations explain how to review and own AI-assisted code`, async ({
    page,
  }) => {
    const path =
      locale === "bn"
        ? "/bn/guidance/software-engineering-foundations/"
        : "/guidance/software-engineering-foundations/";
    await page.goto(route(path));

    await expect(
      page.getByRole("heading", {
        name:
          locale === "bn"
            ? "Code বানানো সহজ হয়েছে। বোঝা, যাচাই করা আর safely বদলানো সহজ হয়নি।"
            : "Producing code became easier. Understanding, verifying and changing it safely did not.",
      }),
    ).toBeVisible();

    const lenses = page.locator(".review-lenses a");
    await expect(lenses).toHaveCount(5);
    await expect(lenses).toContainText([
      "Clean Code",
      "Code Smells",
      "SOLID",
      "Patterns",
      "Defensive",
    ]);

    const topicNames = await page
      .locator(".foundation-list article h2")
      .allTextContents();
    expect(topicNames).toEqual([
      "Clean Code",
      "Code Smells",
      "Refactoring",
      "Defensive Programming",
      "SOLID Principles",
      "Design Principles",
      "Design Patterns",
      "Testing & Testability",
      "Architectural Boundaries",
    ]);
    await expect(page.locator(".ai-era-reason")).toHaveCount(9);
    await expect(page.locator("#defensive-programming")).toContainText(
      locale === "bn" ? "malformed input" : "malformed input",
    );
    await expect(page.locator("html")).toHaveAttribute("lang", locale);
    expect(
      await page.evaluate(
        () =>
          document.documentElement.scrollWidth -
          document.documentElement.clientWidth,
      ),
    ).toBeLessThanOrEqual(0);
  });
}

test("foundation sources use the requested focused guides and safe new tabs", async ({
  page,
}) => {
  await page.goto(route("/guidance/software-engineering-foundations/"));
  for (const [name, url] of [
    [
      "Clean Code and Refactoring",
      "https://refactoring.guru/refactoring/what-is-refactoring",
    ],
    ["Code Smells", "https://refactoring.guru/refactoring/smells"],
    ["Design Patterns", "https://refactoring.guru/design-patterns"],
  ] as const) {
    const link = page
      .locator(`.foundation-list a[href="${url}"]`)
      .filter({ hasText: name });
    await expect(link).toHaveCount(1);
    await expect(link).toHaveAttribute("href", url);
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
  }
});

test("foundation guidance remains available without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(route("/guidance/software-engineering-foundations/"));
  await expect(page.locator(".review-lenses a")).toHaveCount(5);
  await expect(
    page.getByRole("heading", { name: "Defensive Programming" }),
  ).toBeVisible();
  await context.close();
});
