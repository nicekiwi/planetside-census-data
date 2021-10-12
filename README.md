# Planetside Census Data

Common data used in my Planetside 2 apps.

#### Sources:

- https://census.daybreakgames.com
- https://planetside.fandom.com

### Changelog

#### 1.4.1 - 12/10/2021

- Add `urlComplete` frunction to `api.js`.
- Add `urlWss` as a variable and as a param to `urlComplete` in `stream.js`.

#### 1.4.0 - 12/10/2021

- Yet another large refactor of names, types and variables.

#### 1.3.0 - 11/10/2021

- Add `CensusStreamEventType` and `MetagameEventStateType` enums.
- Fix wrong param required for `urlComplete` function.
- Rename `PLATFORM_API` enum to `PLATFORM_ENVIROMENT`.

#### 1.2.0 - 10/10/2021

- Try out new type publishing options
- Include `WorldStateType` enum

#### 1.1.0 - 4/10/2021

- Refactored interfaces.
- Fixed Jaeger missing form `worldsByPlatform`.
- Added Events data.
- Returned Briggs (as its still returned from the API).
- Added Apex world.
