import { expect, test } from "@playwright/test";
import { homepageEntries } from "../../src/data/homepage";

const base = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
for (const locale of ["en", "bn"] as const) {
  const prefix = `${base}${locale === "bn" ? "/bn" : ""}`;
  test(`${locale} a first-time visitor reaches useful guidance in two choices`, async ({
    page,
  }) => {
    const events: unknown[][] = [];
    page.on("console", (message) => {
      if (message.text().startsWith("entry-event:"))
        events.push(
          JSON.parse(message.text().slice("entry-event:".length)) as unknown[],
        );
    });
    await page.route(/google-analytics\.com|googletagmanager\.com/, (request) =>
      request.abort(),
    );
    await page.addInitScript(() => {
      window.gtag = (...args: unknown[]) =>
        console.info(`entry-event:${JSON.stringify(args)}`);
    });
    for (const entry of homepageEntries) {
      await page.goto(`${prefix}/`);
      await page.locator('.hero-copy a[href="#starting-point"]').click();
      await expect(page.locator("#starting-title")).toBeInViewport();
      await page.locator(`[data-home-entry="${entry.id}"]`).click();
      await expect(page).toHaveURL(`${prefix}${entry.destination}`);
      await expect(page.locator("html")).toHaveAttribute("lang", locale);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      await expect
        .poll(() => events)
        .toContainEqual([
          "event",
          "next_step_clicked",
          { destination: entry.analyticsDestination },
        ]);
      if (entry.id === "start")
        await expect(page.locator(".timeline li")).toHaveCount(5);
      if (entry.id === "explore")
        await expect(page.locator(".card-grid article")).toHaveCount(17);
      if (entry.id === "prepare")
        await expect(page.locator(".goal-option")).toHaveCount(7);
    }
  });

  test(`${locale} all entry routes work by keyboard without JavaScript`, async ({
    browser,
  }) => {
    const context = await browser.newContext({
      javaScriptEnabled: false,
      reducedMotion: "reduce",
      viewport: { width: 390, height: 844 },
    });
    try {
      const page = await context.newPage();
      for (const entry of homepageEntries) {
        await page.goto(`http://127.0.0.1:4321${prefix}/`);
        await page.locator('.hero-copy a[href="#starting-point"]').focus();
        await page.keyboard.press("Enter");
        const link = page.locator(`[data-home-entry="${entry.id}"]`);
        await link.focus();
        await expect(link).toBeFocused();
        expect(
          await link.evaluate(
            (element) => getComputedStyle(element).outlineStyle,
          ),
        ).not.toBe("none");
        await page.keyboard.press("Enter");
        await expect(page).toHaveURL(`${prefix}${entry.destination}`);
      }
    } finally {
      await context.close();
    }
  });
}
