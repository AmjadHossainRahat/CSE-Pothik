import { describe, expect, it } from "vitest";
import {
  careerPath,
  equivalentPath,
  localePath,
  roadmapPath,
} from "../../src/config/site";

describe("route helpers", () => {
  it("keeps English at the default route", () => {
    expect(localePath("en", "/careers/")).toBe("/careers/");
    expect(careerPath("en", "backend-engineering")).toBe(
      "/careers/backend-engineering/",
    );
  });

  it("creates semantically parallel Bangla routes", () => {
    expect(localePath("bn", "/careers/")).toBe("/bn/careers/");
    expect(roadmapPath("bn", "backend-engineering")).toBe(
      "/bn/roadmaps/backend-engineering/",
    );
  });

  it("maps an equivalent page instead of returning home", () => {
    expect(equivalentPath("/careers/cybersecurity/", "bn")).toBe(
      "/bn/careers/cybersecurity/",
    );
    expect(equivalentPath("/bn/try/devops-sre/", "en")).toBe(
      "/try/devops-sre/",
    );
  });
});
