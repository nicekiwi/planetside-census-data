import { ZoneType } from "../enums/ZoneType";

export interface IZonesData {
  [key: number]: {
    name: string;
    description: string;
    keyword: string;
    warpgateRegions: number[];
  };
}

export default <IZonesData>{
  [ZoneType.INDAR]: {
    name: "Indar",
    description:
      "Large desert continent, located in the region a sea once occupied.",
    keyword: "desert",
    warpgateRegions: [2201, 2202, 2203],
  },
  [ZoneType.HOSSIN]: {
    name: "Hossin",
    description:
      "Vast swamp, featuring exaggerated fauna and tall hills, the skyline filled with gargantuan trees towering hundreds of meters high.",
    keyword: "swamp",
    warpgateRegions: [4230, 4240, 4250],
  },
  [ZoneType.AMERISH]: {
    name: "Amerish",
    description:
      "Lush, beautiful continent, plentiful in plantlife and covered in majestic mountain ranges.",
    keyword: "lush",
    warpgateRegions: [6001, 6002, 6003],
  },
  [ZoneType.ESAMIR]: {
    name: "Esamir",
    description:
      "Icy tundra with wide barren wastelands divided by frozen rivers, violet crystals erupting from the snow to color an otherwise lifeless landscape.",
    keyword: "icy",
    warpgateRegions: [18029, 18030, 18062],
  },
  [ZoneType.OSHUR]: {
    name: "Oshur",
    description:
      "A tropical paradise brimming with research opportunities... evacuated as the Auraxian War began.",
    keyword: "island",
    warpgateRegions: [],
  },
  [ZoneType.VR_NC]: {
    name: "VR Training Room (NC)",
    description:
      "Experiment with all weapons, vehicles and attachments in your empire's own VR Training simulator.",
    keyword: "vr",
    warpgateRegions: [],
  },
  [ZoneType.VR_TR]: {
    name: "VR Training Room (TR)",
    description:
      "Experiment with all weapons, vehicles and attachments in your empire's own VR Training simulator.",
    keyword: "vr",
    warpgateRegions: [],
  },
  [ZoneType.VR_VS]: {
    name: "VR Training Room (VS)",
    description:
      "Experiment with all weapons, vehicles and attachments in your empire's own VR Training simulator.",
    keyword: "vr",
    warpgateRegions: [],
  },
  [ZoneType.KOLTYR]: {
    name: "Koltyr",
    description: "Remarkably small.",
    keyword: "small",
    warpgateRegions: [],
  },
  [ZoneType.DESOLATION]: {
    name: "Desolation",
    description: "Battle Island set on a planetoid in space.",
    keyword: "battle",
    warpgateRegions: [],
  },
};
