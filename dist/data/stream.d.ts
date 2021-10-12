import { NamespaceType } from "../enums/PlatformType";
export interface IStreamData {
    url: string;
    urlWss: string;
    urlComplete: (environment: NamespaceType, serviceId: string) => string;
}
declare const _default: IStreamData;
export default _default;
