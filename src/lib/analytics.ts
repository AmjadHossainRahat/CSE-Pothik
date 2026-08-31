export const analyticsEvents = [
  "language_switch",
  "theme_switch",
  "starting_point_selected",
  "career_family_opened",
  "career_viewed",
  "career_compared",
  "roadmap_viewed",
  "career_experiment_started",
  "ai_guidance_viewed",
  "im_lost_used",
  "learning_resource_clicked",
  "next_step_clicked",
] as const;

export type AnalyticsEvent = (typeof analyticsEvents)[number];
export type AnalyticsValue = string | number | boolean;
export type AnalyticsParams = Record<string, AnalyticsValue>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const safeKey = /^[a-z][a-z0-9_]{0,39}$/;

export function shapeAnalyticsPayload(
  params: AnalyticsParams,
): AnalyticsParams {
  return Object.fromEntries(
    Object.entries(params)
      .filter(
        ([key, value]) => safeKey.test(key) && String(value).length <= 100,
      )
      .map(([key, value]) => [
        key,
        typeof value === "string" ? value.trim() : value,
      ]),
  );
}

export function track(
  event: AnalyticsEvent,
  params: AnalyticsParams = {},
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function")
    return;
  window.gtag("event", event, shapeAnalyticsPayload(params));
}

export const trackLanguageSwitch = (from: string, to: string): void =>
  track("language_switch", { from_locale: from, to_locale: to });
export const trackThemeSwitch = (theme: string): void =>
  track("theme_switch", { theme });
export const trackStartingPointSelected = (situationId: string): void =>
  track("starting_point_selected", { situation_id: situationId });
export const trackCareerFamilyOpened = (familyId: string): void =>
  track("career_family_opened", { family_id: familyId });
export const trackCareerViewed = (careerId: string, locale: string): void =>
  track("career_viewed", { career_id: careerId, locale });
export const trackCareerCompared = (careerIds: string): void =>
  track("career_compared", { career_ids: careerIds });
export const trackRoadmapViewed = (careerId: string): void =>
  track("roadmap_viewed", { career_id: careerId });
export const trackExperimentStarted = (careerId: string): void =>
  track("career_experiment_started", { career_id: careerId });
export const trackAIGuidanceViewed = (careerId = "overview"): void =>
  track("ai_guidance_viewed", { career_id: careerId });
export const trackImLostUsed = (choiceId: string): void =>
  track("im_lost_used", { choice_id: choiceId });
export const trackLearningResourceClicked = (
  resourceId: string,
  provider: string,
): void =>
  track("learning_resource_clicked", { resource_id: resourceId, provider });
export const trackNextStepClicked = (destination: string): void =>
  track("next_step_clicked", { destination });
