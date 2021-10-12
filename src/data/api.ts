import { NamespaceType } from "..";

export interface IApiData {
  url: string;
  urlHttps: string;
  urlComplete: (namespace: NamespaceType, serviceId: string) => string;
}

export default <IApiData>{
  url: "census.daybreakgames.com",
  urlHttps: "https://census.daybreakgames.com",
  urlComplete: (namespace, serviceId) =>
    `https://census.daybreakgames.com/s:${serviceId}/get/${namespace}/`,
};
