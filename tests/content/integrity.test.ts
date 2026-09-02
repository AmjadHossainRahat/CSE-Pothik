import { describe, expect, it } from "vitest";
import { careers, careerFamilies } from "../../src/data/careers";
import { experiments } from "../../src/data/experiments";
import { resources } from "../../src/data/resources";
import { roadmaps } from "../../src/data/roadmaps";
import { searchEntries } from "../../src/data/search";
import { lostChoices, studentSituations } from "../../src/data/situations";
import { exposureLevels } from "../../src/types/content";

const unique = (values: string[]) => new Set(values).size === values.length;
const slug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const hasLocalizedCopy = (value: { en: string; bn: string }) =>
  value.en.trim().length > 0 && value.bn.trim().length > 0;

describe("content integrity", () => {
  it("has unique, valid stable IDs and slugs", () => {
    expect(unique(careers.map((item) => item.id))).toBe(true);
    expect(unique(careerFamilies.map((item) => item.id))).toBe(true);
    expect(unique(resources.map((item) => item.id))).toBe(true);
    expect(careers.every((item) => slug.test(item.slug))).toBe(true);
  });

  it("connects every career, family, roadmap and experiment", () => {
    const careerIds = new Set(careers.map((item) => item.id));
    const roadmapIds = new Set(roadmaps.map((item) => item.id));
    const experimentIds = new Set(experiments.map((item) => item.id));
    expect(
      careerFamilies
        .flatMap((family) => family.careerIds)
        .every((id) => careerIds.has(id)),
    ).toBe(true);
    expect(
      careers.every(
        (career) =>
          roadmapIds.has(career.roadmapId) &&
          experimentIds.has(career.experimentId),
      ),
    ).toBe(true);
    expect(
      careers.every((career) =>
        career.relatedCareerIds.every(
          (id) => id !== career.id && careerIds.has(id),
        ),
      ),
    ).toBe(true);
  });

  it("requires complete career sections and natural localized content", () => {
    for (const career of careers) {
      expect(hasLocalizedCopy(career.title)).toBe(true);
      expect(hasLocalizedCopy(career.shortDescription)).toBe(true);
      expect(career.actualWork.length).toBeGreaterThanOrEqual(5);
      expect(career.enjoyIf.length).toBeGreaterThanOrEqual(3);
      expect(career.dislikeIf.length).toBeGreaterThanOrEqual(3);
      expect(career.notYet.length).toBeGreaterThanOrEqual(3);
      expect(career.realisticDay.length).toBeGreaterThanOrEqual(3);
      expect(
        career.actualWork
          .concat(career.enjoyIf, career.dislikeIf, career.notYet)
          .every(hasLocalizedCopy),
      ).toBe(true);
    }
  });

  it("validates roadmaps, experiments and AI exposure", () => {
    for (const roadmap of roadmaps) {
      expect(roadmap.stages.map((stage) => stage.id)).toEqual([
        "foundation",
        "core",
        "practical",
        "professional",
        "later",
      ]);
      expect(
        roadmap.stages.every(
          (stage) =>
            stage.topics.length > 0 &&
            stage.notYet.length > 0 &&
            hasLocalizedCopy(stage.enoughForNow),
        ),
      ).toBe(true);
    }
    for (const experiment of experiments) {
      expect(experiment.steps.length).toBeGreaterThanOrEqual(4);
      expect(experiment.reflectionPrompts.length).toBeGreaterThanOrEqual(3);
    }
    expect(
      careers
        .flatMap((career) => career.aiExposure)
        .every(
          (item) =>
            exposureLevels.includes(item.exposure) &&
            hasLocalizedCopy(item.task) &&
            hasLocalizedCopy(item.studentResponse),
        ),
    ).toBe(true);
  });

  it("validates curated resource metadata and references", () => {
    const resourceIds = new Set(resources.map((resource) => resource.id));
    for (const resource of resources) {
      expect(() => new URL(resource.url)).not.toThrow();
      expect(resource.url.startsWith("https://")).toBe(true);
      expect(resource.isFree).toBe(true);
      expect(resource.lastReviewed).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(hasLocalizedCopy(resource.recommendedScope)).toBe(true);
      expect(hasLocalizedCopy(resource.whyRecommended)).toBe(true);
    }
    expect(
      careers.every((career) =>
        career.resourceIds.every((id) => resourceIds.has(id)),
      ),
    ).toBe(true);
    expect(
      experiments.every((experiment) =>
        experiment.resourceIds.every((id) => resourceIds.has(id)),
      ),
    ).toBe(true);
    expect(
      roadmaps.every((roadmap) =>
        roadmap.stages.every((stage) =>
          stage.resourceIds.every((id) => resourceIds.has(id)),
        ),
      ),
    ).toBe(true);
  });

  it("keeps deterministic internal navigation parallel across languages", () => {
    const destinations = [...studentSituations, ...lostChoices].flatMap(
      (item) => Object.values(item.destination),
    );
    expect(
      destinations.every((path) => path.startsWith("/") && path.endsWith("/")),
    ).toBe(true);
    expect(
      studentSituations.every(
        (item) => item.destination.bn === `/bn${item.destination.en}`,
      ),
    ).toBe(true);
    expect(
      lostChoices.every(
        (item) => item.destination.bn === `/bn${item.destination.en}`,
      ),
    ).toBe(true);
  });

  it("keeps the static search index complete, unique and bilingual", () => {
    expect(unique(searchEntries.map((entry) => entry.id))).toBe(true);
    expect(searchEntries.every((entry) => entry.path.startsWith("/"))).toBe(
      true,
    );
    expect(
      searchEntries.every(
        (entry) =>
          hasLocalizedCopy(entry.title) &&
          hasLocalizedCopy(entry.description) &&
          hasLocalizedCopy(entry.keywords),
      ),
    ).toBe(true);
    for (const career of careers) {
      expect(
        ["career", "roadmap", "experiment", "ai"].every((type) =>
          searchEntries.some((entry) => entry.id === `${type}-${career.id}`),
        ),
      ).toBe(true);
    }
    expect(
      resources.every((resource) =>
        searchEntries.some((entry) => entry.id === `resource-${resource.id}`),
      ),
    ).toBe(true);
  });
});
