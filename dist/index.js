"use strict";
var _a, _b, _c;
exports.__esModule = true;
var FactionType_1 = require("./enums/FactionType");
var PlatformType_1 = require("./enums/PlatformType");
var WorldType_1 = require("./enums/WorldType");
var ZoneType_1 = require("./enums/ZoneType");
var GameData = {
    worlds: (_a = {},
        _a[WorldType_1.WORLD.CONNERY] = {
            name: "Connery",
            platform: PlatformType_1.PLATFORM.PC,
            region: "us",
            location: "USA/Nevada"
        },
        _a[WorldType_1.WORLD.MILLER] = {
            name: "Miller",
            platform: PlatformType_1.PLATFORM.PC,
            region: "eu",
            location: "Europe/Netherlands"
        },
        _a[WorldType_1.WORLD.COBALT] = {
            name: "Cobalt",
            platform: PlatformType_1.PLATFORM.PC,
            region: "eu",
            location: "Europe/Netherlands"
        },
        _a[WorldType_1.WORLD.EMERALD] = {
            name: "Emerald",
            platform: PlatformType_1.PLATFORM.PC,
            region: "us",
            location: "USA/Maryland"
        },
        _a[WorldType_1.WORLD.JAEGER] = {
            name: "Jaeger",
            platform: PlatformType_1.PLATFORM.PC,
            region: "us",
            location: "USA/Maryland"
        },
        _a[WorldType_1.WORLD.SOLTECH] = {
            name: "SolTech",
            platform: PlatformType_1.PLATFORM.PC,
            region: "jp",
            location: "Japan/Tokyo"
        },
        _a[WorldType_1.WORLD.GENUDINE] = {
            name: "Genudine",
            platform: PlatformType_1.PLATFORM.PS4,
            region: "us",
            location: "USA/California"
        },
        _a[WorldType_1.WORLD.CERES] = {
            name: "Ceres",
            platform: PlatformType_1.PLATFORM.PS4,
            region: "eu",
            location: "Europe/Netherlands"
        },
        _a),
    events: {
    // Todo
    },
    zones: (_b = {},
        _b[ZoneType_1.ZONE.INDAR] = { name: "Indar" },
        _b[ZoneType_1.ZONE.HOSSIN] = { name: "Hossin" },
        _b[ZoneType_1.ZONE.AMERISH] = { name: "Amerish" },
        _b[ZoneType_1.ZONE.ESAMIR] = { name: "Esamir" },
        _b[ZoneType_1.ZONE.KOLTYR] = { name: "Koltyr" },
        _b),
    factions: (_c = {},
        _c[FactionType_1.FACTION.VS] = { name: "Vanu Sovereignty", short: "vs" },
        _c[FactionType_1.FACTION.NC] = { name: "New Conglomerate", short: "nc" },
        _c[FactionType_1.FACTION.TR] = { name: "Terran Republic", short: "tr" },
        _c[FactionType_1.FACTION.NSO] = { name: "Nanite Systems Operatives", short: "nso" },
        _c)
};
exports["default"] = GameData;
