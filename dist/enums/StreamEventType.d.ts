export declare enum StreamEventType {
    CHARACTER_ACHIEVEMENT_EARNED = "AchievementEarned",
    CHARACTER_DEATH = "Death",
    CHARACTER_LOGIN = "PlayerLogin",
    CHARACTER_LOGOUT = "PlayerLogout",
    CHARACTER_FACILITY_CAPTURE = "PlayerFacilityCapture",
    CHARACTER_FACILITY_DEFEND = "PlayerFacilityDefend",
    CHARACTER_BATTLE_RANK_UP = "BattleRankUp",
    CHARACTER_GAIN_XP = "GainExperience",
    CHARACTER_ITEM_ADDED = "ItemAdded",
    CHARACTER_SKILL_ADDED = "SkillAdded",
    CHARACTER_VEHICLE_DESTROY = "VehicleDestroy",
    ZONE_LOCK = "ContinentLock",
    ZONE_METAGAME_EVENT = "MetagameEvent",
    ZONE_FACILITY_CONTROL = "FacilityControl"
}
export declare enum MessageType {
    HEARTBEAT = "heartbeat",
    SERVICE_MESSAGE = "serviceMessage",
    SERVICE_STATE_CHANGE = "serviceStateChange",
    CONNECTION_STATE_CHANGED = "connectionStateChanged"
}
export declare enum ServiceType {
    EVENT = "event",
    PUSH = "push"
}
