import { describe, expect, it } from "vitest";
import { homepageEntries, homepageIntro } from "../../src/data/homepage";
import { studentSituations } from "../../src/data/situations";

describe("purpose-first homepage", () => {
  it("explains the audience, free guidance, practical outcome and next action in both languages", () => {
    for (const text of Object.values(homepageIntro)) {
      expect(text.en.trim().length).toBeGreaterThan(5);
      expect(text.bn).toMatch(/[\u0980-\u09ff]/);
    }
    expect(homepageIntro.eyebrow.en).toBe(
      "Free career guidance for CSE students",
    );
    expect(homepageIntro.title.en).toBe("You got into CSE.");
    expect(homepageIntro.emphasis.en).toBe("Now what?");
    expect(homepageIntro.description.en).toMatch(
      /careers.*real work.*learning paths/,
    );
    expect(homepageIntro.outcome.en).toContain("practical");
  });

  it("routes the three intentions directly to distinct existing guidance pages", () => {
    expect(homepageEntries.map((entry) => entry.id)).toEqual([
      "start",
      "explore",
      "prepare",
    ]);
    expect(homepageEntries.map((entry) => entry.destination)).toEqual([
      "/guidance/new-cse-student/",
      "/careers/",
      "/goals/",
    ]);
    for (const entry of homepageEntries) {
      expect(entry.label.en.length).toBeGreaterThan(20);
      expect(entry.label.bn).toMatch(/[\u0980-\u09ff]/);
      expect(entry.note.en.length).toBeGreaterThan(30);
      expect(entry.note.bn).toMatch(/[\u0980-\u09ff]/);
      expect(entry.analyticsDestination).toMatch(/^[a-z-]+$/);
    }
  });

  it("preserves all six detailed situations and equivalent destinations", () => {
    expect(studentSituations.map((situation) => situation.id)).toEqual([
      "new",
      "unknown",
      "directionless",
      "ai-worry",
      "target",
      "behind",
    ]);
    for (const situation of studentSituations)
      expect(situation.destination.bn).toBe(`/bn${situation.destination.en}`);
  });
});
