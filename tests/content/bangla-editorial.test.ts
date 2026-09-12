import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

import { describe, expect, it } from "vitest";

const sourceFiles = [
  "src/components/pages/CompetitiveProgramming.astro",
  "src/components/pages/FeelBehindGuide.astro",
  "src/components/pages/FinalYearProject.astro",
  "src/components/pages/FirstSoftwareRole.astro",
  "src/components/pages/NewStudentGuide.astro",
  "src/components/common/SiteSearch.astro",
  "src/components/pages/SoftwareFoundations.astro",
  "src/components/pages/RoadmapDetail.astro",
  "src/data/homepage.ts",
  "src/data/first-software-role.ts",
  "src/data/final-year-project.ts",
].map((path) => readFileSync(resolve(path), "utf8"));

describe("Bangla editorial voice", () => {
  it("uses professional address consistently across site source", () => {
    const siteSources = readdirSync(resolve("src"), {
      recursive: true,
      encoding: "utf8",
    })
      .filter((path) => /\.(astro|ts)$/.test(path))
      .map((path) => readFileSync(resolve("src", path), "utf8"));
    for (const source of siteSources) {
      expect(source).not.toMatch(/তুমি|তোমার|তোমাকে|তোমরা|তোমাদের/);
    }
    expect(siteSources.join("\n")).toMatch(/আপনি|আপনার/);
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
