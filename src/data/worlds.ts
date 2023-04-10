import { NamespaceType, NamespaceVersionType } from '../enums/NamespaceType'
import { PlatformType } from '../enums/PlatformType'
import { WorldType } from '../enums/WorldType'

export const worldIds = {
  all: [
    WorldType.CONNERY,
    WorldType.MILLER,
    WorldType.COBALT,
    WorldType.EMERALD,
    WorldType.JAEGER,
    WorldType.APEX,
    WorldType.BRIGGS,
    WorldType.SOLTECH,
    WorldType.GENUDINE,
    WorldType.CERES,
  ],
  [NamespaceType.PC]: [
    WorldType.CONNERY,
    WorldType.MILLER,
    WorldType.COBALT,
    WorldType.EMERALD,
    WorldType.JAEGER,
    WorldType.APEX,
    WorldType.BRIGGS,
    WorldType.SOLTECH,
  ],
  [NamespaceType.PS4_US]: [WorldType.GENUDINE],
  [NamespaceType.PS4_EU]: [WorldType.CERES],
}

export const worldsByPlatform = {
  [PlatformType.PC]: [
    WorldType.CONNERY,
    WorldType.MILLER,
    WorldType.COBALT,
    WorldType.JAEGER,
    WorldType.APEX,
    WorldType.BRIGGS,
    WorldType.EMERALD,
    WorldType.SOLTECH,
  ],
  [PlatformType.PS4]: [WorldType.GENUDINE, WorldType.CERES],
}

export const worldsByNamespace = {
  [NamespaceType.PC]: [
    WorldType.CONNERY,
    WorldType.MILLER,
    WorldType.COBALT,
    WorldType.JAEGER,
    WorldType.APEX,
    WorldType.BRIGGS,
    WorldType.EMERALD,
    WorldType.SOLTECH,
  ],
  [NamespaceType.PS4_US]: [WorldType.GENUDINE],
  [NamespaceType.PS4_EU]: [WorldType.CERES],
}

export const worlds = {
  [WorldType.CONNERY]: {
    name: 'Connery',
    platform: PlatformType.PC,
    namespace: `${NamespaceType.PC}:${NamespaceVersionType.V2}`,
    environment: `${NamespaceType.PC}`,
    region: 'us',
    location: 'USA/Nevada',
  },
  [WorldType.MILLER]: {
    name: 'Miller',
    platform: PlatformType.PC,
    namespace: `${NamespaceType.PC}:${NamespaceVersionType.V2}`,
    environment: `${NamespaceType.PC}`,
    region: 'eu',
    location: 'Europe/Netherlands',
  },
  [WorldType.COBALT]: {
    name: 'Cobalt',
    platform: PlatformType.PC,
    namespace: `${NamespaceType.PC}:${NamespaceVersionType.V2}`,
    environment: `${NamespaceType.PC}`,
    region: 'eu',
    location: 'Europe/Netherlands',
  },
  [WorldType.EMERALD]: {
    name: 'Emerald',
    platform: PlatformType.PC,
    namespace: `${NamespaceType.PC}:${NamespaceVersionType.V2}`,
    environment: `${NamespaceType.PC}`,
    region: 'us',
    location: 'USA/Maryland',
  },
  [WorldType.JAEGER]: {
    name: 'Jaeger',
    platform: PlatformType.PC,
    namespace: `${NamespaceType.PC}:${NamespaceVersionType.V2}`,
    environment: `${NamespaceType.PC}`,
    region: 'us',
    location: 'USA/Maryland',
    special: true,
  },
  [WorldType.APEX]: {
    name: 'Apex',
    platform: PlatformType.PC,
    namespace: `${NamespaceType.PC}:${NamespaceVersionType.V2}`,
    environment: `${NamespaceType.PC}`,
    region: 'us',
    location: 'USA/Maryland',
    special: true,
  },
  [WorldType.BRIGGS]: {
    name: 'Briggs',
    platform: PlatformType.PC,
    namespace: `${NamespaceType.PC}:${NamespaceVersionType.V2}`,
    environment: `${NamespaceType.PC}`,
    region: 'au',
    location: 'Australia',
    special: true,
  },
  [WorldType.SOLTECH]: {
    name: 'SolTech',
    platform: PlatformType.PC,
    namespace: `${NamespaceType.PC}:${NamespaceVersionType.V2}`,
    environment: `${NamespaceType.PC}`,
    region: 'jp',
    location: 'Japan/Tokyo',
  },
  [WorldType.GENUDINE]: {
    name: 'Genudine',
    platform: PlatformType.PS4,
    namespace: `${NamespaceType.PS4_US}:${NamespaceVersionType.V2}`,
    environment: `${NamespaceType.PS4_US}`,
    region: 'us',
    location: 'USA/California',
  },
  [WorldType.CERES]: {
    name: 'Ceres',
    platform: PlatformType.PS4,
    namespace: `${NamespaceType.PS4_EU}:${NamespaceVersionType.V2}`,
    environment: `${NamespaceType.PS4_EU}`,
    region: 'eu',
    location: 'Europe/Netherlands',
  },
}

export default worlds
