"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceType = exports.MessageType = exports.StreamEventType = void 0;
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
    StreamEventType["ZONE_METAGAME_EVENT"] = "MetagameEvent";
    StreamEventType["ZONE_FACILITY_CONTROL"] = "FacilityControl";
})(StreamEventType || (exports.StreamEventType = StreamEventType = {}));
var MessageType;
(function (MessageType) {
    MessageType["HEARTBEAT"] = "heartbeat";
    MessageType["SERVICE_MESSAGE"] = "serviceMessage";
    MessageType["SERVICE_STATE_CHANGE"] = "serviceStateChange";
    MessageType["CONNECTION_STATE_CHANGED"] = "connectionStateChanged";
})(MessageType || (exports.MessageType = MessageType = {}));
var ServiceType;
(function (ServiceType) {
    ServiceType["EVENT"] = "event";
    ServiceType["PUSH"] = "push";
})(ServiceType || (exports.ServiceType = ServiceType = {}));
