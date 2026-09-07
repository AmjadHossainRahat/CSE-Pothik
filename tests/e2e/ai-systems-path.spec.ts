import { expect, test } from "@playwright/test";

const basePath = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
const route = (path: string) => `${basePath}${path}`;

for (const locale of ["en", "bn"] as const) {
  test(`${locale} AI hub reveals the complete concept-first systems path`, async ({
    page,
  }, testInfo) => {
    const hub = locale === "en" ? "/ai/" : "/bn/ai/";
    const roadmap =
      locale === "en"
        ? "/roadmaps/ai-engineering/"
        : "/bn/roadmaps/ai-engineering/";
    await page.goto(route(hub));
    const builderPanel = page.locator(".systems-route");
    const builderLayout = await builderPanel.evaluate((panel) => {
      const heading = panel.querySelector("h2") as HTMLElement;
      const action = panel.querySelector(
        ".systems-route__action",
      ) as HTMLElement;
      return {
        headingRight: heading.getBoundingClientRect().right,
        headingBottom: heading.getBoundingClientRect().bottom,
        headingSize: Number.parseFloat(getComputedStyle(heading).fontSize),
        actionLeft: action.getBoundingClientRect().left,
        actionTop: action.getBoundingClientRect().top,
      };
    });
    expect(builderLayout.headingSize).toBeLessThanOrEqual(32);
    if (testInfo.project.name === "chromium") {
      expect(builderLayout.actionLeft).toBeGreaterThan(
        builderLayout.headingRight + 16,
      );
    } else {
      expect(builderLayout.actionTop).toBeGreaterThan(
        builderLayout.headingBottom,
      );
    }
    await builderPanel.screenshot({
      path: testInfo.outputPath(`ai-builder-panel-${locale}.png`),
    });
    const pathLink = page.getByRole("link", {
      name:
        locale === "en" ? "Open the AI systems path" : "AI systems path খোলো",
    });
    await expect(pathLink).toHaveAttribute(
      "href",
      route(`${roadmap}#ai-systems-path`),
    );
    await pathLink.click();
    await expect(page).toHaveURL(new RegExp(`${roadmap}#ai-systems-path$`));

    const path = page.locator("#ai-systems-path");
    await expect(path).toBeInViewport();
    await expect(path.locator(".systems-steps > li")).toHaveCount(6);
    await expect(path).toContainText("Prompt engineering");
    await expect(path).toContainText("RAG");
    await expect(path).toContainText("n8n");
    await expect(path).toContainText("OpenClaw");
    await expect(path).toContainText("AGI");
    await expect(path.locator("a[target='_blank']")).toHaveCount(4);
    await expect(path.locator("a[target='_blank']").first()).toHaveAttribute(
      "rel",
      "noopener noreferrer",
    );
    const projectPanel = path.locator(".start-small");
    const projectLayout = await projectPanel.evaluate((panel) => {
      const heading = panel.querySelector("h2") as HTMLElement;
      const action = panel.querySelector(".start-small__action") as HTMLElement;
      return {
        headingRight: heading.getBoundingClientRect().right,
        headingBottom: heading.getBoundingClientRect().bottom,
        headingSize: Number.parseFloat(getComputedStyle(heading).fontSize),
        actionLeft: action.getBoundingClientRect().left,
        actionTop: action.getBoundingClientRect().top,
      };
    });
    expect(projectLayout.headingSize).toBeLessThanOrEqual(35);
    if (testInfo.project.name === "chromium") {
      expect(projectLayout.actionLeft).toBeGreaterThan(
        projectLayout.headingRight + 16,
      );
    } else {
      expect(projectLayout.actionTop).toBeGreaterThan(
        projectLayout.headingBottom,
      );
    }
    const overflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth -
        document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);
    await path.screenshot({
      path: testInfo.outputPath(`ai-systems-path-${locale}.png`),
    });
  });
}

test("AI systems path remains directly available without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(route("/roadmaps/ai-engineering/#ai-systems-path"));
  await expect(
    page.locator("#ai-systems-path .systems-steps > li"),
  ).toHaveCount(6);
  await expect(page.locator("#ai-systems-path")).toContainText("agent loop");
  await context.close();
});
