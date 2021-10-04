import { IApiData } from "./data/api";
import { IStreamData } from "./data/stream";
import { IFactionsData } from "./data/factions";
import { IZonesData } from "./data/zones";
import { IWorldsData } from "./data/worlds";
import { IEventsData } from "./data/events";
import { IWorldsByPlatformData } from "./data/worldsByPlatform";
export interface IData {
    api: IApiData;
    stream: IStreamData;
    worldsByPlatform: IWorldsByPlatformData;
    worlds: IWorldsData;
    events: IEventsData;
    zones: IZonesData;
    factions: IFactionsData;
}
declare const _default: IData;
export default _default;
