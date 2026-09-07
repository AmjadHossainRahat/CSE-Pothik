import {
  aiSystemsPathSteps,
  aiSystemsResourceIds,
  aiSystemsTermNotes,
} from "../../src/data/ai-systems-path";
import { resources } from "../../src/data/resources";
import { roadmaps } from "../../src/data/roadmaps";
import { searchEntries } from "../../src/data/search";
import { lostChoices } from "../../src/data/situations";
import { describe, expect, it } from "vitest";

const localized = (value: { en: string; bn: string }) =>
  value.en.trim().length > 0 && value.bn.trim().length > 0;

describe("concept-first AI systems path", () => {
  it("keeps six ordered, bilingual capability steps", () => {
    expect(aiSystemsPathSteps.map((step) => step.id)).toEqual([
      "frame",
      "prompt",
      "ground",
      "workflow",
      "agent",
      "operate",
    ]);
    expect(
      aiSystemsPathSteps.every(
        (step) =>
          localized(step.title) &&
          localized(step.intent) &&
          localized(step.build) &&
          step.terms.length >= 3,
      ),
    ).toBe(true);
  });

  it("places requested concepts without presenting products as the roadmap", () => {
    const copy = [
      ...aiSystemsPathSteps.flatMap((step) => [
        ...step.terms,
        step.title.en,
        step.intent.en,
        step.build.en,
      ]),
      ...aiSystemsTermNotes.flatMap((note) => [
        note.term,
        note.meaning.en,
        note.placement.en,
      ]),
    ]
      .join(" ")
      .toLowerCase();
    for (const term of [
      "agentic ai",
      "ai workflow",
      "n8n",
      "openclaw",
      "rag",
      "agi",
      "prompt engineering",
      "forward engineering",
      "agent loop",
    ]) {
      expect(copy).toContain(term);
    }
  });

  it("connects the path to official resources, search and recovery guidance", () => {
    const resourceIds = new Set(resources.map((resource) => resource.id));
    expect(aiSystemsResourceIds.every((id) => resourceIds.has(id))).toBe(true);
    expect(
      searchEntries.find((entry) => entry.id === "ai-systems-path")?.path,
    ).toBe("/roadmaps/ai-engineering/#ai-systems-path");
    expect(
      lostChoices.find((choice) => choice.id === "voices")?.destination,
    ).toEqual({
      en: "/resources/#industry-voices",
      bn: "/bn/resources/#industry-voices",
    });
  });

  it("carries the concept order into the detailed AI Engineering roadmap", () => {
    const roadmap = roadmaps.find((item) => item.careerId === "ai-engineering");
    expect(roadmap).toBeDefined();
    const copy = roadmap!.stages
      .flatMap((stage) => [
        stage.title.en,
        stage.intent.en,
        stage.enoughForNow.en,
        ...stage.topics.map((topic) => topic.en),
        ...stage.notYet.map((topic) => topic.en),
      ])
      .join(" ")
      .toLowerCase();
    for (const term of [
      "forward engineering",
      "rag",
      "n8n",
      "agent loop",
      "openclaw",
      "agi",
    ]) {
      expect(copy).toContain(term);
    }
  });
});
