import axios, { type AxiosError, type AxiosRequestConfig, type AxiosResponse } from 'axios'
import get from 'lodash.get'
import has from 'lodash.has'

import { NamespaceVersionType, NamespaceType } from './enums/NamespaceType'

export const requestUrl = 'census.daybreakgames.com'

export const requestUrlHttps = 'https://census.daybreakgames.com'

export function requestUrlComplete(namespace: NamespaceType, serviceId: string): string {
  return `${requestUrlHttps}/s:${serviceId}/get/${namespace}:${NamespaceVersionType.V2}/`
}

export interface ICensusRequestConfig extends Omit<AxiosRequestConfig, 'method' | 'url'> {
  uri: string
  collection?: string
}

export type ICensusRequestError<T = unknown> = AxiosError<T>

export class CensusRequest {
  private readonly url: string
  private response!: AxiosResponse

  constructor(namespace: NamespaceType, serviceId: string) {
    this.url = requestUrlComplete(namespace, serviceId)
  }

  async get<T>({ uri, collection, ...config }: ICensusRequestConfig): Promise<T> {
    this.response = await axios.get<T>(`${this.url}/${uri}`, config)

    if (collection === undefined) {
      return this.response.data
    }

    return this.validate<T>(collection)
  }

  validate<T>(collection: string): T {
    if (!has(this.response.data, collection)) {
      throw new Error(`Collection '${collection}' not found in response`)
    }

    return get(this.response.data, collection)
  }
}

export default CensusRequest
