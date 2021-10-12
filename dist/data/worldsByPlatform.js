"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PlatformType_1 = require("../enums/PlatformType");
const WorldType_1 = require("../enums/WorldType");
exports.default = {
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
