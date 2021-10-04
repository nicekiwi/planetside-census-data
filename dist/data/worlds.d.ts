import { PLATFORM, PLATFORM_API } from "../enums/PlatformType";
export interface IWorldsData {
    [key: number]: {
        name: string;
        api: PLATFORM_API;
        platform: PLATFORM;
        region: string;
        location: string;
        special?: boolean;
    };
}
declare const _default: IWorldsData;
export default _default;
