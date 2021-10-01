import { FACTION } from "./enums/FactionType";
import { PLATFORM, PLATFORM_API } from "./enums/PlatformType";
import { WORLD } from "./enums/WorldType";
import { ZONE } from "./enums/ZoneType";

export interface IWorldsByPlatformData {
  [key: string]: WORLD[];
}

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

export interface IEventsData {
  [key: number]: {
    name: string;
  };
}

export interface IZonesData {
  [key: number]: {
    name: string;
    description: string;
    keyword: string;
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

export interface IPlanetsideData {
  api: {
    url: string;
    urlHttps: string;
    version: string;
  };
  stream: {
    url: string;
    urlComplete: (worldId: number, serviceId: string) => string;
  };
  worldsByPlatform: IWorldsByPlatformData;
  worlds: IWorldsData;
  events: IEventsData;
  zones: IZonesData;
  factions: IFactionsData;
}

const PlanetsideData: IPlanetsideData = {
  api: {
    url: "census.daybreakgames.com",
    urlHttps: "https://census.daybreakgames.com",
    version: "v2",
  },
  stream: {
    url: "push.planetside2.com/streaming",
    urlComplete: (worldId, serviceId) =>
      `push.planetside2.com/streaming?environment=${worldId}&service-id=s:${serviceId}`,
  },
  worldsByPlatform: {
    [PLATFORM.PC]: [
      WORLD.CONNERY,
      WORLD.MILLER,
      WORLD.COBALT,
      WORLD.EMERALD,
      WORLD.SOLTECH,
    ],
    [PLATFORM.PS4]: [WORLD.GENUDINE, WORLD.CERES],
  },
  worlds: {
    [WORLD.CONNERY]: {
      name: "Connery",
      api: PLATFORM_API.PC,
      platform: PLATFORM.PC,
      region: "us",
      location: "USA/Nevada",
    },
    [WORLD.MILLER]: {
      name: "Miller",
      api: PLATFORM_API.PC,
      platform: PLATFORM.PC,
      region: "eu",
      location: "Europe/Netherlands",
    },
    [WORLD.COBALT]: {
      name: "Cobalt",
      api: PLATFORM_API.PC,
      platform: PLATFORM.PC,
      region: "eu",
      location: "Europe/Netherlands",
    },
    [WORLD.EMERALD]: {
      name: "Emerald",
      api: PLATFORM_API.PC,
      platform: PLATFORM.PC,
      region: "us",
      location: "USA/Maryland",
    },
    [WORLD.JAEGER]: {
      name: "Jaeger",
      api: PLATFORM_API.PC,
      platform: PLATFORM.PC,
      region: "us",
      location: "USA/Maryland",
      special: true,
    },
    [WORLD.SOLTECH]: {
      name: "SolTech",
      api: PLATFORM_API.PC,
      platform: PLATFORM.PC,
      region: "jp",
      location: "Japan/Tokyo",
    },
    [WORLD.GENUDINE]: {
      name: "Genudine",
      api: PLATFORM_API.PS4_US,
      platform: PLATFORM.PS4,
      region: "us",
      location: "USA/California",
    },
    [WORLD.CERES]: {
      name: "Ceres",
      api: PLATFORM_API.PS4_EU,
      platform: PLATFORM.PS4,
      region: "eu",
      location: "Europe/Netherlands",
    },
  },
  events: {
    // Todo
  },
  zones: {
    [ZONE.INDAR]: {
      name: "Indar",
      description:
        "Large desert continent, located in the region a sea once occupied.",
      keyword: "desert",
    },
    [ZONE.HOSSIN]: {
      name: "Hossin",
      description:
        "Vast swamp, featuring exaggerated fauna and tall hills, the skyline filled with gargantuan trees towering hundreds of meters high.",
      keyword: "swamp",
    },
    [ZONE.AMERISH]: {
      name: "Amerish",
      description:
        "Lush, beautiful continent, plentiful in plantlife and covered in majestic mountain ranges.",
      keyword: "lush",
    },
    [ZONE.ESAMIR]: {
      name: "Esamir",
      description:
        "Icy tundra with wide barren wastelands divided by frozen rivers, violet crystals erupting from the snow to color an otherwise lifeless landscape.",
      keyword: "icy",
    },
    [ZONE.KOLTYR]: {
      name: "Koltyr",
      description: "Remarkably small.",
      keyword: "small",
    },
  },
  factions: {
    [FACTION.VS]: {
      name: "Vanu Sovereignty",
      description: "What we would call true believers.",
      color: "purple",
      short: "vs",
    },
    [FACTION.NC]: {
      name: "New Conglomerate",
      description:
        "Separatist faction determined to remain free of the controlling and domineering Republic.",
      color: "blue",
      short: "nc",
    },
    [FACTION.TR]: {
      name: "Terran Republic",
      description:
        "Built around order and the rule of law, with the central tenet that no individual is above the rules.",
      color: "red",
      short: "tr",
    },
    [FACTION.NSO]: {
      name: "Nanite Systems Operatives",
      description: "Unaffiliated remotely-controlled combat units.",
      color: "white",
      short: "nso",
    },
  },
};

export default PlanetsideData;
