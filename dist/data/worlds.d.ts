import { PlatformType, NamespaceType } from "../enums/PlatformType";
export interface IWorldsData {
    [key: number]: {
        name: string;
        platform: PlatformType;
        namespace: string;
        environment: NamespaceType;
        region: string;
        location: string;
        special?: boolean;
    };
}
declare const _default: IWorldsData;
export default _default;
