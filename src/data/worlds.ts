import { PLATFORM, PLATFORM_API } from "../enums/PlatformType";
import { WORLD } from "../enums/WorldType";

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

export default <IWorldsData>{
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
  [WORLD.APEX]: {
    name: "Jaeger",
    api: PLATFORM_API.PC,
    platform: PLATFORM.PC,
    region: "us",
    location: "USA/Maryland",
    special: true,
  },
  [WORLD.BRIGGS]: {
    name: "Briggs",
    api: PLATFORM_API.PC,
    platform: PLATFORM.PC,
    region: "au",
    location: "Australia",
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
};
