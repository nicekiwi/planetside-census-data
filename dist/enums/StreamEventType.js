"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamEventType = void 0;
var StreamEventType;
(function (StreamEventType) {
    StreamEventType["CHARACTER_ACHIEVEMENT_EARNED"] = "AchievementEarned";
    StreamEventType["CHARACTER_DEATH"] = "Death";
    StreamEventType["CHARACTER_LOGIN"] = "PlayerLogin";
    StreamEventType["CHARACTER_LOGOUT"] = "PlayerLogout";
    StreamEventType["CHARACTER_FACILITY_CAPTURE"] = "PlayerFacilityCapture";
    StreamEventType["CHARACTER_FACILITY_DEFEND"] = "PlayerFacilityDefend";
    StreamEventType["CHARACTER_BATTLE_RANK_UP"] = "BattleRankUp";
    StreamEventType["CHARACTER_GAIN_XP"] = "GainExperience";
    StreamEventType["CHARACTER_ITEM_ADDED"] = "ItemAdded";
    StreamEventType["CHARACTER_SKILL_ADDED"] = "SkillAdded";
    StreamEventType["CHARACTER_VEHICLE_DESTROY"] = "VehicleDestroy";
    StreamEventType["ZONE_LOCK"] = "ContinentLock";
    StreamEventType["ZONE_UNLOCK"] = "ContinentUnlock";
    StreamEventType["ZONE_METAGAME_EVENT"] = "MetagameEvent";
    StreamEventType["ZONE_FACILITY_CONTROL"] = "FacilityControl";
})(StreamEventType = exports.StreamEventType || (exports.StreamEventType = {}));
