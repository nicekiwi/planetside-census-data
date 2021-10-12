import { NamespaceType } from "../enums/PlatformType";

export interface IStreamData {
  url: string;
  urlWss: string;
  urlComplete: (environment: NamespaceType, serviceId: string) => string;
}

export default <IStreamData>{
  url: "push.planetside2.com/streaming",
  urlWss: "wss://push.planetside2.com/streaming",
  urlComplete: (environment, serviceId) =>
    `wss://push.planetside2.com/streaming?environment=${environment}&service-id=s:${serviceId}`,
};
