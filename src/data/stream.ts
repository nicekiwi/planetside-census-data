import { IStreamData } from "../types";

export default <IStreamData>{
  url: "push.planetside2.com/streaming",
  urlComplete: (environment, serviceId) =>
    `push.planetside2.com/streaming?environment=${environment}&service-id=s:${serviceId}`,
};
