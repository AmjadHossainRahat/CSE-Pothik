import { describe, expect, it } from "vitest";
import {
  featuredIndustryVoiceIds,
  industryVoiceById,
  industryVoices,
  industryVoiceStages,
} from "../../src/data/industry-voices";
import { searchEntries } from "../../src/data/search";

const expectedVideoIds = [
  "R0ePgGNvHG0",
  "ckeyZUyRF3s",
  "Cf3W5xAFtfU",
  "OTQqi17j5Qg",
  "oo6aI0HC0OQ",
  "70g-CwcXsbE",
  "PCqCy94S5nI",
  "cGeqbDG1ulg",
  "GuDBrngBCdY",
];

describe("curated Bangladesh technology voices", () => {
  it("preserves all nine supplied videos in the deliberate viewing order", () => {
    expect(industryVoices).toHaveLength(9);
    expect(industryVoices.map((voice) => voice.position)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
    expect(
      industryVoices.map(
        (voice) => new URL(voice.url).searchParams.get("v") as string,
      ),
    ).toEqual(expectedVideoIds);
  });

  it("keeps complete bilingual editorial context without inventing verdicts", () => {
    expect(industryVoiceStages.map((stage) => stage.id)).toEqual([
      "orient",
      "strengthen",
      "navigate",
    ]);
    for (const voice of industryVoices) {
      expect(voice.title.en.trim().length).toBeGreaterThan(10);
      expect(voice.title.bn).toMatch(/[\u0980-\u09ff]/);
      expect(voice.focus.en.trim().length).toBeGreaterThan(30);
      expect(voice.focus.bn).toMatch(/[\u0980-\u09ff]/);
      expect(voice.lastReviewed).toBe("2026-09-07");
      expect(industryVoiceById.get(voice.id)).toBe(voice);
    }
  });

  it("features two starting perspectives and makes every video searchable", () => {
    expect(featuredIndustryVoiceIds).toEqual([
      "jhankar-cse-decision-2026",
      "jhankar-why-learn-programming-with-ai",
    ]);
    for (const voice of industryVoices) {
      expect(
        searchEntries.some(
          (entry) =>
            entry.id === `industry-voice-${voice.id}` &&
            entry.path === `/resources/#industry-voice-stage-${voice.stageId}`,
        ),
      ).toBe(true);
    }
  });
});
