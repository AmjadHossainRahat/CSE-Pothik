import { careerById } from "@/data/careers";
import { resourceById } from "@/data/resources";
import type { CareerId, LearningResource } from "@/types/content";

export function getCareerResources(careerId: CareerId): LearningResource[] {
  const career = careerById.get(careerId);
  if (!career) return [];
  return career.resourceIds
    .map((resourceId) => resourceById.get(resourceId))
    .filter((resource): resource is LearningResource => resource !== undefined);
}
