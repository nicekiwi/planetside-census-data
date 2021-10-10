import { PLATFORM, PLATFORM_ENVIRONMENT } from "./enums/PlatformType";
import { WORLD } from "./enums/WorldType";
import { ZONE } from "./enums/ZoneType";

export interface IApiData {
  url: string;
  urlHttps: string;
  version: string;
}

export interface IEventsData {
  [key: number]: {
    name: string;
    description: string;
    type: number;
    zoneId?: ZONE;
  };
}

export interface IFactionsData {
  [key: number]: {
    name: string;
    short: string;
    description: string;
    color: string;
  };
}

export interface IStreamData {
  url: string;
  urlComplete: (environment: PLATFORM_ENVIRONMENT, serviceId: string) => string;
}

export interface IWorldsData {
  [key: number]: {
    name: string;
    api: PLATFORM_ENVIRONMENT;
    platform: PLATFORM;
    region: string;
    location: string;
    special?: boolean;
  };
}

export interface IWorldsByPlatformData {
  [key: string]: WORLD[];
}

export interface IZonesData {
  [key: number]: {
    name: string;
    description: string;
    keyword: string;
  };
}

export interface IData {
  api: IApiData;
  stream: IStreamData;
  worldsByPlatform: IWorldsByPlatformData;
  worlds: IWorldsData;
  events: IEventsData;
  zones: IZonesData;
  factions: IFactionsData;
}
