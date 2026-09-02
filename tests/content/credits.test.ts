import { describe, expect, it } from "vitest";
import { siteConfig } from "../../src/config/site";
import { collaborators, inspirations } from "../../src/data/credits";

describe("project credits", () => {
  it("preserves every required inspiration link", () => {
    expect(inspirations.map(({ name, url }) => ({ name, url }))).toEqual([
      { name: "roadmap.sh", url: "https://roadmap.sh/" },
      {
        name: "Architect Prep",
        url: "https://mayurjp.github.io/architect-prep/",
      },
      {
        name: "Amirul Islam",
        url: "https://amirulislamalmamun.com/",
      },
    ]);
  });

  it("distinguishes the human orchestrator from the AI contributions", () => {
    expect(collaborators.map((person) => person.name)).toEqual([
      siteConfig.creator,
      "ChatGPT",
      "Codex",
    ]);
    expect(collaborators[0]!.role.en).toContain("Orchestrator");
    expect(collaborators[0]!.name).toBe("Amjad Hossain");
    expect(collaborators[0]!.url).toBe(siteConfig.creatorUrl);
    expect(siteConfig.creatorUrl).toBe("https://amjadhossainrahat.github.io/");
    expect(collaborators[1]!.role.en).toBe("Requirements & design");
    expect(collaborators[2]!.role.en).toBe("Implementation & iteration");
  });

  it("provides substantive English and Bangla copy for every contribution", () => {
    for (const item of [...inspirations, ...collaborators]) {
      expect(item.contribution.en.length).toBeGreaterThan(40);
      expect(item.contribution.bn).toMatch(/[\u0980-\u09ff]/);
    }
    for (const person of collaborators) {
      expect(person.role.en.trim()).not.toBe("");
      expect(person.role.bn).toMatch(/[\u0980-\u09ff]/);
    }
  });
});
