import { describe, expect, it } from "vitest";
import { isTheme, resolveTheme } from "../../src/lib/theme";

describe("theme helpers", () => {
  it("accepts only supported values", () => {
    expect(isTheme("light")).toBe(true);
    expect(isTheme("dark")).toBe(true);
    expect(isTheme("system")).toBe(false);
  });

  it("defaults to light", () => {
    expect(resolveTheme(undefined)).toBe("light");
    expect(resolveTheme("dark")).toBe("dark");
  });
});
