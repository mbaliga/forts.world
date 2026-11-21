# Arberg Castle

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `arberg-castle-q41296960` |
| Coordinates | 49.14135, 10.61795 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.14135/10.61795)) |
| Wikidata | [Q41296960](https://www.wikidata.org/wiki/Q41296960) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Arberg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |
| OSM `heritage` | 4 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `location-only`, 181 elements (marker 3, road 45, zone 5, building 344, water 1, wall 7).

Evidence: documented 0, mapped 181, inferred 0, derived 0; heights documented 0, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18027057 historic=citywalls Q41296924 213 m from ledger point
- site is a site relation of 6 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (238 x 190 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 344 mapped (trace size budget); the rest of the town is not drawn
- origin moved 170 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.14135/10.61795) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=0; wikidata:Q41296960 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 181 elements); data/traces/arberg-castle-q41296960.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
