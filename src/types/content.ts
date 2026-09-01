export const locales = ["en", "bn"] as const;
export type Locale = (typeof locales)[number];

export const exposureLevels = ["higher", "medium", "lower"] as const;
export type ExposureLevel = (typeof exposureLevels)[number];

export const careerIds = [
  "backend-engineering",
  "frontend-engineering",
  "data-engineering",
  "machine-learning",
  "cybersecurity",
  "devops-sre",
  "embedded-systems",
  "systems-research",
  "technical-product-leadership",
  "mobile-app-development",
  "ux-ui-engineering",
  "network-engineering",
  "hardware-engineering",
  "software-quality-assurance",
  "data-analytics-bi",
  "ai-engineering",
  "application-security",
] as const;
export type CareerId = (typeof careerIds)[number];

export const familyIds = [
  "build-software",
  "work-with-data",
  "build-intelligence",
  "protect-systems",
  "run-systems",
  "close-to-hardware",
  "computing-deeply",
  "technology-people",
] as const;
export type FamilyId = (typeof familyIds)[number];

export interface LocalizedText {
  en: string;
  bn: string;
}

export interface LearningResource {
  id: string;
  title: string;
  provider: string;
  url: string;
  type:
    | "official-docs"
    | "course"
    | "university"
    | "lab"
    | "book"
    | "practice"
    | "video"
    | "article";
  isFree: true;
  recommendedScope: LocalizedText;
  whyRecommended: LocalizedText;
  lastReviewed: string;
  language: "en" | "bn" | "both";
}

export interface CareerDimensions {
  coding: 1 | 2 | 3;
  mathematics: 1 | 2 | 3;
  systems: 1 | 2 | 3;
  investigation: 1 | 2 | 3;
  creativity: 1 | 2 | 3;
  communication: 1 | 2 | 3;
  production: 1 | 2 | 3;
}

export interface AITaskExposure {
  task: LocalizedText;
  exposure: ExposureLevel;
  explanation: LocalizedText;
  studentResponse: LocalizedText;
}

export interface DaySegment {
  time: string;
  activity: LocalizedText;
}

export interface Career {
  id: CareerId;
  slug: string;
  familyId: FamilyId;
  title: LocalizedText;
  shortDescription: LocalizedText;
  actualWork: LocalizedText[];
  enjoyIf: LocalizedText[];
  dislikeIf: LocalizedText[];
  realisticDay: DaySegment[];
  dimensions: CareerDimensions;
  roadmapId: CareerId;
  experimentId: CareerId;
  aiExposure: AITaskExposure[];
  relatedCareerIds: CareerId[];
  notYet: LocalizedText[];
  foundation: LocalizedText[];
  core: LocalizedText[];
  practical: LocalizedText[];
  later: LocalizedText[];
  resourceIds: string[];
}

export interface CareerFamily {
  id: FamilyId;
  title: LocalizedText;
  description: LocalizedText;
  careerIds: CareerId[];
  accent: string;
  practiceTrack?: {
    title: LocalizedText;
    description: LocalizedText;
    path: string;
  };
}

export interface RoadmapStage {
  id: string;
  title: LocalizedText;
  intent: LocalizedText;
  topics: LocalizedText[];
  enoughForNow: LocalizedText;
  practicalTask: LocalizedText;
  notYet: LocalizedText[];
  resourceIds: string[];
}

export interface Roadmap {
  id: CareerId;
  careerId: CareerId;
  stages: RoadmapStage[];
}

export interface CareerExperiment {
  id: CareerId;
  careerId: CareerId;
  title: LocalizedText;
  duration: string;
  prerequisites: LocalizedText[];
  experienceGoals: LocalizedText[];
  steps: LocalizedText[];
  attention: LocalizedText[];
  reflectionPrompts: LocalizedText[];
  resourceIds: string[];
}

export interface StudentSituation {
  id: string;
  label: LocalizedText;
  note: LocalizedText;
  destination: { en: string; bn: string };
}

export const goalIds = [
  "global-companies",
  "local-industry",
  "remote-employment",
  "study-abroad",
  "research-publication",
  "freelancing",
  "tech-business",
] as const;
export type GoalId = (typeof goalIds)[number];

/** Public reference material, not a promise that applying or participating is free. */
export interface GuidanceSource {
  id: string;
  title: string;
  provider: string;
  url: string;
  scope: LocalizedText;
  lastReviewed: string;
}

export interface GoalStage {
  id: string;
  title: LocalizedText;
  why: LocalizedText;
  tasks: LocalizedText[];
  evidence: LocalizedText;
  notYet: LocalizedText;
  sourceId: string;
}

export interface GoalGuide {
  id: GoalId;
  title: LocalizedText;
  summary: LocalizedText;
  reality: LocalizedText;
  variants: { title: LocalizedText; description: LocalizedText }[];
  stages: GoalStage[];
  pitfalls: LocalizedText[];
  aiPractice: LocalizedText;
  thisWeek: LocalizedText;
  careerIds: CareerId[];
  relatedGoalIds: GoalId[];
  sourceIds: string[];
}

export interface FinalYearProjectGuide {
  title: LocalizedText;
  summary: LocalizedText;
  stages: GoalStage[];
  variants: {
    title: LocalizedText;
    evidence: LocalizedText;
    caution: LocalizedText;
  }[];
  releaseChecks: LocalizedText[];
  sourceIds: string[];
}

/** Static, progressively disclosed team guidance; never a progress tracker. */
export interface ProjectPlaybook {
  id: string;
  title: LocalizedText;
  when: LocalizedText;
  summary: LocalizedText;
  steps: { title: LocalizedText; body: LocalizedText }[];
  example: { title: LocalizedText; lines: LocalizedText[]; code?: string };
  sourceIds: string[];
}

export interface ProjectTemplate {
  id: string;
  title: LocalizedText;
  use: LocalizedText;
  fields: LocalizedText[];
}
