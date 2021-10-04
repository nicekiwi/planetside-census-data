"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PlatformType_1 = require("../enums/PlatformType");
const WorldType_1 = require("../enums/WorldType");
exports.default = {
    [WorldType_1.WORLD.CONNERY]: {
        name: "Connery",
        api: PlatformType_1.PLATFORM_API.PC,
        platform: PlatformType_1.PLATFORM.PC,
        region: "us",
        location: "USA/Nevada",
    },
    [WorldType_1.WORLD.MILLER]: {
        name: "Miller",
        api: PlatformType_1.PLATFORM_API.PC,
        platform: PlatformType_1.PLATFORM.PC,
        region: "eu",
        location: "Europe/Netherlands",
    },
    [WorldType_1.WORLD.COBALT]: {
        name: "Cobalt",
        api: PlatformType_1.PLATFORM_API.PC,
        platform: PlatformType_1.PLATFORM.PC,
        region: "eu",
        location: "Europe/Netherlands",
    },
    [WorldType_1.WORLD.EMERALD]: {
        name: "Emerald",
        api: PlatformType_1.PLATFORM_API.PC,
        platform: PlatformType_1.PLATFORM.PC,
        region: "us",
        location: "USA/Maryland",
    },
    [WorldType_1.WORLD.JAEGER]: {
        name: "Jaeger",
        api: PlatformType_1.PLATFORM_API.PC,
        platform: PlatformType_1.PLATFORM.PC,
        region: "us",
        location: "USA/Maryland",
        special: true,
    },
    [WorldType_1.WORLD.APEX]: {
        name: "Jaeger",
        api: PlatformType_1.PLATFORM_API.PC,
        platform: PlatformType_1.PLATFORM.PC,
        region: "us",
        location: "USA/Maryland",
        special: true,
    },
    [WorldType_1.WORLD.BRIGGS]: {
        name: "Briggs",
        api: PlatformType_1.PLATFORM_API.PC,
        platform: PlatformType_1.PLATFORM.PC,
        region: "au",
        location: "Australia",
        special: true,
    },
    [WorldType_1.WORLD.SOLTECH]: {
        name: "SolTech",
        api: PlatformType_1.PLATFORM_API.PC,
        platform: PlatformType_1.PLATFORM.PC,
        region: "jp",
        location: "Japan/Tokyo",
    },
    [WorldType_1.WORLD.GENUDINE]: {
        name: "Genudine",
        api: PlatformType_1.PLATFORM_API.PS4_US,
        platform: PlatformType_1.PLATFORM.PS4,
        region: "us",
        location: "USA/California",
    },
    [WorldType_1.WORLD.CERES]: {
        name: "Ceres",
        api: PlatformType_1.PLATFORM_API.PS4_EU,
        platform: PlatformType_1.PLATFORM.PS4,
        region: "eu",
        location: "Europe/Netherlands",
    },
};
