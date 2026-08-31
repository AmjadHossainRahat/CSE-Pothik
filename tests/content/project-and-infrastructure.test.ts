import { describe, expect, it } from "vitest";
import { careers, careerFamilies } from "../../src/data/careers";
import { infrastructureCareers } from "../../src/data/infrastructure-careers";
import { infrastructureExperiments } from "../../src/data/infrastructure-experiments";
import { finalYearProject } from "../../src/data/final-year-project";
import { guidanceSourceById } from "../../src/data/guidance-sources";
import { roadmapById } from "../../src/data/roadmaps";
import { careerIds, locales } from "../../src/types/content";

function verifyLocalized(value: unknown): void {
  if (!value || typeof value !== "object") return;
  if ("en" in value && "bn" in value) {
    expect(typeof value.en).toBe("string");
    expect(typeof value.bn).toBe("string");
    expect(String(value.en).trim().length).toBeGreaterThan(0);
    expect(String(value.bn).trim().length).toBeGreaterThan(0);
    // Short role names and technical terms can legitimately be shared.
    if (String(value.en).length > 75)
      expect(String(value.bn)).toMatch(/[\u0980-\u09ff]/);
    return;
  }
  Object.values(value).forEach(verifyLocalized);
}

describe("complete project and infrastructure guidance", () => {
  it("keeps every declared career in exactly one matching family and only two languages", () => {
    expect(locales).toEqual(["en", "bn"]);
    expect(careers.map((career) => career.id).sort()).toEqual(
      [...careerIds].sort(),
    );
    for (const career of careers) {
      const memberships = careerFamilies.filter((family) =>
        family.careerIds.includes(career.id),
      );
      expect(memberships.map((family) => family.id)).toEqual([career.familyId]);
    }
  });

  it("contains complete bilingual work, safe experiments and role-specific roadmaps", () => {
    expect(infrastructureCareers).toHaveLength(3);
    expect(infrastructureExperiments).toHaveLength(3);
    verifyLocalized(infrastructureCareers);
    verifyLocalized(infrastructureExperiments);
    for (const career of infrastructureCareers) {
      expect(career.ai.map((task) => task.exposure).sort()).toEqual([
        "higher",
        "lower",
        "medium",
      ]);
      const roadmap = roadmapById.get(career.id)!;
      verifyLocalized(roadmap);
      expect(roadmap.stages).toHaveLength(5);
      expect(roadmap.stages[3]!.resourceIds).not.toContain("testing-js");
      const experiment = infrastructureExperiments.find(
        (item) => item.id === career.id,
      )!;
      expect(experiment.steps.length).toBeGreaterThanOrEqual(5);
      expect(experiment.prerequisites[0]!.en).toMatch(/setup|Installation/i);
    }
  });

  it("has seven actionable project stages with references and readiness evidence", () => {
    verifyLocalized(finalYearProject);
    expect(finalYearProject.stages.map((stage) => stage.id)).toEqual([
      "define",
      "specify",
      "design",
      "build",
      "verify",
      "release",
      "defend",
    ]);
    for (const stage of finalYearProject.stages) {
      expect(stage.tasks.length).toBeGreaterThanOrEqual(3);
      expect(stage.evidence.en.length).toBeGreaterThan(40);
      expect(stage.notYet.en.length).toBeGreaterThan(40);
      expect(finalYearProject.sourceIds).toContain(stage.sourceId);
      expect(guidanceSourceById.has(stage.sourceId)).toBe(true);
    }
    expect(finalYearProject.variants).toHaveLength(4);
    expect(finalYearProject.releaseChecks.length).toBeGreaterThanOrEqual(8);
    expect(new Set(finalYearProject.sourceIds).size).toBe(
      finalYearProject.sourceIds.length,
    );
  });
});
