import { ZONE } from "../enums/ZoneType";
import { IZonesData } from "../types";

export default <IZonesData>{
  [ZONE.INDAR]: {
    name: "Indar",
    description:
      "Large desert continent, located in the region a sea once occupied.",
    keyword: "desert",
  },
  [ZONE.HOSSIN]: {
    name: "Hossin",
    description:
      "Vast swamp, featuring exaggerated fauna and tall hills, the skyline filled with gargantuan trees towering hundreds of meters high.",
    keyword: "swamp",
  },
  [ZONE.AMERISH]: {
    name: "Amerish",
    description:
      "Lush, beautiful continent, plentiful in plantlife and covered in majestic mountain ranges.",
    keyword: "lush",
  },
  [ZONE.ESAMIR]: {
    name: "Esamir",
    description:
      "Icy tundra with wide barren wastelands divided by frozen rivers, violet crystals erupting from the snow to color an otherwise lifeless landscape.",
    keyword: "icy",
  },
  [ZONE.KOLTYR]: {
    name: "Koltyr",
    description: "Remarkably small.",
    keyword: "small",
  },
  [ZONE.DESOLATION]: {
    name: "Desolation",
    description: "Battle Island set on a planetoid in space.",
    keyword: "battle",
  },
};
