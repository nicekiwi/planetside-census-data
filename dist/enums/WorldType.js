"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldStateType = exports.WorldType = void 0;
var WorldType;
(function (WorldType) {
    WorldType[WorldType["CONNERY"] = 1] = "CONNERY";
    WorldType[WorldType["MILLER"] = 10] = "MILLER";
    WorldType[WorldType["COBALT"] = 13] = "COBALT";
    WorldType[WorldType["EMERALD"] = 17] = "EMERALD";
    WorldType[WorldType["JAEGER"] = 19] = "JAEGER";
    WorldType[WorldType["APEX"] = 24] = "APEX";
    WorldType[WorldType["BRIGGS"] = 25] = "BRIGGS";
    WorldType[WorldType["SOLTECH"] = 40] = "SOLTECH";
    WorldType[WorldType["GENUDINE"] = 1000] = "GENUDINE";
    WorldType[WorldType["CERES"] = 2000] = "CERES";
})(WorldType || (exports.WorldType = WorldType = {}));
var WorldStateType;
(function (WorldStateType) {
    WorldStateType["ONLINE"] = "online";
    WorldStateType["OFFLINE"] = "offline";
    WorldStateType["LOCKED"] = "locked";
})(WorldStateType || (exports.WorldStateType = WorldStateType = {}));
