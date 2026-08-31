import { teamPlaybooks } from "./team-playbooks";
import { qualityPlaybooks } from "./quality-playbooks";

export const projectPlaybooks = [...teamPlaybooks, ...qualityPlaybooks];
