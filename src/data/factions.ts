import { FactionType } from "../enums/FactionType";
export interface IFactionsData {
  [key: number]: {
    name: string;
    short: string;
    description: string;
    color: string;
  };
}

export default <IFactionsData>{
  [FactionType.VS]: {
    name: "Vanu Sovereignty",
    description: "What we would call true believers.",
    color: "purple",
    short: "vs",
  },
  [FactionType.NC]: {
    name: "New Conglomerate",
    description:
      "Separatist faction determined to remain free of the controlling and domineering Republic.",
    color: "blue",
    short: "nc",
  },
  [FactionType.TR]: {
    name: "Terran Republic",
    description:
      "Built around order and the rule of law, with the central tenet that no individual is above the rules.",
    color: "red",
    short: "tr",
  },
  [FactionType.NSO]: {
    name: "Nanite Systems Operatives",
    description: "Unaffiliated remotely-controlled combat units.",
    color: "white",
    short: "nso",
  },
};
