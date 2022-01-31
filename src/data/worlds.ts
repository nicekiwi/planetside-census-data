import {
  PlatformType,
  NamespaceType,
  NamespaceVersionType,
} from "../enums/PlatformType";
import { WorldType } from "../enums/WorldType";

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

export default <IWorldsData>{
  [WorldType.CONNERY]: {
    name: "Connery",
    platform: PlatformType.PC,
    namespace: `${NamespaceType.PC}:${NamespaceVersionType.V2}`,
    environment: `${NamespaceType.PC}`,
    region: "us",
    location: "USA/Nevada",
  },
  [WorldType.MILLER]: {
    name: "Miller",
    platform: PlatformType.PC,
    namespace: `${NamespaceType.PC}:${NamespaceVersionType.V2}`,
    environment: `${NamespaceType.PC}`,
    region: "eu",
    location: "Europe/Netherlands",
  },
  [WorldType.COBALT]: {
    name: "Cobalt",
    platform: PlatformType.PC,
    namespace: `${NamespaceType.PC}:${NamespaceVersionType.V2}`,
    environment: `${NamespaceType.PC}`,
    region: "eu",
    location: "Europe/Netherlands",
  },
  [WorldType.EMERALD]: {
    name: "Emerald",
    platform: PlatformType.PC,
    namespace: `${NamespaceType.PC}:${NamespaceVersionType.V2}`,
    environment: `${NamespaceType.PC}`,
    region: "us",
    location: "USA/Maryland",
  },
  [WorldType.JAEGER]: {
    name: "Jaeger",
    platform: PlatformType.PC,
    namespace: `${NamespaceType.PC}:${NamespaceVersionType.V2}`,
    environment: `${NamespaceType.PC}`,
    region: "us",
    location: "USA/Maryland",
    special: true,
  },
  [WorldType.APEX]: {
    name: "Apex",
    platform: PlatformType.PC,
    namespace: `${NamespaceType.PC}:${NamespaceVersionType.V2}`,
    environment: `${NamespaceType.PC}`,
    region: "us",
    location: "USA/Maryland",
    special: true,
  },
  [WorldType.BRIGGS]: {
    name: "Briggs",
    platform: PlatformType.PC,
    namespace: `${NamespaceType.PC}:${NamespaceVersionType.V2}`,
    environment: `${NamespaceType.PC}`,
    region: "au",
    location: "Australia",
    special: true,
  },
  [WorldType.SOLTECH]: {
    name: "SolTech",
    platform: PlatformType.PC,
    namespace: `${NamespaceType.PC}:${NamespaceVersionType.V2}`,
    environment: `${NamespaceType.PC}`,
    region: "jp",
    location: "Japan/Tokyo",
  },
  [WorldType.GENUDINE]: {
    name: "Genudine",
    platform: PlatformType.PS4,
    namespace: `${NamespaceType.PS4_US}:${NamespaceVersionType.V2}`,
    environment: `${NamespaceType.PS4_US}`,
    region: "us",
    location: "USA/California",
  },
  [WorldType.CERES]: {
    name: "Ceres",
    platform: PlatformType.PS4,
    namespace: `${NamespaceType.PS4_EU}:${NamespaceVersionType.V2}`,
    environment: `${NamespaceType.PS4_EU}`,
    region: "eu",
    location: "Europe/Netherlands",
  },
};
