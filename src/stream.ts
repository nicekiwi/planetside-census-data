import { EventEmitter } from 'events'
import Websocket from 'ws'

import { NamespaceType } from './enums/NamespaceType'
import { MessageType } from './enums/StreamEventType'
import { IHeartbeatResponse, IServiceMessageResponse } from './interfaces/stream'

export const streamUrl = 'push.planetside2.com/streaming'

export const streamUrlWss = 'wss://push.planetside2.com/streaming'

export function streamUrlComplete(namespace: NamespaceType, serviceId: string): string {
  return `${streamUrlWss}?environment=${namespace}&service-id=s:${serviceId}`
}

export class CensusStream extends EventEmitter {
  private readonly ws!: Websocket

  constructor(
    private readonly platform: NamespaceType,
    private readonly serviceId: string
  ) {
    super()

    this.ws = new Websocket(streamUrlComplete(this.platform, this.serviceId))

    this.ws.once('open', () => this.emit('open'))
    this.ws.on('message', (data: string) => {
      this.onData(data)
    })

    this.handleTypes()
  }

  private onData(data: string): void {
    try {
      this.emit('data', JSON.parse(data))
    } catch (e) {
      console.debug('JSON data is not valid', e, data)
    }
  }

  private handleTypes(): void {
    this.on('data', (data: IHeartbeatResponse | IServiceMessageResponse) => {
      const type = data.type

      if (type === MessageType.HEARTBEAT) {
        this.emit('heartbeat', data)
      } else if (type === MessageType.SERVICE_MESSAGE) {
        this.emit(data.payload.event_name, data)
      }
    })
  }

  subscribe(
    worlds: number[],
    eventNames: string[],
    characters: string[] = ['all'],
    logicalAndCharactersWithWorlds = false
  ): void {
    const payload = {
      service: 'event',
      action: 'subscribe',
      worlds,
      eventNames,
      characters,
      logicalAndCharactersWithWorlds,
    }

    try {
      this.ws.send(JSON.stringify(payload))
    } catch (e) {
      console.debug('Failed Subscribing to Event', e, payload)
    }
  }

  unsubscribe(worlds = [], eventNames: string[], characters = ['all']): void {
    const payload = {
      service: 'event',
      action: 'clearSubscribe',
      worlds,
      characters,
      eventNames,
    }

    try {
      this.ws.send(JSON.stringify(payload))
    } catch (e) {
      console.debug('Failed Unsubscribing to Event', e, payload)
    }
  }

  unsubscribeAll(): void {
    const payload = {
      service: 'event',
      action: 'clearSubscribe',
      all: 'true',
    }

    try {
      this.ws.send(JSON.stringify(payload))
    } catch (e) {
      console.debug('Failed Unsubscribing to Event', e, payload)
    }
  }
}

export default CensusStream
