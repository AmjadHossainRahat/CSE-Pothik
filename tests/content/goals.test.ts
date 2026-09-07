import { describe, expect, it } from "vitest";
import { finalYearProject } from "../../src/data/final-year-project";
import { firstSoftwareRoleGuide } from "../../src/data/first-software-role";
import { goals } from "../../src/data/goals";
import { guidanceSources } from "../../src/data/guidance-sources";
import { homepageAiSourceIds } from "../../src/data/homepage";
import { careers, careerFamilies } from "../../src/data/careers";
import { experiments } from "../../src/data/experiments";
import { roadmaps } from "../../src/data/roadmaps";
import { careerIds, goalIds } from "../../src/types/content";

function checkLocalized(value: unknown): void {
  if (!value || typeof value !== "object") return;
  if ("en" in value || "bn" in value) {
    const copy = value as { en: string; bn: string };
    expect(copy.en.trim().length).toBeGreaterThan(0);
    expect(copy.bn.trim().length).toBeGreaterThan(0);
    // Editorial prose must actually include Bangla, not a duplicated English string.
    if (copy.en.length > 55) expect(copy.bn).toMatch(/[\u0980-\u09ff]/);
  } else Object.values(value).forEach(checkLocalized);
}

describe("goal-based guidance", () => {
  it("publishes all seven complete, bilingual goals without duplicate IDs", () => {
    expect(goals.map((goal) => goal.id)).toEqual([...goalIds]);
    goals.forEach((goal) => {
      checkLocalized(goal);
      expect(goal.variants.length).toBeGreaterThanOrEqual(2);
      expect(goal.stages.map((stage) => stage.id)).toEqual([
        "foundation",
        "evidence",
        "application",
        "adapt",
      ]);
      expect(goal.pitfalls.length).toBeGreaterThanOrEqual(3);
      expect(goal.thisWeek.en.length).toBeGreaterThan(80);
      goal.stages.forEach((stage) => {
        expect(stage.tasks.length).toBeGreaterThanOrEqual(2);
        expect(stage.evidence.en.length).toBeGreaterThan(55);
        expect(stage.notYet.en.length).toBeGreaterThan(40);
      });
    });
  });
  it("connects goals, careers and individually scoped official sources", () => {
    const sources = new Set(guidanceSources.map((source) => source.id));
    expect(sources.size).toBe(guidanceSources.length);
    guidanceSources.forEach((source) => {
      expect(source.url).toMatch(/^https:\/\//);
      expect(source.lastReviewed).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      checkLocalized(source);
    });
    goals.forEach((goal) => {
      expect(new Set(goal.careerIds).size).toBe(goal.careerIds.length);
      goal.careerIds.forEach((id) => expect(careerIds).toContain(id));
      goal.relatedGoalIds.forEach((id) => {
        expect(goalIds).toContain(id);
        expect(id).not.toBe(goal.id);
      });
      [
        ...goal.sourceIds,
        ...goal.stages.map((stage) => stage.sourceId),
      ].forEach((id) => expect(sources.has(id)).toBe(true));
    });
    guidanceSources.forEach((source) =>
      expect(
        goals.some((goal) => goal.sourceIds.includes(source.id)) ||
          finalYearProject.sourceIds.includes(source.id) ||
          firstSoftwareRoleGuide.sourceIds.includes(source.id) ||
          homepageAiSourceIds.includes(
            source.id as (typeof homepageAiSourceIds)[number],
          ),
      ).toBe(true),
    );
  });
  it("includes complete mobile and UX/UI paths throughout the content graph", () => {
    for (const id of ["mobile-app-development", "ux-ui-engineering"] as const) {
      const career = careers.find((item) => item.id === id)!;
      expect(career).toBeDefined();
      checkLocalized(career);
      expect(career.aiExposure.map((item) => item.exposure)).toEqual([
        "higher",
        "medium",
        "lower",
      ]);
      expect(
        careerFamilies.filter((family) => family.careerIds.includes(id)),
      ).toHaveLength(1);
      expect(experiments.find((item) => item.id === id)?.steps).toHaveLength(4);
      const roadmap = roadmaps.find((item) => item.id === id)!;
      expect(roadmap.stages).toHaveLength(5);
      expect(roadmap.stages[3]?.resourceIds).not.toContain("testing-js");
      expect(
        goals.filter((goal) => goal.careerIds.includes(id)).length,
      ).toBeGreaterThanOrEqual(4);
    }
    expect(careers).toHaveLength(careerIds.length);
    expect(careerFamilies.flatMap((family) => family.careerIds).sort()).toEqual(
      [...careerIds].sort(),
    );
  });

  it("connects every specialist expansion to multiple realistic goals", () => {
    for (const id of [
      "data-analytics-bi",
      "ai-engineering",
      "application-security",
    ] as const) {
      expect(goals.filter((goal) => goal.careerIds.includes(id)).length).toBe(
        7,
      );
      expect(
        roadmaps.find((roadmap) => roadmap.id === id)?.stages,
      ).toHaveLength(5);
      expect(
        experiments.find((experiment) => experiment.id === id)?.steps.length,
      ).toBeGreaterThanOrEqual(5);
    }
  });
});
