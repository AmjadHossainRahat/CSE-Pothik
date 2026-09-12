import { l } from "@/lib/localized";
import type { LocalizedText } from "@/types/content";

export interface AISystemsPathStep {
  id: string;
  title: LocalizedText;
  intent: LocalizedText;
  build: LocalizedText;
  terms: string[];
}

export interface AISystemsTermNote {
  term: string;
  meaning: LocalizedText;
  placement: LocalizedText;
}

/**
 * A concept-first bridge into the AI Engineering roadmap. Product names are
 * deliberately placed after the engineering capability they can implement.
 */
export const aiSystemsPathSteps: AISystemsPathStep[] = [
  {
    id: "frame",
    title: l("1 · Frame the work", "১ · আগে কাজটার সীমানা ঠিক করুন"),
    intent: l(
      "Define the user, outcome, inputs, constraints, risks and evidence of done before choosing a model.",
      "Model বাছার আগে user কে, ফল কী চাই, input কী, সীমাবদ্ধতা ও ঝুঁকি কোথায়, আর কোন evidence-এ কাজটাকে শেষ বলবে—এসব ঠিক করুন।",
    ),
    build: l(
      "Write a one-page specification and the smallest deterministic baseline. This is forward engineering: move from an explicit need toward design, implementation and tests.",
      "এক পাতার specification আর সবচেয়ে ছোট deterministic baseline লিখুন। এটাই forward engineering: পরিষ্কার প্রয়োজন থেকে design, implementation আর test-এর দিকে এগোনো।",
    ),
    terms: ["Forward engineering", "baseline", "success criteria"],
  },
  {
    id: "prompt",
    title: l(
      "2 · Make one model call testable",
      "২ · একটি model call-কে যাচাইযোগ্য করুন",
    ),
    intent: l(
      "Treat instructions, examples, context and output schema as an interface—not a collection of magic words.",
      "Instruction, example, context আর output schema-কে interface হিসেবে দেখুন—জাদুর মন্ত্রের collection হিসেবে নয়।",
    ),
    build: l(
      "Create labelled success, refusal and failure cases; compare prompt versions against all of them.",
      "Success, refusal আর failure-এর labelled case বানান; prompt-এর প্রতিটি version সব case দিয়ে মিলিয়ে দেখুন।",
    ),
    terms: ["Prompt engineering", "structured output", "evaluation set"],
  },
  {
    id: "ground",
    title: l(
      "3 · Ground with evidence",
      "৩ · Evidence দিয়ে উত্তরকে মাটিতে রাখুন",
    ),
    intent: l(
      "Use retrieval when the answer depends on owned, current or domain-specific material; retrieval and generation are separate systems to test.",
      "উত্তর যদি নিজের, হালনাগাদ বা domain-specific তথ্যের ওপর নির্ভর করে, retrieval ব্যবহার করুন। retrieval আর generation-কে আলাদা system হিসেবে পরীক্ষা করুন।",
    ),
    build: l(
      "Start with a keyword baseline, then add chunking, semantic retrieval, source display and refusal when evidence is missing.",
      "Keyword baseline দিয়ে শুরু করুন। এরপর chunking, semantic retrieval, source দেখানো এবং evidence না থাকলে উত্তর না দেওয়ার নিয়ম যোগ করুন।",
    ),
    terms: ["RAG", "embeddings", "retrieval", "citations"],
  },
  {
    id: "workflow",
    title: l(
      "4 · Orchestrate a visible workflow",
      "৪ · ধাপ দেখা যায় এমন workflow বানান",
    ),
    intent: l(
      "Keep known steps deterministic: trigger, validate, retrieve, call, transform, approve, act and log.",
      "যে ধাপগুলো আগে থেকেই জানা, সেগুলো deterministic রাখুন: trigger, validate, retrieve, call, transform, approve, act আর log।",
    ),
    build: l(
      "Implement the same small workflow in code or a visual tool such as n8n. Test retries, timeouts, duplicate events and partial failure.",
      "একই ছোট workflow code দিয়ে বা n8n-এর মতো visual tool-এ বানান। retry, timeout, duplicate event আর আংশিক failure পরীক্ষা করুন।",
    ),
    terms: ["AI workflow", "n8n", "orchestration", "idempotency"],
  },
  {
    id: "agent",
    title: l(
      "5 · Add bounded agency",
      "৫ · Agent-কে সীমার মধ্যে স্বাধীনতা দিন",
    ),
    intent: l(
      "Use an agent only when the model must choose the next step or tool under ambiguity; a fixed workflow is often enough.",
      "অনিশ্চিত অবস্থায় model-কে পরের ধাপ বা tool বাছতে হলেই agent ব্যবহার করুন; অনেক কাজেই fixed workflow যথেষ্ট।",
    ),
    build: l(
      "Build one loop: observe context → decide → call one narrow tool → inspect the result → stop, retry or escalate. Set a turn, time and cost budget.",
      "একটি loop বানান: context দেখুন → সিদ্ধান্ত নিন → ছোট পরিসরের একটি tool চালান → ফল যাচাই করুন → থামুন, আবার চেষ্টা করুন বা মানুষের কাছে পাঠান। turn, সময় আর খরচের সীমা ঠিক করে দিন।",
    ),
    terms: ["Agentic AI", "tool use", "agent loop", "human approval"],
  },
  {
    id: "operate",
    title: l("6 · Earn production trust", "৬ · Production-এর আস্থা অর্জন করুন"),
    intent: l(
      "Evaluate quality and safety across real distributions; protect data and actions; make failures observable and reversible.",
      "বাস্তব ধরনের data-তে quality আর safety যাচাই করুন; data ও action সুরক্ষিত রাখুন; failure যেন দেখা যায় এবং আগের অবস্থায় ফেরা যায়।",
    ),
    build: l(
      "Add traces, regression cases, permissions, guardrails, approval for consequential actions, staged rollout and rollback. Review cost and latency with quality.",
      "Trace, regression case, permission, guardrail, বড় প্রভাবের action-এ approval, ধাপে rollout আর rollback যোগ করুন। quality-এর সঙ্গে খরচ আর latency-ও দেখুন।",
    ),
    terms: ["Evals", "guardrails", "observability", "rollback"],
  },
];

export const aiSystemsTermNotes: AISystemsTermNote[] = [
  {
    term: "n8n",
    meaning: l(
      "A visual workflow-automation platform—not a substitute for understanding data, APIs, failures or permissions.",
      "চোখে দেখে workflow automation বানানোর platform—data, API, failure বা permission বোঝার বিকল্প নয়।",
    ),
    placement: l(
      "Use at step 4 after you can draw and test the workflow without it.",
      "Tool ছাড়াই workflow এঁকে বুঝিয়ে ও পরীক্ষা করে দেখাতে পারলে ধাপ ৪-এ এটি ব্যবহার করুন।",
    ),
  },
  {
    term: "OpenClaw",
    meaning: l(
      "A self-hosted gateway and runtime for persistent, tool-using agents. Its authority, credentials, channels and host access create a real security boundary.",
      "দীর্ঘ সময় চলা, tool-ব্যবহারকারী agent-এর self-hosted gateway ও runtime। এর authority, credential, channel আর host access মিলে সত্যিকারের security boundary তৈরি হয়।",
    ),
    placement: l(
      "Explore after steps 5–6, first with isolated data, minimal tools, sandboxing and explicit approvals.",
      "ধাপ ৫–৬ বোঝার পর isolated data, অল্প কয়েকটি tool, sandbox আর স্পষ্ট approval দিয়ে চেষ্টা করুন।",
    ),
  },
  {
    term: "AGI",
    meaning: l(
      "An evolving capability and research horizon, not an implementation layer, framework or beginner prerequisite.",
      "দ্রুত বদলাতে থাকা capability ও গবেষণার দিগন্ত; implementation layer, framework বা beginner-এর prerequisite নয়।",
    ),
    placement: l(
      "Track claims critically, but build today's measurable systems instead of making an AGI prediction your roadmap.",
      "দাবিগুলো প্রশ্ন করে দেখুন; AGI নিয়ে ভবিষ্যদ্বাণীকে roadmap না বানিয়ে আজ মাপা যায় এমন system তৈরি করুন।",
    ),
  },
  {
    term: "Multi-agent",
    meaning: l(
      "Several agents coordinating through manager or handoff patterns; it adds failure modes, context boundaries and operating cost.",
      "Manager বা handoff pattern দিয়ে কয়েকটি agent সমন্বয় করে; এর সঙ্গে failure mode, context boundary আর চালানোর খরচও বাড়ে।",
    ),
    placement: l(
      "Only after one bounded agent is measured and a specific coordination problem remains.",
      "সীমাবদ্ধ একটি agent মেপে দেখার পরও নির্দিষ্ট coordination problem থেকে গেলেই ব্যবহার করুন।",
    ),
  },
];

export const aiSystemsResourceIds = [
  "openai-building-agents",
  "google-rag-overview",
  "n8n-learning-path",
  "openclaw-agent-runtime",
] as const;
