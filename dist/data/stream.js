"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    url: "push.planetside2.com/streaming",
    urlWss: "wss://push.planetside2.com/streaming",
    urlComplete: (environment, serviceId) => `wss://push.planetside2.com/streaming?environment=${environment}&service-id=s:${serviceId}`,
};
