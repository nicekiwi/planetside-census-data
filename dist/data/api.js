"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    url: "census.daybreakgames.com",
    urlHttps: "https://census.daybreakgames.com",
    urlComplete: (namespace, serviceId) => `https://census.daybreakgames.com/s:${serviceId}/get/${namespace}/`,
};
