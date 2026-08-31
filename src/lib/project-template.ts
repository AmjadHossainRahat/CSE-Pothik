import { finalYearProject as guide } from "@/data/final-year-project";
import { projectTemplates } from "@/data/project/templates";
import { t } from "@/lib/i18n";
import type { Locale } from "@/types/content";

/** Shared typed prompts generate the readable download at build time only. */
export function renderProjectTemplate(locale: Locale): string {
  const bn = locale === "bn";
  return (
    [
      `# ${t(guide.title, locale)}`,
      bn
        ? "এটি কাজের template, completed report নয়। প্রতিটি field-এর নিচে নিজের evidence লেখো; example-কে result হিসেবে দিও না। Department rubric আর supervisor-এর নির্দেশ আগে মানবে। Private data বা secret এখানে দিও না। প্রয়োজনমতো section আলাদা করে issue, PR বা team document-এ নাও।"
        : "This is a working template, not a completed report. Fill each field with your own evidence; do not present an example as a result. Your department rubric and supervisor’s instructions take priority. Keep private data and secrets out. Copy individual sections into issues, PRs or team documents as needed.",
      ...projectTemplates.map((template, index) =>
        [
          `## ${index + 1}. ${t(template.title, locale)}`,
          t(template.use, locale),
          ...template.fields.map(
            (field) =>
              `- ${t(field, locale)}\n  ${bn ? "উত্তর / evidence link:" : "Response / evidence link:"}`,
          ),
        ].join("\n\n"),
      ),
      "## " + (bn ? "Readiness review" : "Readiness review"),
      ...guide.releaseChecks.map((check) => `- ${t(check, locale)}`),
      "## " + (bn ? "Stage অনুযায়ী quality bar" : "Stage quality bar"),
      ...guide.stages.map(
        (stage) =>
          `### ${t(stage.title, locale)}\n\n${t(stage.evidence, locale)}\n\n${t(stage.notYet, locale)}`,
      ),
      "CSE Compass · https://github.com/AmjadHossainRahat/CSE-Compass · MIT",
    ].join("\n\n") + "\n"
  );
}
