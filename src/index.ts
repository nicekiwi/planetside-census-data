import api, { IApiData } from "./data/api";
import stream, { IStreamData } from "./data/stream";
import factions, { IFactionsData } from "./data/factions";
import zones, { IZonesData } from "./data/zones";
import worlds, { IWorldsData } from "./data/worlds";
import events, { IEventsData } from "./data/events";
import worldsByPlatform, {
  IWorldsByPlatformData,
} from "./data/worldsByPlatform";

export interface IData {
  api: IApiData;
  stream: IStreamData;
  worldsByPlatform: IWorldsByPlatformData;
  worlds: IWorldsData;
  events: IEventsData;
  zones: IZonesData;
  factions: IFactionsData;
}

export default <IData>{
  api,
  stream,
  worldsByPlatform,
  worlds,
  events,
  zones,
  factions,
};
