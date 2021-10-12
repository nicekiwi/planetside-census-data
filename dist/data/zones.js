"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ZoneType_1 = require("../enums/ZoneType");
exports.default = {
    [ZoneType_1.ZoneType.INDAR]: {
        name: "Indar",
        description: "Large desert continent, located in the region a sea once occupied.",
        keyword: "desert",
    },
    [ZoneType_1.ZoneType.HOSSIN]: {
        name: "Hossin",
        description: "Vast swamp, featuring exaggerated fauna and tall hills, the skyline filled with gargantuan trees towering hundreds of meters high.",
        keyword: "swamp",
    },
    [ZoneType_1.ZoneType.AMERISH]: {
        name: "Amerish",
        description: "Lush, beautiful continent, plentiful in plantlife and covered in majestic mountain ranges.",
        keyword: "lush",
    },
    [ZoneType_1.ZoneType.ESAMIR]: {
        name: "Esamir",
        description: "Icy tundra with wide barren wastelands divided by frozen rivers, violet crystals erupting from the snow to color an otherwise lifeless landscape.",
        keyword: "icy",
    },
    [ZoneType_1.ZoneType.KOLTYR]: {
        name: "Koltyr",
        description: "Remarkably small.",
        keyword: "small",
    },
    [ZoneType_1.ZoneType.DESOLATION]: {
        name: "Desolation",
        description: "Battle Island set on a planetoid in space.",
        keyword: "battle",
    },
};
