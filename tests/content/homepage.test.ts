import { describe, expect, it } from "vitest";
import {
  aiEraDecisions,
  aiEraMessage,
  aiEraScenarioPaths,
  homepageAiSourceIds,
  homepageEntries,
  homepageIntro,
  sitePurpose,
} from "../../src/data/homepage";
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
      /popularity.*earning potential.*abroad/,
    );
    expect(homepageIntro.reassurance.en).toMatch(
      /orientation.*semesters.*not missed your chance/,
    );
    expect(homepageIntro.outcome.en).toMatch(
      /understand the options.*real work.*useful next step/i,
    );
  });

  it("states the origin, recovery principle, purpose and goal without narrowing CSE to a few roles", () => {
    for (const text of Object.values(sitePurpose)) {
      expect(text.en.trim().length).toBeGreaterThan(60);
      expect(text.bn).toMatch(/[\u0980-\u09ff]/);
    }
    expect(sitePurpose.drift.en).toMatch(
      /social-media groups.*Software engineering.*QA.*competitive programming.*research/,
    );
    expect(sitePurpose.drift.en).toContain("not the whole landscape");
    expect(sitePurpose.recovery.en).toMatch(
      /not proof.*clear map early.*practical recovery/,
    );
    expect(sitePurpose.purpose.en).toMatch(/orientation.*calm route back/);
    expect(sitePurpose.goal.en).toMatch(
      /work behind the titles.*small experiments.*durable foundations/,
    );
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

  it("preserves the detailed situations and adds a first-role transition", () => {
    expect(studentSituations.map((situation) => situation.id)).toEqual([
      "new",
      "unknown",
      "directionless",
      "ai-worry",
      "target",
      "behind",
      "first-role",
    ]);
    for (const situation of studentSituations)
      expect(situation.destination.bn).toBe(`/bn${situation.destination.en}`);
  });

  it("explains why fundamentals and accountable judgment matter with AI", () => {
    for (const text of Object.values(aiEraMessage)) {
      expect(text.en.trim().length).toBeGreaterThan(15);
      expect(text.bn).toMatch(/[\u0980-\u09ff]/);
    }
    expect(aiEraMessage.introduction.en).toMatch(
      /core principles.*analytical problem-solving.*creativity.*judgment/,
    );
    expect(aiEraMessage.takeaway.en).toMatch(
      /context.*mistakes.*trade-offs.*tech lead/,
    );
    expect(aiEraDecisions.map((step) => step.id)).toEqual([
      "frame",
      "verify",
      "own",
    ]);
    expect(aiEraScenarioPaths.map((path) => path.id)).toEqual([
      "thin-context",
      "rich-context",
      "strong-engineer",
    ]);
    expect(homepageAiSourceIds).toEqual([
      "dora-ai-software-2025",
      "nist-ai-devsecops-oversight",
    ]);
  });
});
