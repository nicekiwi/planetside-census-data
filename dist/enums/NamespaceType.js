"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.namespaces = exports.NamespaceVersionType = exports.NamespaceType = void 0;
var NamespaceType;
(function (NamespaceType) {
    NamespaceType["PC"] = "ps2";
    NamespaceType["PS4_US"] = "ps2ps4us";
    NamespaceType["PS4_EU"] = "ps2ps4eu";
})(NamespaceType = exports.NamespaceType || (exports.NamespaceType = {}));
var NamespaceVersionType;
(function (NamespaceVersionType) {
    NamespaceVersionType["V2"] = "v2";
})(NamespaceVersionType = exports.NamespaceVersionType || (exports.NamespaceVersionType = {}));
exports.namespaces = [
    NamespaceType.PC,
    NamespaceType.PS4_US,
    NamespaceType.PS4_EU,
];
