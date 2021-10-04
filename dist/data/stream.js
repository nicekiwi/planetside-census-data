"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    url: "push.planetside2.com/streaming",
    urlComplete: (worldId, serviceId) => `push.planetside2.com/streaming?environment=${worldId}&service-id=s:${serviceId}`,
};
