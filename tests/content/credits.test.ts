import { describe, expect, it } from "vitest";
import { siteConfig } from "../../src/config/site";
import { collaborators, inspirations } from "../../src/data/credits";

describe("project credits", () => {
  it("keeps the voluntary feedback form centralized", () => {
    expect(siteConfig.feedbackUrl).toBe("https://forms.gle/ZKyHbR9MHoebFbnWA");
  });

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
    expect(collaborators[0]!.role.en).toBe(
      "Idea, Creator and AI Agent Orchestrator, Reviewer and Quality Control",
    );
    expect(collaborators[0]!.name).toBe("Amjad Hossain");
    expect(collaborators[0]!.url).toBe(siteConfig.creatorUrl);
    expect(siteConfig.creatorUrl).toBe("https://amjadhossainrahat.github.io/");
    expect(collaborators[1]!.role.en).toBe(
      "Idea polishing, Requirement and Design analysis and finalizing",
    );
    expect(collaborators[2]!.role.en).toBe(
      "Implementation & Iteration · GPT-5.6 Sol (High) and GPT-6 Astra (High)",
    );
    expect(collaborators[2]!.contribution.en).toMatch(
      /GPT-5\.6 Sol.*GPT-6 Astra.*High reasoning/,
    );
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
