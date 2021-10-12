"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FactionType_1 = require("../enums/FactionType");
exports.default = {
    [FactionType_1.FactionType.VS]: {
        name: "Vanu Sovereignty",
        description: "What we would call true believers.",
        color: "purple",
        short: "vs",
    },
    [FactionType_1.FactionType.NC]: {
        name: "New Conglomerate",
        description: "Separatist faction determined to remain free of the controlling and domineering Republic.",
        color: "blue",
        short: "nc",
    },
    [FactionType_1.FactionType.TR]: {
        name: "Terran Republic",
        description: "Built around order and the rule of law, with the central tenet that no individual is above the rules.",
        color: "red",
        short: "tr",
    },
    [FactionType_1.FactionType.NSO]: {
        name: "Nanite Systems Operatives",
        description: "Unaffiliated remotely-controlled combat units.",
        color: "white",
        short: "nso",
    },
};
