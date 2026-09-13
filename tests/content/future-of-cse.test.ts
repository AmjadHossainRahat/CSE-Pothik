import { describe, expect, it } from "vitest";
import {
  futureCapabilities,
  futureDescription,
  futureEvidence,
  futureGenerationPrompt,
  futureNarrator,
  futurePath,
  futureReviewDate,
  futureScenarios,
  futureTitle,
} from "../../src/data/future-of-cse";
import {
  isNavigationItemActive,
  navigationGroups,
} from "../../src/data/navigation";
import { searchEntries } from "../../src/data/search";

describe("future-of-CSE editorial", () => {
  it("preserves dated bilingual evidence and limitations", () => {
    expect(futureReviewDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(futureNarrator).toBe("GPT-6 Astra (High)");
    expect(new Set(futureEvidence.map((source) => source.id)).size).toBe(4);
    const fields = [
      futureTitle,
      futureDescription,
      ...futureEvidence.flatMap((source) => [
        source.title,
        source.finding,
        source.limit,
      ]),
      ...futureScenarios.flatMap((item) => [
        item.title,
        item.text,
        item.signal,
      ]),
      ...futureCapabilities.flatMap((item) => [item.title, item.text]),
    ];
    for (const field of fields) {
      expect(field.en.trim().length).toBeGreaterThan(8);
      expect(field.bn).toMatch(/[\u0980-\u09ff]/);
    }
    for (const source of futureEvidence) {
      expect(new URL(source.url).protocol).toBe("https:");
      expect(source.provider.length).toBeGreaterThan(3);
      expect(source.date).toMatch(/202[56]/);
    }
    expect(
      futureEvidence.find((source) => source.id === "stanford-entry")?.limit.en,
    ).toContain("not a 19% layoff rate");
    expect(
      futureEvidence.find((source) => source.id === "bls-outlook")?.finding.en,
    ).toContain("2025–2035");
    expect(futureScenarios.map((item) => item.id)).toEqual([
      "expansion",
      "compression",
      "deeper-automation",
    ]);
    expect(futureGenerationPrompt).toContain(
      "Runtime (configure before running): GPT-6 Astra with High reasoning.",
    );
    expect(futureGenerationPrompt).toContain(
      "Create the complete bilingual editorial for /future-of-cse/",
    );
    expect(futureGenerationPrompt).toContain("Evidence rules:");
    expect(futureGenerationPrompt).toContain("Required structure:");
    expect(futureGenerationPrompt).toContain("Writing contract:");
    expect(futureGenerationPrompt).toContain(
      "Output only the publish-ready article",
    );
    expect(futureGenerationPrompt).toContain("Do not reveal chain-of-thought");
  });

  it("is discoverable with one active Future destination and bilingual search", () => {
    const items = navigationGroups.flatMap((group) => group.items);
    expect(
      items
        .filter((item) => isNavigationItemActive(futurePath, item))
        .map((item) => item.id),
    ).toEqual(["future-of-cse"]);
    expect(
      navigationGroups
        .find((group) => group.id === "future")
        ?.items.some((item) => item.path === futurePath),
    ).toBe(true);
    const entry = searchEntries.find((item) => item.id === "future-of-cse");
    expect(entry?.path).toBe(futurePath);
    expect(entry?.title).toEqual(futureTitle);
    expect(entry?.keywords.bn).toContain("ভবিষ্যৎ");
  });
});
