# Harar Jugol, the Fortified Historic Town

> Ethiopia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `harar-jugol-the-fortified-historic-town-q20053321` |
| Coordinates | 9.3091, 42.1372 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/9.3091/42.1372)) |
| Wikidata | [Q20053321](https://www.wikidata.org/wiki/Q20053321) (CC0) |
| Wikidata class | fortification |
| Types | old town |
| Administrative area | Harar |
| Designations | World Heritage Site |
| UNESCO WHC id | 1189rev |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `heritage` | 1 |
| OSM `description` | Centro histórico amurallado de Harar, declarado Patrimonio de la Humanidad por la UNESCO. Jugol significa muro, por lo que Harrar Jugol es "El muro de Harrar" |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `location-only`, 289 elements (marker 5, road 340, building 1720, wall 10, zone 1, retaining-wall 2, waterway 1).

Evidence: documented 0, mapped 289, inferred 0, derived 0; heights documented 2, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21100340 historic=citywalls Q20053321 71 m from ledger point
- site is a site relation of 14 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (1162 x 828 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 1720 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 340 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/9.3091/42.1372) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; old town; sitelinks=2; wikidata:Q20053321 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 289 elements); data/traces/harar-jugol-the-fortified-historic-town-q20053321.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ethiopia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
