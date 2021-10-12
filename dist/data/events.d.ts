import { ZoneType } from "../enums/ZoneType";
export interface IEventsData {
    [key: number]: {
        name: string;
        description: string;
        type: number;
        zoneId?: ZoneType;
    };
}
declare const _default: IEventsData;
export default _default;
