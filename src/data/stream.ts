import { IStreamData } from "../types";

export default <IStreamData>{
  url: "push.planetside2.com/streaming",
  urlComplete: (worldId, serviceId) =>
    `push.planetside2.com/streaming?environment=${worldId}&service-id=s:${serviceId}`,
};
