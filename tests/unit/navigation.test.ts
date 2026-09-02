import { describe, expect, it } from "vitest";
import {
  isNavigationItemActive,
  navigationGroups,
} from "../../src/data/navigation";
import { getLostChoice, isKnownLostChoice } from "../../src/lib/navigation";

describe("lost navigation", () => {
  it("returns deterministic routes", () => {
    expect(getLostChoice("ai")?.destination.en).toBe("/ai/");
    expect(getLostChoice("behind")?.destination.bn).toBe(
      "/bn/guidance/feel-behind/",
    );
  });

  it("rejects invented outcomes", () => {
    expect(isKnownLostChoice("perfect-career-score")).toBe(false);
  });
});

describe("global navigation", () => {
  it("groups every route by student intent with bilingual labels", () => {
    expect(navigationGroups.map((group) => group.id)).toEqual([
      "start",
      "discover",
      "prepare",
      "future",
      "about",
    ]);
    const items = navigationGroups.flatMap((group) => group.items);
    expect(new Set(items.map((item) => item.id)).size).toBe(items.length);
    expect(items.find((item) => item.id === "lost")?.emphasis).toBe(true);
    expect(items.find((item) => item.id === "home")?.path).toBe("/");
    expect(items.find((item) => item.id === "search")?.path).toBe("/search/");
    expect(
      navigationGroups
        .find((group) => group.id === "prepare")
        ?.items.some((item) => item.id === "resources"),
    ).toBe(true);
    expect(
      navigationGroups
        .find((group) => group.id === "about")
        ?.items.some((item) => item.id === "resources"),
    ).toBe(false);
    expect(items.find((item) => item.id === "why")?.path).toBe(
      "/about/#why-this-exists",
    );
    for (const group of navigationGroups) {
      expect(group.label.en.length).toBeGreaterThan(3);
      expect(group.label.bn).toMatch(/[\u0980-\u09ff]/);
      for (const item of group.items) {
        expect(item.label.en.length).toBeGreaterThan(3);
        expect(item.label.bn.length).toBeGreaterThanOrEqual(3);
        expect(item.path.startsWith("/")).toBe(true);
      }
    }
  });

  it("marks exact and nested destination routes without false positives", () => {
    const items = navigationGroups.flatMap((group) => group.items);
    const careers = items.find((item) => item.id === "careers")!;
    const compare = items.find((item) => item.id === "compare")!;
    const why = items.find((item) => item.id === "why")!;
    const home = items.find((item) => item.id === "home")!;
    const nextStep = items.find((item) => item.id === "next-step")!;

    expect(
      isNavigationItemActive("/careers/backend-engineering/", careers),
    ).toBe(true);
    expect(isNavigationItemActive("/careers/", careers)).toBe(true);
    expect(isNavigationItemActive("/compare/", careers)).toBe(false);
    expect(isNavigationItemActive("/compare/", compare)).toBe(true);
    expect(isNavigationItemActive("/about/", why)).toBe(true);
    expect(isNavigationItemActive("/", home)).toBe(true);
    expect(isNavigationItemActive("/", nextStep)).toBe(false);
  });
});
