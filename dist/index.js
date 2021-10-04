"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("./data/api"));
const stream_1 = __importDefault(require("./data/stream"));
const factions_1 = __importDefault(require("./data/factions"));
const zones_1 = __importDefault(require("./data/zones"));
const worlds_1 = __importDefault(require("./data/worlds"));
const events_1 = __importDefault(require("./data/events"));
const worldsByPlatform_1 = __importDefault(require("./data/worldsByPlatform"));
exports.default = {
    api: api_1.default,
    stream: stream_1.default,
    worldsByPlatform: worldsByPlatform_1.default,
    worlds: worlds_1.default,
    events: events_1.default,
    zones: zones_1.default,
    factions: factions_1.default,
};
