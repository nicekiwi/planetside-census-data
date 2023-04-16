import { FactionShortType, FactionType } from '../enums/FactionType'

export const factions = {
  [FactionType.VS]: {
    name: 'Vanu Sovereignty',
    description: 'What we would call true believers.',
    color: 'purple',
    short: FactionShortType.VS,
  },
  [FactionType.NC]: {
    name: 'New Conglomerate',
    description:
      'Separatist faction determined to remain free of the controlling and domineering Republic.',
    color: 'blue',
    short: FactionShortType.NC,
  },
  [FactionType.TR]: {
    name: 'Terran Republic',
    description:
      'Built around order and the rule of law, with the central tenet that no individual is above the rules.',
    color: 'red',
    short: FactionShortType.TR,
  },
  [FactionType.NSO]: {
    name: 'Nanite Systems Operatives',
    description: 'Unaffiliated remotely-controlled combat units.',
    color: 'white',
    short: FactionShortType.NSO,
  },
}

export function factionShortToId(
  short: FactionShortType
): FactionType | undefined {
  return (Object.keys(factions).map(Number) as FactionType[]).find(
    (id) => factions[id].short === short
  )
}

export function factionIdToShort(id: FactionType): FactionShortType {
  return factions[id].short
}

export default factions
