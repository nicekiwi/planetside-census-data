"use strict";
var _a, _b, _c, _d;
exports.__esModule = true;
var FactionType_1 = require("./enums/FactionType");
var PlatformType_1 = require("./enums/PlatformType");
var WorldType_1 = require("./enums/WorldType");
var ZoneType_1 = require("./enums/ZoneType");
var PlanetsideData = {
    api: {
        url: "census.daybreakgames.com",
        urlHttps: "https://census.daybreakgames.com",
        version: "v2"
    },
    stream: {
        url: "push.planetside2.com/streaming",
        urlComplete: function (worldId, serviceId) {
            return "push.planetside2.com/streaming?environment=" + worldId + "&service-id=s:" + serviceId;
        }
    },
    worldsByPlatform: (_a = {},
        _a[PlatformType_1.PLATFORM.PC] = [
            WorldType_1.WORLD.CONNERY,
            WorldType_1.WORLD.MILLER,
            WorldType_1.WORLD.COBALT,
            WorldType_1.WORLD.EMERALD,
            WorldType_1.WORLD.SOLTECH,
        ],
        _a[PlatformType_1.PLATFORM.PS4] = [WorldType_1.WORLD.GENUDINE, WorldType_1.WORLD.CERES],
        _a),
    worlds: (_b = {},
        _b[WorldType_1.WORLD.CONNERY] = {
            name: "Connery",
            api: PlatformType_1.PLATFORM_API.PC,
            platform: PlatformType_1.PLATFORM.PC,
            region: "us",
            location: "USA/Nevada"
        },
        _b[WorldType_1.WORLD.MILLER] = {
            name: "Miller",
            api: PlatformType_1.PLATFORM_API.PC,
            platform: PlatformType_1.PLATFORM.PC,
            region: "eu",
            location: "Europe/Netherlands"
        },
        _b[WorldType_1.WORLD.COBALT] = {
            name: "Cobalt",
            api: PlatformType_1.PLATFORM_API.PC,
            platform: PlatformType_1.PLATFORM.PC,
            region: "eu",
            location: "Europe/Netherlands"
        },
        _b[WorldType_1.WORLD.EMERALD] = {
            name: "Emerald",
            api: PlatformType_1.PLATFORM_API.PC,
            platform: PlatformType_1.PLATFORM.PC,
            region: "us",
            location: "USA/Maryland"
        },
        _b[WorldType_1.WORLD.JAEGER] = {
            name: "Jaeger",
            api: PlatformType_1.PLATFORM_API.PC,
            platform: PlatformType_1.PLATFORM.PC,
            region: "us",
            location: "USA/Maryland",
            special: true
        },
        _b[WorldType_1.WORLD.SOLTECH] = {
            name: "SolTech",
            api: PlatformType_1.PLATFORM_API.PC,
            platform: PlatformType_1.PLATFORM.PC,
            region: "jp",
            location: "Japan/Tokyo"
        },
        _b[WorldType_1.WORLD.GENUDINE] = {
            name: "Genudine",
            api: PlatformType_1.PLATFORM_API.PS4_US,
            platform: PlatformType_1.PLATFORM.PS4,
            region: "us",
            location: "USA/California"
        },
        _b[WorldType_1.WORLD.CERES] = {
            name: "Ceres",
            api: PlatformType_1.PLATFORM_API.PS4_EU,
            platform: PlatformType_1.PLATFORM.PS4,
            region: "eu",
            location: "Europe/Netherlands"
        },
        _b),
    events: {
    // Todo
    },
    zones: (_c = {},
        _c[ZoneType_1.ZONE.INDAR] = {
            name: "Indar",
            description: "Large desert continent, located in the region a sea once occupied.",
            keyword: "desert"
        },
        _c[ZoneType_1.ZONE.HOSSIN] = {
            name: "Hossin",
            description: "Vast swamp, featuring exaggerated fauna and tall hills, the skyline filled with gargantuan trees towering hundreds of meters high.",
            keyword: "swamp"
        },
        _c[ZoneType_1.ZONE.AMERISH] = {
            name: "Amerish",
            description: "Lush, beautiful continent, plentiful in plantlife and covered in majestic mountain ranges.",
            keyword: "lush"
        },
        _c[ZoneType_1.ZONE.ESAMIR] = {
            name: "Esamir",
            description: "Icy tundra with wide barren wastelands divided by frozen rivers, violet crystals erupting from the snow to color an otherwise lifeless landscape.",
            keyword: "icy"
        },
        _c[ZoneType_1.ZONE.KOLTYR] = {
            name: "Koltyr",
            description: "Remarkably small.",
            keyword: "small"
        },
        _c),
    factions: (_d = {},
        _d[FactionType_1.FACTION.VS] = {
            name: "Vanu Sovereignty",
            description: "What we would call true believers.",
            color: "purple",
            short: "vs"
        },
        _d[FactionType_1.FACTION.NC] = {
            name: "New Conglomerate",
            description: "Separatist faction determined to remain free of the controlling and domineering Republic.",
            color: "blue",
            short: "nc"
        },
        _d[FactionType_1.FACTION.TR] = {
            name: "Terran Republic",
            description: "Built around order and the rule of law, with the central tenet that no individual is above the rules.",
            color: "red",
            short: "tr"
        },
        _d[FactionType_1.FACTION.NSO] = {
            name: "Nanite Systems Operatives",
            description: "Unaffiliated remotely-controlled combat units.",
            color: "white",
            short: "nso"
        },
        _d)
};
exports["default"] = PlanetsideData;
