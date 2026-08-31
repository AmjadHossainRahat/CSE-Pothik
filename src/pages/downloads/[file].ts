import type { APIRoute } from "astro";
import { finalYearProject as guide } from "@/data/final-year-project";
import { t } from "@/lib/i18n";
import type { Locale } from "@/types/content";

export function getStaticPaths() {
  return (["en", "bn"] as const).map((locale) => ({
    params: { file: `final-year-project.${locale}.md` },
    props: { locale },
  }));
}

export const GET: APIRoute = ({ props }) => {
  const locale = props.locale as Locale;
  const bn = locale === "bn";
  const intro = bn
    ? "এটি কাজের template, completed report নয়। প্রতিটি prompt-এর নিচে নিজের evidence লেখো; example-কে result হিসেবে দিও না। Department rubric আর supervisor-এর নির্দেশ আগে মানবে।"
    : "This is a working template, not a completed report. Write your own evidence under each prompt; do not present an example as a result. Your department rubric and supervisor’s instructions take priority.";
  const prompts = bn
    ? [
        "Project title, team, supervisor আর review date",
        "Problem/user, evidence, smallest outcome, scope আর out-of-scope",
        "Constraint: time, budget, tools, data permission, ethics/safety আর top risks",
        "Requirement ID → scenario → measurable acceptance criterion → design/implementation → test/result link",
        "Decision record: context, options, choice, consequences আর reviewer",
        "Test report: release/commit, environment, method, expected/actual, pass/fail, evidence আর remaining limits",
        "Reproduction: clean setup, tool versions, safe data, commands, actual peer result আর repair",
        "Release/handover: tag, configuration without secrets, backup/rollback, known issue আর owner",
        "Contribution, third-party licenses/citations আর permitted AI/tool use",
      ]
    : [
        "Project title, team, supervisor and review date",
        "Problem/user, evidence, smallest outcome, scope and out-of-scope",
        "Constraints: time, budget, tools, data permission, ethics/safety and top risks",
        "Requirement ID → scenario → measurable acceptance criterion → design/implementation → test/result link",
        "Decision record: context, options, choice, consequences and reviewer",
        "Test report: release/commit, environment, method, expected/actual, pass/fail, evidence and remaining limits",
        "Reproduction: clean setup, tool versions, safe data, commands, actual peer result and repairs",
        "Release/handover: tag, configuration without secrets, backup/rollback, known issues and owner",
        "Contribution, third-party licenses/citations and permitted AI/tool use",
      ];
  const content = [
    `# ${t(guide.title, locale)}`,
    intro,
    "## " + (bn ? "Evidence লেখার prompt" : "Evidence prompts"),
    ...prompts.map(
      (prompt, i) =>
        `### ${i + 1}. ${prompt}\n\n${bn ? "এখানে নিজের evidence ও link লেখো।" : "Write your evidence and links here."}`,
    ),
    "## " + (bn ? "Readiness review" : "Readiness review"),
    ...guide.releaseChecks.map((check) => `- ${t(check, locale)}`),
    "## " + (bn ? "Stage অনুযায়ী quality bar" : "Stage quality bar"),
    ...guide.stages.map(
      (stage) =>
        `### ${t(stage.title, locale)}\n\n${t(stage.evidence, locale)}\n\n${t(stage.notYet, locale)}`,
    ),
    "CSE Compass · https://github.com/AmjadHossainRahat/CSE-Compass · MIT",
  ].join("\n\n");
  return new Response(content, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
};
