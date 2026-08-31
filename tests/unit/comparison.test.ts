import { describe, expect, it } from "vitest";
import {
  isValidComparison,
  normalizeComparison,
  parseComparison,
} from "../../src/lib/comparison";

describe("comparison selection", () => {
  it("deduplicates and caps a selection at three careers", () => {
    expect(
      normalizeComparison([
        "backend-engineering",
        "backend-engineering",
        "cybersecurity",
        "machine-learning",
        "devops-sre",
      ]),
    ).toEqual(["backend-engineering", "cybersecurity", "machine-learning"]);
  });

  it("drops unknown IDs and parses shareable values", () => {
    expect(
      parseComparison("backend-engineering,unknown,cybersecurity"),
    ).toEqual(["backend-engineering", "cybersecurity"]);
  });

  it("requires two to three distinct known careers", () => {
    expect(isValidComparison(["backend-engineering", "cybersecurity"])).toBe(
      true,
    );
    expect(isValidComparison(["backend-engineering"])).toBe(false);
  });
});
