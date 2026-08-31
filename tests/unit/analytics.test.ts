import { describe, expect, it } from "vitest";
import {
  analyticsEvents,
  shapeAnalyticsPayload,
} from "../../src/lib/analytics";

describe("analytics abstraction", () => {
  it("exposes every documented event exactly once", () => {
    expect(new Set(analyticsEvents).size).toBe(12);
    expect(analyticsEvents).toContain("learning_resource_clicked");
    expect(analyticsEvents).toContain("next_step_clicked");
  });

  it("keeps bounded allow-shaped scalar parameters", () => {
    expect(
      shapeAnalyticsPayload({
        career_id: " backend-engineering ",
        locale: "en",
        badKey: "discard",
        huge: "x".repeat(101),
      }),
    ).toEqual({ career_id: "backend-engineering", locale: "en" });
  });
});
