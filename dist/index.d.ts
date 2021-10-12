import { IApiData } from "./data/api";
import { IStreamData } from "./data/stream";
import { IFactionsData } from "./data/factions";
import { IZonesData } from "./data/zones";
import { IWorldsData } from "./data/worlds";
import { IEventsData } from "./data/events";
import { IWorldsByPlatformData } from "./data/worldsByPlatform";
import { FactionType } from "./enums/FactionType";
import { NamespaceType, NamespaceVersionType, PlatformType } from "./enums/PlatformType";
import { StreamEventType } from "./enums/StreamEventType";
import { WorldStateType, WorldType } from "./enums/WorldType";
import { ZoneType } from "./enums/ZoneType";
import { MetagameEventStateType } from "./enums/MetagameEventStateType";
export interface IData {
    api: IApiData;
    stream: IStreamData;
    worldsByPlatform: IWorldsByPlatformData;
    worlds: IWorldsData;
    events: IEventsData;
    zones: IZonesData;
    factions: IFactionsData;
}
export { FactionType, PlatformType, WorldType, ZoneType, StreamEventType, MetagameEventStateType, WorldStateType, NamespaceType, NamespaceVersionType, };
declare const _default: IData;
export default _default;
