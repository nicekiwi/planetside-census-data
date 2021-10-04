"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PlatformType_1 = require("../enums/PlatformType");
const WorldType_1 = require("../enums/WorldType");
exports.default = {
    [PlatformType_1.PLATFORM.PC]: [
        WorldType_1.WORLD.CONNERY,
        WorldType_1.WORLD.MILLER,
        WorldType_1.WORLD.COBALT,
        WorldType_1.WORLD.JAEGER,
        WorldType_1.WORLD.APEX,
        WorldType_1.WORLD.BRIGGS,
        WorldType_1.WORLD.EMERALD,
        WorldType_1.WORLD.SOLTECH,
    ],
    [PlatformType_1.PLATFORM.PS4]: [WorldType_1.WORLD.GENUDINE, WorldType_1.WORLD.CERES],
};
