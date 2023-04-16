"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factionIdToShort = exports.factionShortToId = exports.factions = void 0;
const FactionType_1 = require("../enums/FactionType");
exports.factions = {
    [FactionType_1.FactionType.VS]: {
        name: 'Vanu Sovereignty',
        description: 'What we would call true believers.',
        color: 'purple',
        short: FactionType_1.FactionShortType.VS,
    },
    [FactionType_1.FactionType.NC]: {
        name: 'New Conglomerate',
        description: 'Separatist faction determined to remain free of the controlling and domineering Republic.',
        color: 'blue',
        short: FactionType_1.FactionShortType.NC,
    },
    [FactionType_1.FactionType.TR]: {
        name: 'Terran Republic',
        description: 'Built around order and the rule of law, with the central tenet that no individual is above the rules.',
        color: 'red',
        short: FactionType_1.FactionShortType.TR,
    },
    [FactionType_1.FactionType.NSO]: {
        name: 'Nanite Systems Operatives',
        description: 'Unaffiliated remotely-controlled combat units.',
        color: 'white',
        short: FactionType_1.FactionShortType.NSO,
    },
};
function factionShortToId(short) {
    return Object.keys(exports.factions).map(Number).find((id) => exports.factions[id].short === short);
}
exports.factionShortToId = factionShortToId;
function factionIdToShort(id) {
    return exports.factions[id].short;
}
exports.factionIdToShort = factionIdToShort;
exports.default = exports.factions;
