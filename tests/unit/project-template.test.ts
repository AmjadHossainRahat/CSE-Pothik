import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { renderProjectTemplate } from "../../src/lib/project-template";
import { projectTemplates } from "../../src/data/project/templates";
import { finalYearProject } from "../../src/data/final-year-project";
import { locales } from "../../src/types/content";

describe("build-time project toolkit", () => {
  it("uses extension-bearing routes that match in dev and static builds", () => {
    for (const locale of locales)
      expect(
        existsSync(
          resolve(`src/pages/downloads/final-year-project.${locale}.md.ts`),
        ),
      ).toBe(true);
    expect(existsSync(resolve("src/pages/downloads/[file].ts"))).toBe(false);
  });

  for (const locale of locales) {
    it(`renders every ${locale} field once, including honest run evidence`, () => {
      const text = renderProjectTemplate(locale);
      expect(text).toBe(renderProjectTemplate(locale));
      expect(text).toContain(
        locale === "en"
          ? "working template, not a completed report"
          : "কাজের template, completed report নয়",
      );
      for (const [index, template] of projectTemplates.entries()) {
        expect(
          text.split(`## ${index + 1}. ${template.title[locale]}`),
        ).toHaveLength(2);
        for (const field of template.fields)
          expect(text).toContain(field[locale]);
      }
      for (const stage of finalYearProject.stages)
        expect(text).toContain(stage.evidence[locale]);
      expect(text).toContain("PASS, FAIL, BLOCKED");
      expect(text).toContain("NOT RUN");
      expect(text).not.toMatch(/TODO|FIXME|Lorem ipsum|Coming soon|<script/i);
      expect(text.endsWith("\n")).toBe(true);
    });
  }
});
