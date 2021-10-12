export enum FactionType {
  VS = 1,
  NC = 2,
  TR = 3,
  NSO = 4,
}

export interface IFactionsData {
  [key: number]: {
    name: string;
    short: string;
    description: string;
    color: string;
  };
}
