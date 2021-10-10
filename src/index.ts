import * as Types from "./types";

import api from "./data/api";
import stream from "./data/stream";
import factions from "./data/factions";
import zones from "./data/zones";
import worlds from "./data/worlds";
import events from "./data/events";
import worldsByPlatform from "./data/worldsByPlatform";

export default <Types.IData>{
  api,
  stream,
  worldsByPlatform,
  worlds,
  events,
  zones,
  factions,
};

export { Types };
