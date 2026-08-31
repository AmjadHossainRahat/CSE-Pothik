import { describe, expect, it } from "vitest";
import { getCareerResources } from "../../src/lib/content";

describe("content transformations", () => {
  it("resolves ordered career resources", () => {
    const resources = getCareerResources("backend-engineering");
    expect(resources[0]?.id).toBe("node-learn");
    expect(resources.every((resource) => resource.isFree)).toBe(true);
  });
});
