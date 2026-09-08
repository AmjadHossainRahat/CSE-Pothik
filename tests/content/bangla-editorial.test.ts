import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { describe, expect, it } from "vitest";

const sourceFiles = [
  "src/components/pages/CompetitiveProgramming.astro",
  "src/components/pages/FeelBehindGuide.astro",
  "src/components/pages/FinalYearProject.astro",
  "src/components/pages/FirstSoftwareRole.astro",
  "src/components/pages/NewStudentGuide.astro",
  "src/components/pages/SearchPage.astro",
  "src/components/pages/SoftwareFoundations.astro",
  "src/components/pages/RoadmapDetail.astro",
  "src/data/homepage.ts",
  "src/data/first-software-role.ts",
  "src/data/final-year-project.ts",
].map((path) => readFileSync(resolve(path), "utf8"));

describe("Bangla editorial voice", () => {
  it("does not fall back to formal pronouns in conversational mentoring copy", () => {
    for (const source of sourceFiles) {
      expect(source).not.toMatch(/আপনি|আপনার/);
    }
  });

  it("does not reuse known English-only labels for the Bangla branch", () => {
    const joined = sourceFiles.join("\n");
    const mechanicalBranches = [
      'bn ? "Guidance"',
      'bn ? "Reality check"',
      'bn ? "Next step"',
      'bn ? "What not to do"',
      'bn ? "What not to learn yet"',
      'bn ? "Career guide"',
      'bn ? "Career experiment"',
      'bn ? "Selected resources"',
      'bn ? "Submission readiness"',
      'bn ? "Mentor note"',
    ];

    for (const phrase of mechanicalBranches) {
      expect(joined).not.toContain(phrase);
    }
  });
});
