import { describe, expect, it } from "vitest";
import { firstSoftwareRoleGuide as guide } from "../../src/data/first-software-role";
import { guidanceSourceById } from "../../src/data/guidance-sources";
import { navigationGroups } from "../../src/data/navigation";
import { searchEntries } from "../../src/data/search";
import { lostChoices, studentSituations } from "../../src/data/situations";

const hasLocalizedCopy = (value: { en: string; bn: string }) =>
  value.en.trim().length > 0 && /[\u0980-\u09ff]/.test(value.bn);

describe("first software role transition guide", () => {
  it("supports distinct starting bottlenecks and a complete evidence-to-application cycle", () => {
    expect(guide.starts.map((start) => start.id)).toEqual([
      "project",
      "presentation",
      "interview",
      "applications",
      "feedback",
    ]);
    expect(guide.stages.map((stage) => stage.id)).toEqual([
      "target",
      "strengthen",
      "present",
      "practice",
      "apply",
      "improve",
    ]);
    for (const start of guide.starts) {
      expect(hasLocalizedCopy(start.title)).toBe(true);
      expect(hasLocalizedCopy(start.note)).toBe(true);
      expect(
        guide.stages.some(
          (stage) => start.destination === `stage-${stage.id}`,
        ) || start.destination === "feedback-loop",
      ).toBe(true);
    }
    for (const stage of guide.stages) {
      expect(stage.tasks.length).toBeGreaterThanOrEqual(3);
      expect(hasLocalizedCopy(stage.title)).toBe(true);
      expect(hasLocalizedCopy(stage.why)).toBe(true);
      expect(hasLocalizedCopy(stage.evidence)).toBe(true);
      expect(hasLocalizedCopy(stage.notYet)).toBe(true);
    }
  });

  it("keeps ACM optional, protects honest evidence and diagnoses feedback without a score", () => {
    const copy = JSON.stringify(guide);
    expect(copy).toMatch(/advanced competitive-programming record/);
    expect(copy).toMatch(/do not fabricate historical teamwork/i);
    expect(copy).toMatch(/CGPA/);
    expect(guide.interviewBaseline).toHaveLength(4);
    expect(guide.feedbackSignals).toHaveLength(4);
    expect(guide.pitfalls.length).toBeGreaterThanOrEqual(4);
  });

  it("connects validated sources, careers, search, navigation and both discovery flows", () => {
    expect(guide.sourceIds.every((id) => guidanceSourceById.has(id))).toBe(
      true,
    );
    expect(new Set(guide.sourceIds).size).toBe(guide.sourceIds.length);
    expect(guide.sourceIds).toContain("basis-industry-catalog");
    expect(guide.careerIds).toEqual([
      "frontend-engineering",
      "backend-engineering",
      "mobile-app-development",
      "software-quality-assurance",
    ]);
    expect(
      searchEntries.some((entry) => entry.id === "first-software-role"),
    ).toBe(true);
    expect(
      navigationGroups
        .flatMap((group) => group.items)
        .some((item) => item.id === "first-role"),
    ).toBe(true);
    for (const collection of [studentSituations, lostChoices]) {
      const entry = collection.find((item) => item.id === "first-role");
      expect(entry?.destination.en).toBe("/guidance/first-software-role/");
      expect(entry?.destination.bn).toBe("/bn/guidance/first-software-role/");
    }
  });
});
