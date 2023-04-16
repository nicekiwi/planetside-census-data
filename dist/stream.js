"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CensusStream = exports.streamUrlComplete = exports.streamUrlWss = exports.streamUrl = void 0;
const events_1 = require("events");
const ws_1 = __importDefault(require("ws"));
const StreamEventType_1 = require("./enums/StreamEventType");
exports.streamUrl = 'push.planetside2.com/streaming';
exports.streamUrlWss = 'wss://push.planetside2.com/streaming';
function streamUrlComplete(namespace, serviceId) {
    return `${exports.streamUrlWss}?environment=${namespace}&service-id=s:${serviceId}`;
}
exports.streamUrlComplete = streamUrlComplete;
class CensusStream extends events_1.EventEmitter {
    platform;
    serviceId;
    ws;
    constructor(platform, serviceId) {
        super();
        this.platform = platform;
        this.serviceId = serviceId;
        this.ws = new ws_1.default(streamUrlComplete(this.platform, this.serviceId));
        this.ws.once('open', () => this.emit('open'));
        this.ws.on('message', (data) => {
            this.onData(data);
        });
        this.handleTypes();
    }
    onData(data) {
        try {
            this.emit('data', JSON.parse(data));
        }
        catch (e) {
            console.debug('JSON data is not valid', e, data);
        }
    }
    handleTypes() {
        this.on('data', (data) => {
            const type = data.type;
            if (type === StreamEventType_1.MessageType.HEARTBEAT) {
                this.emit('heartbeat', data);
            }
            else if (type === StreamEventType_1.MessageType.SERVICE_MESSAGE) {
                this.emit(data.payload.event_name, data);
            }
        });
    }
    subscribe(worlds, eventNames, characters = ['all'], logicalAndCharactersWithWorlds = false) {
        const payload = {
            service: 'event',
            action: 'subscribe',
            worlds,
            eventNames,
            characters,
            logicalAndCharactersWithWorlds,
        };
        try {
            this.ws.send(JSON.stringify(payload));
        }
        catch (e) {
            console.debug('Failed Subscribing to Event', e, payload);
        }
    }
    unsubscribe(worlds = [], eventNames, characters = ['all']) {
        const payload = {
            service: 'event',
            action: 'clearSubscribe',
            worlds,
            characters,
            eventNames,
        };
        try {
            this.ws.send(JSON.stringify(payload));
        }
        catch (e) {
            console.debug('Failed Unsubscribing to Event', e, payload);
        }
    }
    unsubscribeAll() {
        const payload = {
            service: 'event',
            action: 'clearSubscribe',
            all: 'true',
        };
        try {
            this.ws.send(JSON.stringify(payload));
        }
        catch (e) {
            console.debug('Failed Unsubscribing to Event', e, payload);
        }
    }
}
exports.CensusStream = CensusStream;
exports.default = CensusStream;
