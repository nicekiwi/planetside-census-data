import { NamespaceType } from "../enums/PlatformType";
export interface IStreamData {
    url: string;
    urlComplete: (environment: NamespaceType, serviceId: string) => string;
}
declare const _default: IStreamData;
export default _default;
