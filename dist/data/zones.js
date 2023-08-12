"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zones = exports.outfitWarZoneIds = exports.liveZoneIds = exports.zoneIds = exports.getZoneNameById = void 0;
const ZoneType_1 = require("../enums/ZoneType");
const getZoneNameById = (id) => exports.zones[id].name.toLowerCase();
exports.getZoneNameById = getZoneNameById;
exports.zoneIds = [
    ZoneType_1.ZoneType.INDAR,
    ZoneType_1.ZoneType.HOSSIN,
    ZoneType_1.ZoneType.AMERISH,
    ZoneType_1.ZoneType.ESAMIR,
    ZoneType_1.ZoneType.OSHUR,
    ZoneType_1.ZoneType.NEXUS,
    ZoneType_1.ZoneType.EXTINCTION,
    ZoneType_1.ZoneType.ASCENSION,
    ZoneType_1.ZoneType.DESOLATION,
    ZoneType_1.ZoneType.DESOLATION_2,
    ZoneType_1.ZoneType.VR,
    ZoneType_1.ZoneType.VR_NC,
    ZoneType_1.ZoneType.VR_TR,
    ZoneType_1.ZoneType.VR_VS,
];
exports.liveZoneIds = [
    ZoneType_1.ZoneType.INDAR,
    ZoneType_1.ZoneType.HOSSIN,
    ZoneType_1.ZoneType.AMERISH,
    ZoneType_1.ZoneType.ESAMIR,
    ZoneType_1.ZoneType.OSHUR,
];
exports.outfitWarZoneIds = [ZoneType_1.ZoneType.NEXUS, ZoneType_1.ZoneType.DESOLATION, ZoneType_1.ZoneType.DESOLATION_2];
exports.zones = {
    [ZoneType_1.ZoneType.INDAR]: {
        name: 'Indar',
        description: 'Large desert continent, located in the region a sea once occupied.',
        keyword: 'desert',
        warpgateRegions: [2201, 2202, 2203],
    },
    [ZoneType_1.ZoneType.HOSSIN]: {
        name: 'Hossin',
        description: 'Vast swamp, featuring exaggerated fauna and tall hills, the skyline filled with gargantuan trees towering hundreds of meters high.',
        keyword: 'swamp',
        warpgateRegions: [4230, 4240, 4250],
    },
    [ZoneType_1.ZoneType.AMERISH]: {
        name: 'Amerish',
        description: 'Lush, beautiful continent, plentiful in plantlife and covered in majestic mountain ranges.',
        keyword: 'lush',
        warpgateRegions: [6001, 6002, 6003],
    },
    [ZoneType_1.ZoneType.ESAMIR]: {
        name: 'Esamir',
        description: 'Icy tundra with wide barren wastelands divided by frozen rivers, violet crystals erupting from the snow to color an otherwise lifeless landscape.',
        keyword: 'icy',
        warpgateRegions: [18029, 18030, 18062],
    },
    [ZoneType_1.ZoneType.OSHUR]: {
        name: 'Oshur',
        description: "Oshur's sandy archipelago and sparkling blue waters provide opportunities for engagement by land, sea, and air.",
        keyword: 'island',
        warpgateRegions: [18303, 18304, 18305],
    },
    [ZoneType_1.ZoneType.VR]: {
        name: 'VR Training Room (NC)',
        description: "Experiment with all weapons, vehicles and attachments in your empire's own VR Training simulator.",
        keyword: 'vr',
        warpgateRegions: [],
    },
    [ZoneType_1.ZoneType.VR_NC]: {
        name: 'VR Training Room (NC)',
        description: "Experiment with all weapons, vehicles and attachments in your empire's own VR Training simulator.",
        keyword: 'vr',
        warpgateRegions: [],
    },
    [ZoneType_1.ZoneType.VR_TR]: {
        name: 'VR Training Room (TR)',
        description: "Experiment with all weapons, vehicles and attachments in your empire's own VR Training simulator.",
        keyword: 'vr',
        warpgateRegions: [],
    },
    [ZoneType_1.ZoneType.VR_VS]: {
        name: 'VR Training Room (VS)',
        description: "Experiment with all weapons, vehicles and attachments in your empire's own VR Training simulator.",
        keyword: 'vr',
        warpgateRegions: [],
    },
    [ZoneType_1.ZoneType.KOLTYR]: {
        name: 'Koltyr',
        description: 'Remarkably small.',
        keyword: 'small',
        warpgateRegions: [],
    },
    [ZoneType_1.ZoneType.DESOLATION]: {
        name: 'Desolation',
        description: 'Far from Auraxis, an asteroid belt hides ancient Vanu artifacts, providing more questions than answers.',
        keyword: 'battle',
        warpgateRegions: [],
    },
    [ZoneType_1.ZoneType.DESOLATION_2]: {
        name: 'Desolation',
        description: 'Far from Auraxis, an asteroid belt hides ancient Vanu artifacts, providing more questions than answers.',
        keyword: 'battle',
        warpgateRegions: [],
    },
    [ZoneType_1.ZoneType.NEXUS]: {
        name: 'Nexus',
        description: 'The frigid battle island of Nexus is marked by icy corridors and steep elevation changes.',
        keyword: 'battle',
        warpgateRegions: [],
    },
    [ZoneType_1.ZoneType.EXTINCTION]: {
        name: 'Extinction',
        description: '',
        keyword: 'unknown',
        warpgateRegions: [],
    },
    [ZoneType_1.ZoneType.ASCENSION]: {
        name: 'Ascension',
        description: '',
        keyword: 'unknown',
        warpgateRegions: [],
    },
};
exports.default = exports.zones;
