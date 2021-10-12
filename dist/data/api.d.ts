import { NamespaceType } from "..";
export interface IApiData {
    url: string;
    urlHttps: string;
    urlComplete: (namespace: NamespaceType, serviceId: string) => string;
}
declare const _default: IApiData;
export default _default;
