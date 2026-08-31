import { careers, l } from "@/data/careers";
import type { LocalizedText, Roadmap, RoadmapStage } from "@/types/content";

const commonStage = (
  id: string,
  title: LocalizedText,
  intent: LocalizedText,
  topics: LocalizedText[],
  enoughForNow: LocalizedText,
  practicalTask: LocalizedText,
  notYet: LocalizedText[],
  resourceIds: string[],
): RoadmapStage => ({
  id,
  title,
  intent,
  topics,
  enoughForNow,
  practicalTask,
  notYet,
  resourceIds,
});

export const roadmaps: Roadmap[] = careers.map((career) => {
  const [learn, practice, deeper, extra] = career.resourceIds;
  return {
    id: career.id,
    careerId: career.id,
    stages: [
      commonStage(
        "foundation",
        l("1 · Foundation", "১ · Foundation"),
        l(
          "Build the vocabulary and problem-solving habits the rest of the path assumes.",
          "পথের বাকিটা যে vocabulary আর problem-solving habit ধরে নেয়—সেটা বানাও।",
        ),
        career.foundation,
        l(
          "You can build small programs, use Git, debug basic failures and explain what your code does.",
          "ছোট program বানাতে, Git ব্যবহার করতে, basic failure debug আর নিজের code explain করতে পারো।",
        ),
        l(
          "Build one small command-line or browser program without copying an entire tutorial.",
          "পুরো tutorial copy না করে ছোট command-line বা browser program বানাও।",
        ),
        [
          l(
            "Do not specialize so early that every basic problem looks like a framework problem.",
            "এত তাড়াতাড়ি specialize কোরো না যেন basic problem-ও framework problem মনে হয়।",
          ),
        ],
        [learn].filter(Boolean) as string[],
      ),
      commonStage(
        "core",
        l("2 · Core", "২ · Core"),
        l(
          "Learn the concepts that make this career distinct from simply writing code.",
          "শুধু code লেখা থেকে এই career-কে আলাদা করে যে conceptগুলো—সেগুলো শেখো।",
        ),
        career.core,
        l(
          "You can explain the main trade-offs and solve a bounded problem without a recipe.",
          "Main trade-off explain আর recipe ছাড়া bounded problem solve করতে পারো।",
        ),
        l(
          "Rebuild a familiar exercise with one changed constraint and document your reasoning.",
          "একটি familiar exercise-এ constraint বদলে আবার build করো আর reasoning লিখে রাখো।",
        ),
        career.notYet.slice(0, 1),
        [practice].filter(Boolean) as string[],
      ),
      commonStage(
        "practical",
        l("3 · Practical", "৩ · Practical"),
        l(
          "Meet the inconvenient parts tutorials often skip: setup, failure, feedback and deployment.",
          "Tutorial যে inconvenient অংশ skip করে—setup, failure, feedback, deployment—সেগুলোর মুখোমুখি হও।",
        ),
        career.practical,
        l(
          "You have one small, working artifact and can demonstrate a failure you found and fixed.",
          "একটি ছোট working artifact আছে, আর যে failure পেয়ে fix করেছ সেটা দেখাতে পারো।",
        ),
        l(
          "Complete the linked career experiment, then improve it after one deliberate failure or review.",
          "Linked career experiment শেষ করে deliberate failure বা review-এর পরে improve করো।",
        ),
        career.notYet.slice(1, 2),
        [deeper ?? practice].filter(Boolean) as string[],
      ),
      commonStage(
        "professional",
        l("4 · Professional Engineering", "৪ · Professional Engineering"),
        l(
          "Make your work readable, testable, reviewable and safe for another person to depend on.",
          "তোমার কাজকে readable, testable, reviewable আর অন্যের depend করার মতো safe করো।",
        ),
        [
          l("Readable code and naming", "Readable code আর naming"),
          l("Testing and testability", "Testing আর testability"),
          l(
            "Code smells, refactoring and boundaries",
            "Code smell, refactoring আর boundary",
          ),
        ],
        l(
          "You can explain a design choice, review a peer’s change and refactor without changing behavior.",
          "Design choice explain, peer-এর change review আর behavior না বদলে refactor করতে পারো।",
        ),
        l(
          "Find one pain point in your project, add a characterization test, then refactor it.",
          "Project-এর একটি pain point খুঁজে characterization test যোগ করে refactor করো।",
        ),
        [
          l(
            "Do not memorize SOLID or design patterns as interview incantations.",
            "SOLID বা design pattern-কে interview-এর মন্ত্র হিসেবে মুখস্থ কোরো না।",
          ),
        ],
        ["refactoring-guru", "testing-js"],
      ),
      commonStage(
        "later",
        l("5 · Later / Specialization", "৫ · পরে / Specialization"),
        l(
          "Choose depth because a real project or question now demands it—not because a roadmap poster had empty boxes.",
          "Real project বা question দাবি করছে বলে depth বেছে নাও—roadmap poster-এ খালি box ছিল বলে নয়।",
        ),
        career.later,
        l(
          "Choose one depth area, state why it matters now and produce one evidence-backed result.",
          "একটি depth area বেছে কেন এখন দরকার বলো আর evidence-backed result বানাও।",
        ),
        l(
          "Write a one-page depth plan tied to a real system, research question or role requirement.",
          "Real system, research question বা role requirement-এর সঙ্গে যুক্ত one-page depth plan লেখো।",
        ),
        career.notYet.slice(2),
        [extra ?? deeper].filter(Boolean) as string[],
      ),
    ],
  };
});

export const roadmapById = new Map(
  roadmaps.map((roadmap) => [roadmap.id, roadmap]),
);
