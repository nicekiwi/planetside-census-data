import { PlatformType } from "../enums/PlatformType";
import { WorldType } from "../enums/WorldType";
export interface IWorldsByPlatformData {
  [key: string]: WorldType[];
}

export default <IWorldsByPlatformData>{
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
};
