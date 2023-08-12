# Planetside Census Data

Common data used in my Planetside 2 apps.

Powers the [ps2.nice.kiwi](https://ps2.nice.kiwi) population tracker.

## Usage

### Install

```bash
npm i planetside-census-data
```

### Sources:

- https://census.daybreakgames.com
- https://planetside.fandom.com

### Changelog

### 2.2.0 - 12/08/2023
- Move `CensusStream` and `stream` interfaces into its own package. [planetside-census-stream](https://www.npmjs.com/package/planetside-census-stream)
- Move `CensusRequest` into its own package. [planetside-census-request](https://www.npmjs.com/package/planetside-census-request)

#### 2.1.1 - 11/08/2023
- Fix imports failing
- Revert to import from base package again.

#### 2.1.0 - 11/08/2023
- Updated README with correct usage of `CensusRequest`.
- **Breaking** Remove `index.ts`. Import directly form `data`, `enums`, `interfaces`, `request` or `stream` instead.
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
