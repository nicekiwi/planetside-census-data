import { FactionShortType, FactionType } from '../enums/FactionType';
export declare const factions: {
    1: {
        name: string;
        description: string;
        color: string;
        short: FactionShortType;
    };
    2: {
        name: string;
        description: string;
        color: string;
        short: FactionShortType;
    };
    3: {
        name: string;
        description: string;
        color: string;
        short: FactionShortType;
    };
    4: {
        name: string;
        description: string;
        color: string;
        short: FactionShortType;
    };
};
export declare function factionShortToId(short: FactionShortType): FactionType | undefined;
export declare function factionIdToShort(id: FactionType): FactionShortType;
export default factions;
