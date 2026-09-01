import { careers, l } from "@/data/careers";
import type { LocalizedText, Roadmap, RoadmapStage } from "@/types/content";
import { refineInfrastructureRoadmap } from "@/data/infrastructure-roadmaps";
import { refineSpecialistRoadmap } from "@/data/specialist-roadmaps";

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
  const roadmap: Roadmap = {
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
  if (career.id === "mobile-app-development") {
    roadmap.stages[0]!.resourceIds = [
      "android-compose",
      "apple-swift",
      "flutter",
      "react-native",
    ];
    roadmap.stages[0]!.practicalTask = l(
      "Choose one platform that your available tooling supports. Build an editable list with in-memory state before adding storage.",
      "হাতের tooling যে platform সমর্থন করে সেটি বেছে নাও। Storage-এর আগে in-memory state-সহ editable list বানাও।",
    );
    roadmap.stages[0]!.enoughForNow = l(
      "You can run the app, change a field, trace its state and debug an error in your chosen language.",
      "App চালাতে, field বদলাতে, state trace আর নিজের language-এ error debug করতে পারো।",
    );
    roadmap.stages[1]!.resourceIds = [
      "android-compose",
      "apple-swift",
      "flutter",
      "react-native",
    ];
    roadmap.stages[1]!.practicalTask = l(
      "Follow only your chosen platform reference. Add navigation and local persistence, then test restart, back navigation and missing data.",
      "শুধু বাছা platform-এর reference অনুসরণ করো। Navigation আর local persistence দিয়ে restart, back navigation আর missing data test করো।",
    );
    roadmap.stages[2]!.resourceIds = [
      "android-compose",
      "apple-swift",
      "flutter",
      "react-native",
    ];
    roadmap.stages[3]!.topics = [
      l(
        "Separate UI state from data access and test the boundary.",
        "UI state আর data access আলাদা করে boundary test করো।",
      ),
      l(
        "Permission minimization, accessible controls and crash diagnostics.",
        "কম permission, accessible control আর crash diagnostics।",
      ),
      l(
        "Device checks, release notes and rollback planning.",
        "Device check, release note আর rollback planning।",
      ),
    ];
    roadmap.stages[3]!.resourceIds = [
      "android-compose",
      "apple-swift",
      "flutter",
      "react-native",
    ];
    roadmap.stages[3]!.practicalTask = l(
      "Keep using your selected platform docs. Write a release checklist, test an interrupted save and record how to recover without losing user data.",
      "বাছা platform-এর docs ব্যবহার চালাও। Release checklist লেখো, interrupted save test করো, user data না হারিয়ে recovery লিখে রাখো।",
    );
    roadmap.stages[4]!.resourceIds = [
      "android-compose",
      "apple-swift",
      "flutter",
      "react-native",
    ];
  }
  if (career.id === "ux-ui-engineering") {
    roadmap.stages[0]!.practicalTask = l(
      "Describe one user task, sketch its flow and implement a semantic HTML form without a component library.",
      "একটি user task লিখে flow sketch করো; component library ছাড়া semantic HTML form বানাও।",
    );
    roadmap.stages[0]!.enoughForNow = l(
      "You can explain the task, build labeled controls and navigate them with a keyboard.",
      "Task বোঝাতে, labeled control বানাতে আর keyboard দিয়ে ব্যবহার করতে পারো।",
    );
    roadmap.stages[1]!.practicalTask = l(
      "Compare two low-fidelity flows, observe a consenting peer and distinguish observation from assumption. Implement the better-supported choice.",
      "দুটি low-fidelity flow compare করে সম্মতি দেওয়া peer-কে দেখো; observation আর assumption আলাদা করো। Evidence বেশি এমন choice implement করো।",
    );
    roadmap.stages[3]!.topics = [
      l(
        "Component contracts, design tokens and documented interaction states.",
        "Component contract, design token আর documented interaction state।",
      ),
      l(
        "Keyboard, assistive-technology and responsive regression checks.",
        "Keyboard, assistive technology আর responsive regression check।",
      ),
      l(
        "Ethical research notes, design decisions and implementation review.",
        "Ethical research note, design decision আর implementation review।",
      ),
    ];
    roadmap.stages[3]!.resourceIds = ["web-a11y", "gov-design-system"];
    roadmap.stages[3]!.practicalTask = l(
      "Extract one tested form component, document its states and have another person integrate it. Fix one misunderstanding and retest keyboard behavior.",
      "একটি tested form component আলাদা করে state document করো; অন্য কাউকে integrate করতে দাও। একটি ভুল বোঝাবুঝি ঠিক করে keyboard behavior আবার test করো।",
    );
    roadmap.stages[3]!.enoughForNow = l(
      "Another person can reuse the component and explain its behavior; you can show usability evidence and accessibility checks with their limitations.",
      "অন্য কেউ component reuse আর behavior explain করতে পারে; সীমাবদ্ধতা-সহ usability evidence আর accessibility check দেখাতে পারো।",
    );
  }
  return refineSpecialistRoadmap(refineInfrastructureRoadmap(roadmap));
});

export const roadmapById = new Map(
  roadmaps.map((roadmap) => [roadmap.id, roadmap]),
);
