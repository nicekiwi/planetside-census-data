import { FACTION } from "./enums/FactionType";
import { PLATFORM } from "./enums/PlatformType";
import { WORLD } from "./enums/WorldType";
import { ZONE } from "./enums/ZoneType";

export interface IWorldsData {
  [key: number]: {
    name: string;
    platform: PLATFORM;
    region: string;
    location: string;
  };
}

export interface IEventsData {
  [key: number]: {
    name: string;
  };
}

export interface IZonesData {
  [key: number]: {
    name: string;
  };
}

export interface IFactionsData {
  [key: number]: {
    name: string;
    short: string;
  };
}

export interface IGameData {
  worlds: IWorldsData;
  events: IEventsData;
  zones: IZonesData;
  factions: IFactionsData;
}

const GameData: IGameData = {
  worlds: {
    [WORLD.CONNERY]: {
      name: "Connery",
      platform: PLATFORM.PC,
      region: "us",
      location: "USA/Nevada",
    },
    [WORLD.MILLER]: {
      name: "Miller",
      platform: PLATFORM.PC,
      region: "eu",
      location: "Europe/Netherlands",
    },
    [WORLD.COBALT]: {
      name: "Cobalt",
      platform: PLATFORM.PC,
      region: "eu",
      location: "Europe/Netherlands",
    },
    [WORLD.EMERALD]: {
      name: "Emerald",
      platform: PLATFORM.PC,
      region: "us",
      location: "USA/Maryland",
    },
    [WORLD.JAEGER]: {
      name: "Jaeger",
      platform: PLATFORM.PC,
      region: "us",
      location: "USA/Maryland",
    },
    [WORLD.SOLTECH]: {
      name: "SolTech",
      platform: PLATFORM.PC,
      region: "jp",
      location: "Japan/Tokyo",
    },
    [WORLD.GENUDINE]: {
      name: "Genudine",
      platform: PLATFORM.PS4,
      region: "us",
      location: "USA/California",
    },
    [WORLD.CERES]: {
      name: "Ceres",
      platform: PLATFORM.PS4,
      region: "eu",
      location: "Europe/Netherlands",
    },
  },
  events: {
    // Todo
  },
  zones: {
    [ZONE.INDAR]: { name: "Indar" },
    [ZONE.HOSSIN]: { name: "Hossin" },
    [ZONE.AMERISH]: { name: "Amerish" },
    [ZONE.ESAMIR]: { name: "Esamir" },
    [ZONE.KOLTYR]: { name: "Koltyr" },
  },
  factions: {
    [FACTION.VS]: { name: "Vanu Sovereignty", short: "vs" },
    [FACTION.NC]: { name: "New Conglomerate", short: "nc" },
    [FACTION.TR]: { name: "Terran Republic", short: "tr" },
    [FACTION.NSO]: { name: "Nanite Systems Operatives", short: "nso" },
  },
};

export default GameData;
