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
    title: l("1 · Frame the work", "১ · কাজটা frame করো"),
    intent: l(
      "Define the user, outcome, inputs, constraints, risks and evidence of done before choosing a model.",
      "Model বাছার আগে user, outcome, input, constraint, risk আর done-এর evidence define করো।",
    ),
    build: l(
      "Write a one-page specification and the smallest deterministic baseline. This is forward engineering: move from an explicit need toward design, implementation and tests.",
      "One-page specification আর smallest deterministic baseline লেখো। এটিই forward engineering: explicit need থেকে design, implementation আর test-এর দিকে যাওয়া।",
    ),
    terms: ["Forward engineering", "baseline", "success criteria"],
  },
  {
    id: "prompt",
    title: l(
      "2 · Make one model call testable",
      "২ · একটি model call testable করো",
    ),
    intent: l(
      "Treat instructions, examples, context and output schema as an interface—not a collection of magic words.",
      "Instruction, example, context আর output schema-কে interface হিসেবে ধরো—magic word-এর collection হিসেবে নয়।",
    ),
    build: l(
      "Create labelled success, refusal and failure cases; compare prompt versions against all of them.",
      "Labelled success, refusal আর failure case বানিয়ে প্রতিটি prompt version সব case-এর বিরুদ্ধে compare করো।",
    ),
    terms: ["Prompt engineering", "structured output", "evaluation set"],
  },
  {
    id: "ground",
    title: l("3 · Ground with evidence", "৩ · Evidence দিয়ে ground করো"),
    intent: l(
      "Use retrieval when the answer depends on owned, current or domain-specific material; retrieval and generation are separate systems to test.",
      "Answer নিজের, current বা domain-specific material-এর ওপর নির্ভর করলে retrieval ব্যবহার করো; retrieval আর generation আলাদা system হিসেবে test করো।",
    ),
    build: l(
      "Start with a keyword baseline, then add chunking, semantic retrieval, source display and refusal when evidence is missing.",
      "Keyword baseline দিয়ে শুরু করে chunking, semantic retrieval, source display আর evidence না থাকলে refusal যোগ করো।",
    ),
    terms: ["RAG", "embeddings", "retrieval", "citations"],
  },
  {
    id: "workflow",
    title: l(
      "4 · Orchestrate a visible workflow",
      "৪ · Visible workflow orchestrate করো",
    ),
    intent: l(
      "Keep known steps deterministic: trigger, validate, retrieve, call, transform, approve, act and log.",
      "Known step deterministic রাখো: trigger, validate, retrieve, call, transform, approve, act আর log।",
    ),
    build: l(
      "Implement the same small workflow in code or a visual tool such as n8n. Test retries, timeouts, duplicate events and partial failure.",
      "একই small workflow code বা n8n-এর মতো visual tool-এ implement করো। Retry, timeout, duplicate event আর partial failure test করো।",
    ),
    terms: ["AI workflow", "n8n", "orchestration", "idempotency"],
  },
  {
    id: "agent",
    title: l("5 · Add bounded agency", "৫ · Bounded agency যোগ করো"),
    intent: l(
      "Use an agent only when the model must choose the next step or tool under ambiguity; a fixed workflow is often enough.",
      "Ambiguity-তে model-কে next step বা tool বাছতে হলেই agent ব্যবহার করো; fixed workflow-ই অনেক সময় যথেষ্ট।",
    ),
    build: l(
      "Build one loop: observe context → decide → call one narrow tool → inspect the result → stop, retry or escalate. Set a turn, time and cost budget.",
      "একটি loop বানাও: context দেখো → decide → একটি narrow tool call → result inspect → stop, retry বা escalate। Turn, time আর cost budget set করো।",
    ),
    terms: ["Agentic AI", "tool use", "agent loop", "human approval"],
  },
  {
    id: "operate",
    title: l("6 · Earn production trust", "৬ · Production trust অর্জন করো"),
    intent: l(
      "Evaluate quality and safety across real distributions; protect data and actions; make failures observable and reversible.",
      "Real distribution-এ quality আর safety evaluate করো; data/action protect করো; failure observable আর reversible রাখো।",
    ),
    build: l(
      "Add traces, regression cases, permissions, guardrails, approval for consequential actions, staged rollout and rollback. Review cost and latency with quality.",
      "Trace, regression case, permission, guardrail, consequential action-এর approval, staged rollout আর rollback যোগ করো। Quality-এর সঙ্গে cost আর latency review করো।",
    ),
    terms: ["Evals", "guardrails", "observability", "rollback"],
  },
];

export const aiSystemsTermNotes: AISystemsTermNote[] = [
  {
    term: "n8n",
    meaning: l(
      "A visual workflow-automation platform—not a substitute for understanding data, APIs, failures or permissions.",
      "Visual workflow-automation platform—data, API, failure বা permission বোঝার বিকল্প নয়।",
    ),
    placement: l(
      "Use at step 4 after you can draw and test the workflow without it.",
      "Tool ছাড়া workflow আঁকতে আর test করতে পারার পর step ৪-এ ব্যবহার করো।",
    ),
  },
  {
    term: "OpenClaw",
    meaning: l(
      "A self-hosted gateway and runtime for persistent, tool-using agents. Its authority, credentials, channels and host access create a real security boundary.",
      "Persistent, tool-using agent-এর self-hosted gateway ও runtime। এর authority, credential, channel আর host access বাস্তব security boundary তৈরি করে।",
    ),
    placement: l(
      "Explore after steps 5–6, first with isolated data, minimal tools, sandboxing and explicit approvals.",
      "Step ৫–৬-এর পরে isolated data, minimum tool, sandbox আর explicit approval দিয়ে explore করো।",
    ),
  },
  {
    term: "AGI",
    meaning: l(
      "An evolving capability and research horizon, not an implementation layer, framework or beginner prerequisite.",
      "Evolving capability ও research horizon; implementation layer, framework বা beginner prerequisite নয়।",
    ),
    placement: l(
      "Track claims critically, but build today's measurable systems instead of making an AGI prediction your roadmap.",
      "Claim critically follow করো, কিন্তু AGI prediction-কে roadmap না বানিয়ে আজকের measurable system build করো।",
    ),
  },
  {
    term: "Multi-agent",
    meaning: l(
      "Several agents coordinating through manager or handoff patterns; it adds failure modes, context boundaries and operating cost.",
      "Manager বা handoff pattern-এ কয়েকটি agent coordinate করে; এতে failure mode, context boundary আর operating cost বাড়ে।",
    ),
    placement: l(
      "Only after one bounded agent is measured and a specific coordination problem remains.",
      "একটি bounded agent measure করার পরেও specific coordination problem থাকলেই ব্যবহার করো।",
    ),
  },
];

export const aiSystemsResourceIds = [
  "openai-building-agents",
  "google-rag-overview",
  "n8n-learning-path",
  "openclaw-agent-runtime",
] as const;
