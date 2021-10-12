import { NamespaceType } from "../enums/PlatformType";

export interface IStreamData {
  url: string;
  urlComplete: (environment: NamespaceType, serviceId: string) => string;
}

export default <IStreamData>{
  url: "push.planetside2.com/streaming",
  urlComplete: (environment, serviceId) =>
    `push.planetside2.com/streaming?environment=${environment}&service-id=s:${serviceId}`,
};
