# Planetside Census Data

Common data used in my Planetside 2 apps.

Powers the [ps2.nice.kiwi](https://ps2.nice.kiwi) population tracker.

## Usage

### Install

```bash
npm i planetside-census-data
```

### Examples

#### CensusRequest with list validation

```ts
import CensusRequest from 'planetside-census-data/dist/request';
import { NamespaceType } from 'planetside-census-data';

interface ICharacterFaction {
  character_id: string;
  faction_id: number;
}

const api = new CensusRequest(NamespaceType.PC, 's:example')

const getCharacters = async (
  ids: stirng[],
  collection: string = undefined
) => {
  return await api.get<ICharacterFaction[]>({
    uri: 'character',
    params: {
      'character_id': ids.join(','),
      'c:show': ['character_id','faction_id']
    },
    collection
  });
}

const characters = await getCharacters([
  '54200000000000000',
  '54200000000000001'
], 'character_list');

console.log(characters);

// [
//   {
//     character_id: '54200000000000000',
//     faction_id: 1,
//   },
//   {
//     character_id: '54200000000000001',
//     faction_id: 2,
//   }
// ]
```

#### CensusRequest without list validation

```ts
import CensusRequest from 'planetside-census-data/dist/request';
import { NamespaceType } from 'planetside-census-data';

interface ICharacterFaction {
  character_id: string;
  faction_id: number;
}

const api = new CensusRequest(NamespaceType.PC, 's:example')

const getCharacters = async (
  ids: stirng[],
  collection: string = undefined
) => {
  return await api.get<ICharacterFaction[]>({
    uri: 'character',
    params: {
      'character_id': ids.join(','),
      'c:show': ['character_id','faction_id']
    },
    collection
  });
}

const characters = await getCharacters([
  '54200000000000000',
  '54200000000000001'
]);

console.log(characters);

// {
//    character_list: [
//      {
//        character_id: '54200000000000000',
//        faction_id: 1,
//      },
//      {
//        character_id: '54200000000000001',
//        faction_id: 2,
//      }
//    ],
//    returned: 2
// }
```

#### CensusStream

```ts
import CensusStream from 'planetside-census-data/dist/stream';
import { NamespaceType, StreamEventType } from 'planetside-census-data';

const stream = new CensusStream(
  platform: NamespaceType.PC,
  serviceId: 's:example'
);

stream.on('open', () => {
  console.log('Connected to Census stream');

  stream.subscribe(
    worlds: [WorldType.CONNERY],
    eventNames: [StreamEventType.CHARACTER_DEATH]
  );

  console.log('Subscribed to character Death events on Connery');
});

stream.on(StreamEventType.CHARACTER_DEATH, (data: ServiceMessageResponse<DeathPayload>) => {
  console.log(data);
});

// Connected to Census stream
// Subscribed to character Death events on Connery
// {
//   "payload":{
//     "attacker_character_id":"5429026007696236657","attacker_fire_mode_id":"24103",
//     "attacker_loadout_id":"1",
//     "attacker_team_id":"2",
//     "attacker_vehicle_id":"0",
//     "attacker_weapon_id":"24003","character_id":"5429152843598287233","character_loadout_id":"32",
//     "event_name":"Death",
//     "is_critical":"0",
//     "is_headshot":"0",
//     "team_id":"1",
//     "timestamp":"1681105322",
//     "world_id":"1",
//     "zone_id":"8"
//   },
//   "service":"event",
//   "type":"serviceMessage"
// }

```

### Sources:

- https://census.daybreakgames.com
- https://planetside.fandom.com
- `CensusStream` base class blatantly stolen from [planetside-stream-api](https://github.com/Planetside-Community-Devs/planetside-stream-api)

### Changelog

#### 2.1.1 - 11/08/2023
- Fix imports failing
- Revert to import from base package again.

#### 2.1.0 - 11/08/2023
- Updated README with correct usage of `CensusRequest`.
- **Breaking** Remove `index.d.ts`. Import directly form `data`, `enums`, `interfaces`, `request` or `stream` instead.
- **Breaking** Remove `data/events.ts`, it changes too often to keep static.
- Move `stream` interfaces into own file.
- Move `namespaces` into own file.
- Add `getZoneNameById` function.
- Update dependencies.

#### 2.0.0 - 10/04/2023

- **New** Add `CensusRequest` client to query the Census API.
- **New** Add `CensusStream` client to connect to the Census stream.
- **Breaking** Update minimum node version to `18.x`
- Add types for `stream` and `request` clients.
- Add new zone data

#### 1.5.1 - 31/01/2022

- Add Oshur zone data (Thanks Mono).
- **Breaking** Fix `environment` typo on World data.
- Fix wrong name on Apex server.

#### 1.5.0 - 25/10/2021

- Add VR Training rooms and warpgate region IDs to Zone data.
- Add possible new Koltyr event data from patch notes: https://forums.daybreakgames.com/ps2/index.php?threads/oct-20-2021-pc-hotfix.257622/.
- **Breaking** bump Koltyr and Desolation fake zone IDs.

#### 1.4.2 - 13/10/2021

- Fix type definition for `api.urlComplete` to return `string` instead of `void`.

#### 1.4.1 - 12/10/2021

- Add `urlComplete` frunction to `api.js`.
- Add `urlWss` as a variable and as a param to `urlComplete` in `stream.js`.

#### 1.4.0 - 12/10/2021

- Yet another large refactor of names, types and variables.

#### 1.3.0 - 11/10/2021

- Add `CensusStreamEventType` and `MetagameEventStateType` enums.
- Fix wrong param required for `urlComplete` function.
- Rename `PLATFORM_API` enum to `PLATFORM_ENVIRONMENT`.

#### 1.2.0 - 10/10/2021

- Try out new type publishing options
- Include `WorldStateType` enum

#### 1.1.0 - 4/10/2021

- Refactored interfaces.
- Fixed Jaeger missing form `worldsByPlatform`.
- Added Events data.
- Returned Briggs (as its still returned from the API).
- Added Apex world.
