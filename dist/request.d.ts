import { type AxiosError, type AxiosRequestConfig } from 'axios';
import { type NamespaceType } from './enums/NamespaceType';
export declare const requestUrl = "census.daybreakgames.com";
export declare const requestUrlHttps = "https://census.daybreakgames.com";
export declare function requestUrlComplete(namespace: NamespaceType, serviceId: string): string;
export interface ICensusRequestConfig extends Omit<AxiosRequestConfig, 'method' | 'url'> {
    uri: string;
    collection?: string;
}
export type ICensusRequestError<T = unknown> = AxiosError<T>;
export declare class CensusRequest {
    private readonly url;
    private response;
    constructor(namespace: NamespaceType, serviceId: string);
    get<T>({ uri, collection, ...config }: ICensusRequestConfig): Promise<T>;
    validate<T>(collection: string): T;
}
export default CensusRequest;
