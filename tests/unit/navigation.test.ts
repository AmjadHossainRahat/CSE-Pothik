import { describe, expect, it } from "vitest";
import { getLostChoice, isKnownLostChoice } from "../../src/lib/navigation";

describe("lost navigation", () => {
  it("returns deterministic routes", () => {
    expect(getLostChoice("ai")?.destination.en).toBe("/ai/");
    expect(getLostChoice("behind")?.destination.bn).toBe(
      "/bn/guidance/feel-behind/",
    );
  });

  it("rejects invented outcomes", () => {
    expect(isKnownLostChoice("perfect-career-score")).toBe(false);
  });
});
