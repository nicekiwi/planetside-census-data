import { ZoneType } from '../enums/ZoneType'

export const zoneIds = [
  ZoneType.INDAR,
  ZoneType.HOSSIN,
  ZoneType.AMERISH,
  ZoneType.ESAMIR,
  ZoneType.OSHUR,
  ZoneType.NEXUS,
  ZoneType.EXTINCTION,
  ZoneType.ASCENSION,
  ZoneType.DESOLATION,
  ZoneType.DESOLATION_2,
  ZoneType.VR,
  ZoneType.VR_NC,
  ZoneType.VR_TR,
  ZoneType.VR_VS,
]

export const liveZoneIds = [
  ZoneType.INDAR,
  ZoneType.HOSSIN,
  ZoneType.AMERISH,
  ZoneType.ESAMIR,
  ZoneType.OSHUR,
]

export const outfitWarZoneIds = [
  ZoneType.NEXUS,
  ZoneType.DESOLATION,
  ZoneType.DESOLATION_2,
]

export const zones = {
  [ZoneType.INDAR]: {
    name: 'Indar',
    description:
      'Large desert continent, located in the region a sea once occupied.',
    keyword: 'desert',
    warpgateRegions: [2201, 2202, 2203],
  },
  [ZoneType.HOSSIN]: {
    name: 'Hossin',
    description:
      'Vast swamp, featuring exaggerated fauna and tall hills, the skyline filled with gargantuan trees towering hundreds of meters high.',
    keyword: 'swamp',
    warpgateRegions: [4230, 4240, 4250],
  },
  [ZoneType.AMERISH]: {
    name: 'Amerish',
    description:
      'Lush, beautiful continent, plentiful in plantlife and covered in majestic mountain ranges.',
    keyword: 'lush',
    warpgateRegions: [6001, 6002, 6003],
  },
  [ZoneType.ESAMIR]: {
    name: 'Esamir',
    description:
      'Icy tundra with wide barren wastelands divided by frozen rivers, violet crystals erupting from the snow to color an otherwise lifeless landscape.',
    keyword: 'icy',
    warpgateRegions: [18029, 18030, 18062],
  },
  [ZoneType.OSHUR]: {
    name: 'Oshur',
    description:
      'Oshur\'s sandy archipelago and sparkling blue waters provide opportunities for engagement by land, sea, and air.',
    keyword: 'island',
    warpgateRegions: [],
  },
  [ZoneType.VR]: {
    name: 'VR Training Room (NC)',
    description:
      'Experiment with all weapons, vehicles and attachments in your empire\'s own VR Training simulator.',
    keyword: 'vr',
    warpgateRegions: [],
  },
  [ZoneType.VR_NC]: {
    name: 'VR Training Room (NC)',
    description:
      'Experiment with all weapons, vehicles and attachments in your empire\'s own VR Training simulator.',
    keyword: 'vr',
    warpgateRegions: [],
  },
  [ZoneType.VR_TR]: {
    name: 'VR Training Room (TR)',
    description:
      'Experiment with all weapons, vehicles and attachments in your empire\'s own VR Training simulator.',
    keyword: 'vr',
    warpgateRegions: [],
  },
  [ZoneType.VR_VS]: {
    name: 'VR Training Room (VS)',
    description:
      'Experiment with all weapons, vehicles and attachments in your empire\'s own VR Training simulator.',
    keyword: 'vr',
    warpgateRegions: [],
  },
  [ZoneType.KOLTYR]: {
    name: 'Koltyr',
    description: 'Remarkably small.',
    keyword: 'small',
    warpgateRegions: [],
  },
  [ZoneType.DESOLATION]: {
    name: 'Desolation',
    description: 'Far from Auraxis, an asteroid belt hides ancient Vanu artifacts, providing more questions than answers.',
    keyword: 'battle',
    warpgateRegions: [],
  },
  [ZoneType.DESOLATION_2]: {
    name: 'Desolation',
    description: 'Far from Auraxis, an asteroid belt hides ancient Vanu artifacts, providing more questions than answers.',
    keyword: 'battle',
    warpgateRegions: [],
  },
  [ZoneType.NEXUS]: {
    name: 'Nexus',
    description: 'The frigid battle island of Nexus is marked by icy corridors and steep elevation changes.',
    keyword: 'battle',
    warpgateRegions: [],
  },
  [ZoneType.EXTINCTION]: {
    name: 'Extinction',
    description: '',
    keyword: 'unknown',
    warpgateRegions: [],
  },
  [ZoneType.ASCENSION]: {
    name: 'Ascension',
    description: '',
    keyword: 'unknown',
    warpgateRegions: [],
  },
}

export default zones
