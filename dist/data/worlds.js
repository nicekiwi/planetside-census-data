"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.worlds = exports.worldsByNamespace = exports.worldsByPlatform = exports.worldIds = void 0;
const NamespaceType_1 = require("../enums/NamespaceType");
const PlatformType_1 = require("../enums/PlatformType");
const WorldType_1 = require("../enums/WorldType");
exports.worldIds = {
    all: [
        WorldType_1.WorldType.CONNERY,
        WorldType_1.WorldType.MILLER,
        WorldType_1.WorldType.COBALT,
        WorldType_1.WorldType.EMERALD,
        WorldType_1.WorldType.JAEGER,
        WorldType_1.WorldType.APEX,
        WorldType_1.WorldType.BRIGGS,
        WorldType_1.WorldType.SOLTECH,
        WorldType_1.WorldType.GENUDINE,
        WorldType_1.WorldType.CERES,
    ],
    [NamespaceType_1.NamespaceType.PC]: [
        WorldType_1.WorldType.CONNERY,
        WorldType_1.WorldType.MILLER,
        WorldType_1.WorldType.COBALT,
        WorldType_1.WorldType.EMERALD,
        WorldType_1.WorldType.JAEGER,
        WorldType_1.WorldType.APEX,
        WorldType_1.WorldType.BRIGGS,
        WorldType_1.WorldType.SOLTECH,
    ],
    [NamespaceType_1.NamespaceType.PS4_US]: [WorldType_1.WorldType.GENUDINE],
    [NamespaceType_1.NamespaceType.PS4_EU]: [WorldType_1.WorldType.CERES],
};
exports.worldsByPlatform = {
    [PlatformType_1.PlatformType.PC]: [
        WorldType_1.WorldType.CONNERY,
        WorldType_1.WorldType.MILLER,
        WorldType_1.WorldType.COBALT,
        WorldType_1.WorldType.JAEGER,
        WorldType_1.WorldType.APEX,
        WorldType_1.WorldType.BRIGGS,
        WorldType_1.WorldType.EMERALD,
        WorldType_1.WorldType.SOLTECH,
    ],
    [PlatformType_1.PlatformType.PS4]: [WorldType_1.WorldType.GENUDINE, WorldType_1.WorldType.CERES],
};
exports.worldsByNamespace = {
    [NamespaceType_1.NamespaceType.PC]: [
        WorldType_1.WorldType.CONNERY,
        WorldType_1.WorldType.MILLER,
        WorldType_1.WorldType.COBALT,
        WorldType_1.WorldType.JAEGER,
        WorldType_1.WorldType.APEX,
        WorldType_1.WorldType.BRIGGS,
        WorldType_1.WorldType.EMERALD,
        WorldType_1.WorldType.SOLTECH,
    ],
    [NamespaceType_1.NamespaceType.PS4_US]: [WorldType_1.WorldType.GENUDINE],
    [NamespaceType_1.NamespaceType.PS4_EU]: [WorldType_1.WorldType.CERES],
};
exports.worlds = {
    [WorldType_1.WorldType.CONNERY]: {
        name: 'Connery',
        platform: PlatformType_1.PlatformType.PC,
        namespace: `${NamespaceType_1.NamespaceType.PC}:${NamespaceType_1.NamespaceVersionType.V2}`,
        environment: `${NamespaceType_1.NamespaceType.PC}`,
        region: 'us',
        location: 'USA/Nevada',
    },
    [WorldType_1.WorldType.MILLER]: {
        name: 'Miller',
        platform: PlatformType_1.PlatformType.PC,
        namespace: `${NamespaceType_1.NamespaceType.PC}:${NamespaceType_1.NamespaceVersionType.V2}`,
        environment: `${NamespaceType_1.NamespaceType.PC}`,
        region: 'eu',
        location: 'Europe/Netherlands',
    },
    [WorldType_1.WorldType.COBALT]: {
        name: 'Cobalt',
        platform: PlatformType_1.PlatformType.PC,
        namespace: `${NamespaceType_1.NamespaceType.PC}:${NamespaceType_1.NamespaceVersionType.V2}`,
        environment: `${NamespaceType_1.NamespaceType.PC}`,
        region: 'eu',
        location: 'Europe/Netherlands',
    },
    [WorldType_1.WorldType.EMERALD]: {
        name: 'Emerald',
        platform: PlatformType_1.PlatformType.PC,
        namespace: `${NamespaceType_1.NamespaceType.PC}:${NamespaceType_1.NamespaceVersionType.V2}`,
        environment: `${NamespaceType_1.NamespaceType.PC}`,
        region: 'us',
        location: 'USA/Maryland',
    },
    [WorldType_1.WorldType.JAEGER]: {
        name: 'Jaeger',
        platform: PlatformType_1.PlatformType.PC,
        namespace: `${NamespaceType_1.NamespaceType.PC}:${NamespaceType_1.NamespaceVersionType.V2}`,
        environment: `${NamespaceType_1.NamespaceType.PC}`,
        region: 'us',
        location: 'USA/Maryland',
        special: true,
    },
    [WorldType_1.WorldType.APEX]: {
        name: 'Apex',
        platform: PlatformType_1.PlatformType.PC,
        namespace: `${NamespaceType_1.NamespaceType.PC}:${NamespaceType_1.NamespaceVersionType.V2}`,
        environment: `${NamespaceType_1.NamespaceType.PC}`,
        region: 'us',
        location: 'USA/Maryland',
        special: true,
    },
    [WorldType_1.WorldType.BRIGGS]: {
        name: 'Briggs',
        platform: PlatformType_1.PlatformType.PC,
        namespace: `${NamespaceType_1.NamespaceType.PC}:${NamespaceType_1.NamespaceVersionType.V2}`,
        environment: `${NamespaceType_1.NamespaceType.PC}`,
        region: 'au',
        location: 'Australia',
        special: true,
    },
    [WorldType_1.WorldType.SOLTECH]: {
        name: 'SolTech',
        platform: PlatformType_1.PlatformType.PC,
        namespace: `${NamespaceType_1.NamespaceType.PC}:${NamespaceType_1.NamespaceVersionType.V2}`,
        environment: `${NamespaceType_1.NamespaceType.PC}`,
        region: 'jp',
        location: 'Japan/Tokyo',
    },
    [WorldType_1.WorldType.GENUDINE]: {
        name: 'Genudine',
        platform: PlatformType_1.PlatformType.PS4,
        namespace: `${NamespaceType_1.NamespaceType.PS4_US}:${NamespaceType_1.NamespaceVersionType.V2}`,
        environment: `${NamespaceType_1.NamespaceType.PS4_US}`,
        region: 'us',
        location: 'USA/California',
    },
    [WorldType_1.WorldType.CERES]: {
        name: 'Ceres',
        platform: PlatformType_1.PlatformType.PS4,
        namespace: `${NamespaceType_1.NamespaceType.PS4_EU}:${NamespaceType_1.NamespaceVersionType.V2}`,
        environment: `${NamespaceType_1.NamespaceType.PS4_EU}`,
        region: 'eu',
        location: 'Europe/Netherlands',
    },
};
exports.default = exports.worlds;
