/// <reference types="node" />
import { EventEmitter } from 'events';
import { NamespaceType } from './enums/NamespaceType';
export declare const streamUrl = "push.planetside2.com/streaming";
export declare const streamUrlWss = "wss://push.planetside2.com/streaming";
export declare function streamUrlComplete(namespace: NamespaceType, serviceId: string): string;
export declare class CensusStream extends EventEmitter {
    private readonly platform;
    private readonly serviceId;
    private readonly ws;
    constructor(platform: NamespaceType, serviceId: string);
    private onData;
    private handleTypes;
    subscribe(worlds: number[], eventNames: string[], characters?: string[], logicalAndCharactersWithWorlds?: boolean): void;
    unsubscribe(worlds: never[] | undefined, eventNames: string[], characters?: string[]): void;
    unsubscribeAll(): void;
}
export default CensusStream;
