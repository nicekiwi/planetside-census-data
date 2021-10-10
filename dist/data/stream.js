"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    url: "push.planetside2.com/streaming",
    urlComplete: (environment, serviceId) => `push.planetside2.com/streaming?environment=${environment}&service-id=s:${serviceId}`,
};
