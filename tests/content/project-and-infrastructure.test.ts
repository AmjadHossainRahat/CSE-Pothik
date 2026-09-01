import { describe, expect, it } from "vitest";
import { careers, careerFamilies } from "../../src/data/careers";
import { infrastructureCareers } from "../../src/data/infrastructure-careers";
import { infrastructureExperiments } from "../../src/data/infrastructure-experiments";
import { specialistCareers } from "../../src/data/specialist-careers";
import { specialistExperiments } from "../../src/data/specialist-experiments";
import { finalYearProject } from "../../src/data/final-year-project";
import { projectPlaybooks } from "../../src/data/project/playbooks";
import { projectTemplates } from "../../src/data/project/templates";
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
  it("provides complete bilingual team operations with valid references", () => {
    verifyLocalized(projectPlaybooks);
    expect(projectPlaybooks.map((playbook) => playbook.id)).toEqual([
      "team-plan",
      "task-board",
      "repository",
      "git-workflow",
      "team-sync",
      "test-strategy",
      "continuous-integration",
    ]);
    for (const playbook of projectPlaybooks) {
      expect(playbook.steps.length).toBeGreaterThanOrEqual(4);
      expect(playbook.example.lines.length).toBeGreaterThan(0);
      expect(playbook.summary.en.length).toBeGreaterThan(80);
      for (const step of playbook.steps)
        expect(step.body.en.length).toBeGreaterThan(100);
      for (const id of playbook.sourceIds) {
        expect(guidanceSourceById.has(id)).toBe(true);
        expect(finalYearProject.sourceIds).toContain(id);
      }
    }
  });

  it("includes ten usable typed templates and one connected working example", () => {
    verifyLocalized(projectTemplates);
    expect(projectTemplates.map((template) => template.id)).toEqual([
      "brief",
      "team-agreement",
      "issue",
      "pull-request",
      "sync-note",
      "decision",
      "test-plan",
      "bug-report",
      "release-record",
      "attribution",
    ]);
    for (const template of projectTemplates)
      expect(template.fields.length).toBeGreaterThanOrEqual(3);
    const board = projectPlaybooks.find(
      (playbook) => playbook.id === "task-board",
    )!;
    const testing = projectPlaybooks.find(
      (playbook) => playbook.id === "test-strategy",
    )!;
    expect(board.example.lines.map((line) => line.en).join(" ")).toMatch(
      /REQ-01[\s\S]*AC-01[\s\S]*TEST-01/,
    );
    expect(testing.example.title.en).toContain("TEST-01");
    expect(testing.example.title.en).toContain("REQ-01");
  });
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

  it("keeps the three specialist expansions complete and role-specific", () => {
    expect(specialistCareers.map((career) => career.id)).toEqual([
      "data-analytics-bi",
      "ai-engineering",
      "application-security",
    ]);
    expect(specialistExperiments.map((experiment) => experiment.id)).toEqual(
      specialistCareers.map((career) => career.id),
    );
    verifyLocalized(specialistCareers);
    verifyLocalized(specialistExperiments);
    for (const career of specialistCareers) {
      expect(career.ai.map((task) => task.exposure).sort()).toEqual([
        "higher",
        "lower",
        "medium",
      ]);
      const roadmap = roadmapById.get(career.id)!;
      verifyLocalized(roadmap);
      expect(roadmap.stages).toHaveLength(5);
      expect(roadmap.stages[3]!.resourceIds).not.toContain("testing-js");
      const experiment = specialistExperiments.find(
        (item) => item.id === career.id,
      )!;
      expect(experiment.steps.length).toBeGreaterThanOrEqual(5);
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
