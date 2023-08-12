"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CensusRequest = exports.requestUrlComplete = exports.requestUrlHttps = exports.requestUrl = void 0;
const axios_1 = __importDefault(require("axios"));
const lodash_get_1 = __importDefault(require("lodash.get"));
const lodash_has_1 = __importDefault(require("lodash.has"));
const NamespaceType_1 = require("./enums/NamespaceType");
exports.requestUrl = 'census.daybreakgames.com';
exports.requestUrlHttps = 'https://census.daybreakgames.com';
function requestUrlComplete(namespace, serviceId) {
    return `${exports.requestUrlHttps}/s:${serviceId}/get/${namespace}:${NamespaceType_1.NamespaceVersionType.V2}/`;
}
exports.requestUrlComplete = requestUrlComplete;
class CensusRequest {
    url;
    response;
    constructor(namespace, serviceId) {
        this.url = requestUrlComplete(namespace, serviceId);
    }
    async get({ uri, collection, ...config }) {
        this.response = await axios_1.default.get(`${this.url}/${uri}`, config);
        if (collection === undefined) {
            return this.response.data;
        }
        return this.validate(collection);
    }
    validate(collection) {
        if (!(0, lodash_has_1.default)(this.response.data, collection)) {
            throw new Error(`Collection '${collection}' not found in response`);
        }
        return (0, lodash_get_1.default)(this.response.data, collection);
    }
}
exports.CensusRequest = CensusRequest;
exports.default = CensusRequest;
