import { PLATFORM } from "../enums/PlatformType";
import { WORLD } from "../enums/WorldType";

export interface IWorldsByPlatformData {
  [key: string]: WORLD[];
}

export default <IWorldsByPlatformData>{
  [PLATFORM.PC]: [
    WORLD.CONNERY,
    WORLD.MILLER,
    WORLD.COBALT,
    WORLD.JAEGER,
    WORLD.APEX,
    WORLD.BRIGGS,
    WORLD.EMERALD,
    WORLD.SOLTECH,
  ],
  [PLATFORM.PS4]: [WORLD.GENUDINE, WORLD.CERES],
};
