import { expect, test } from "@playwright/test";
import { careers } from "../../src/data/careers";
import { goals } from "../../src/data/goals";

const base = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
const localizedRoute = (locale: "en" | "bn", path: string) =>
  `${base}${locale === "bn" ? "/bn" : ""}${path}`;

const staticPaths = [
  "/",
  "/about/",
  "/ai/",
  "/careers/",
  "/compare/",
  "/goals/",
  "/guidance/competitive-programming/",
  "/guidance/feel-behind/",
  "/guidance/final-year-project/",
  "/guidance/first-software-role/",
  "/guidance/new-cse-student/",
  "/guidance/software-engineering-foundations/",
  "/im-lost/",
  "/privacy/",
  "/resources/",
  "/roadmaps/",
  "/try/",
];

const detailPaths = careers.flatMap((career) => [
  `/ai/${career.slug}/`,
  `/careers/${career.slug}/`,
  `/roadmaps/${career.slug}/`,
  `/try/${career.slug}/`,
]);
const goalPaths = goals.map((goal) => `/goals/${goal.id}/`);
const uiPaths = [...staticPaths, ...detailPaths, ...goalPaths];

test("every public UI route stays inside the desktop content frame", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name === "mobile", "Desktop audit runs once");
  test.setTimeout(300_000);
  await page.setViewportSize({ width: 1280, height: 900 });

  for (const locale of ["en", "bn"] as const) {
    for (const path of uiPaths) {
      const response = await page.goto(localizedRoute(locale, path));
      expect(response?.ok(), `${locale} ${path} should load`).toBe(true);
      const layout = await page.evaluate(() => {
        const main = document.querySelector("main")!;
        const mainRect = main.getBoundingClientRect();
        const visibleTopLevelContainers = [
          ...main.querySelectorAll<HTMLElement>(
            ":scope > .container, :scope > header.container, :scope > .section > .container, :scope > .directory-jump > .container",
          ),
        ].filter((element) => element.getClientRects().length > 0);
        const outOfFrame = visibleTopLevelContainers
          .filter((element) => {
            const rect = element.getBoundingClientRect();
            return (
              rect.left < mainRect.left - 1 || rect.right > mainRect.right + 1
            );
          })
          .map((element) => element.className);
        const breadcrumb = main.querySelector<HTMLElement>(".breadcrumb");
        const hero = main.querySelector<HTMLElement>(".page-hero");
        const heroRect = hero?.getBoundingClientRect();
        const heroContent = hero
          ? [...hero.children].filter(
              (element) =>
                element.getClientRects().length > 0 &&
                !element.classList.contains("eyebrow"),
            )
          : [];
        const oversizedCalloutHeadings = [
          ...main.querySelectorAll<HTMLElement>(".callout h2"),
        ]
          .filter(
            (heading) =>
              Number.parseFloat(getComputedStyle(heading).fontSize) > 38,
          )
          .map((heading) => heading.textContent?.trim());
        return {
          overflow:
            document.documentElement.scrollWidth -
            document.documentElement.clientWidth,
          outOfFrame,
          oversizedCalloutHeadings,
          alignment:
            breadcrumb && hero
              ? Math.abs(
                  breadcrumb.getBoundingClientRect().left -
                    hero.getBoundingClientRect().left,
                )
              : 0,
          heroUsesDesktopColumns:
            !hero ||
            (getComputedStyle(hero).display === "grid" &&
              heroContent.some(
                (element) =>
                  element.getBoundingClientRect().left <= heroRect!.left + 2,
              ) &&
              heroContent.some(
                (element) =>
                  element.getBoundingClientRect().left >=
                  heroRect!.left + heroRect!.width * 0.5,
              )),
        };
      });
      expect(layout.overflow, `${locale} ${path} horizontal overflow`).toBe(0);
      expect(layout.outOfFrame, `${locale} ${path} container bounds`).toEqual(
        [],
      );
      expect(
        layout.oversizedCalloutHeadings,
        `${locale} ${path} compact callout hierarchy`,
      ).toEqual([]);
      expect(layout.alignment, `${locale} ${path} breadcrumb alignment`).toBe(
        0,
      );
      expect(
        layout.heroUsesDesktopColumns,
        `${locale} ${path} should use both desktop hero columns`,
      ).toBe(true);
    }
  }
});

test("I’m Lost uses its desktop width before and after a choice", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name === "mobile", "Desktop audit runs once");
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(localizedRoute("en", "/im-lost/"));

  const before = await page.evaluate(() => {
    const shell = document.querySelector<HTMLElement>(".lost-shell")!;
    const chooser = shell.firstElementChild as HTMLElement;
    const cards = [...shell.querySelectorAll<HTMLElement>(".choice")];
    return {
      widthUse:
        chooser.getBoundingClientRect().width /
        shell.getBoundingClientRect().width,
      firstRowDelta: Math.abs(
        cards[0]!.getBoundingClientRect().top -
          cards[1]!.getBoundingClientRect().top,
      ),
    };
  });
  expect(before.widthUse).toBeGreaterThan(0.98);
  expect(before.firstRowDelta).toBeLessThan(2);

  await page.getByRole("link", { name: /worried about AI/i }).click();
  const after = await page.evaluate(() => {
    const shell = document.querySelector<HTMLElement>(".lost-shell")!;
    const chooser = shell.firstElementChild as HTMLElement;
    const panel = shell.querySelector<HTMLElement>(".reveal-panel")!;
    const shellWidth = shell.getBoundingClientRect().width;
    return {
      chooserShare: chooser.getBoundingClientRect().width / shellWidth,
      panelShare: panel.getBoundingClientRect().width / shellWidth,
      panelVisible: panel.getClientRects().length > 0,
    };
  });
  expect(after.panelVisible).toBe(true);
  expect(after.chooserShare).toBeGreaterThan(0.5);
  expect(after.panelShare).toBeGreaterThan(0.3);
});

test("AI task model title stays on one desktop line without mobile overflow", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name === "mobile", "Viewport states run once");

  for (const locale of ["en", "bn"] as const) {
    for (const width of [1088, 1280, 1600]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(localizedRoute(locale, "/ai/"));
      const title = page.locator(".task-model-head h2");
      const desktop = await title.evaluate((element) => {
        const styles = getComputedStyle(element);
        return {
          height: element.getBoundingClientRect().height,
          lineHeight: Number.parseFloat(styles.lineHeight),
          overflow: element.scrollWidth - element.clientWidth,
        };
      });
      expect(
        desktop.height,
        `${locale} ${width}px title height`,
      ).toBeLessThanOrEqual(desktop.lineHeight * 1.1);
      expect(
        desktop.overflow,
        `${locale} ${width}px title overflow`,
      ).toBeLessThanOrEqual(0);
    }

    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(localizedRoute(locale, "/ai/"));
    const title = page.locator(".task-model-head h2");
    const mobileOverflow = await title.evaluate(
      (element) => element.scrollWidth - element.clientWidth,
    );
    expect(mobileOverflow).toBeLessThanOrEqual(0);
  }
});
