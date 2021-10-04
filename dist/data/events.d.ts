import { ZONE } from "../enums/ZoneType";
export interface IEventsData {
    [key: number]: {
        name: string;
        description: string;
        type: number;
        zoneId?: ZONE;
    };
}
declare const _default: IEventsData;
export default _default;
