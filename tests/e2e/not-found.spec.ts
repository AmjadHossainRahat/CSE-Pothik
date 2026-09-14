import { expect, test } from "@playwright/test";

const base = (process.env.BASE_PATH ?? "").replace(/\/$/, "");

test("invalid routes show a useful, responsive way home", async ({ page }) => {
  const response = await page.goto(`${base}/this-route-does-not-exist/`);

  expect(response?.status()).toBe(404);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex, follow",
  );
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "The robot found home. This page didn’t.",
    }),
  ).toBeVisible();
  await expect(page.locator(".not-found__bangla")).toContainText(
    "রোবটটি বাড়ির পথ পেয়েছে",
  );

  const illustration = page.locator(".not-found__art img");
  await expect(illustration).toBeVisible();
  expect(
    await illustration.evaluate((image: HTMLImageElement) =>
      Boolean(image.complete && image.naturalWidth && image.naturalHeight),
    ),
  ).toBe(true);
  await expect(
    page.getByRole("link", { name: "Go to the homepage" }),
  ).toHaveAttribute("href", `${base}/`);
  await expect(
    page.getByRole("link", { name: "Help me choose a direction" }),
  ).toHaveAttribute("href", `${base}/im-lost/`);

  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth + 1,
    ),
  ).toBe(true);
});
