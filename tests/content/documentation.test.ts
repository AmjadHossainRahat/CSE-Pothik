import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

import { describe, expect, it } from "vitest";

const documentation = [
  "README.md",
  "docs/product/README.md",
  "docs/engineering/README.md",
  "docs/content/README.md",
  "docs/community/README.md",
];

describe("documentation navigation", () => {
  it("keeps the root README concise and indexed", () => {
    const root = readFileSync(resolve("README.md"), "utf8");
    expect(root).toContain("## Contents");
    expect(root.split(/\r?\n/).length).toBeLessThan(150);
    for (const file of documentation.slice(1)) expect(root).toContain(file);
  });

  it("keeps local links in the documentation map resolvable", () => {
    for (const file of documentation) {
      const absoluteFile = resolve(file);
      const markdown = readFileSync(absoluteFile, "utf8");
      const links = [...markdown.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map(
        (match) => match[1]!,
      );
      for (const link of links) {
        if (/^(?:https?:|mailto:|#)/.test(link)) continue;
        const target = decodeURIComponent(link.split("#", 1)[0]!);
        expect(
          existsSync(resolve(dirname(absoluteFile), target)),
          `${file} links to missing ${target}`,
        ).toBe(true);
      }
    }
  });
});
