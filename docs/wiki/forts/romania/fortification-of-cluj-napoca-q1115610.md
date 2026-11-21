# Fortification of Cluj-Napoca

> Romania · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortification-of-cluj-napoca-q1115610` |
| Coordinates | 46.76694, 23.58745 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.76694/23.58745)) |
| Wikidata | [Q1115610](https://www.wikidata.org/wiki/Q1115610) (CC0) |
| Wikidata class | fortification |
| Types | rampart |
| Administrative area | Cluj County |
| Designations | Historic Monument |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `location-only`, 351 elements (marker 37, road 537, zone 28, building 750, waterway 3, wall 13).

Evidence: documented 0, mapped 351, inferred 0, derived 0; heights documented 4, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20281676 historic=citywalls 343 m from ledger point
- site is a site relation of 10 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (936 x 442 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 750 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 537 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.76694/23.58745) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rampart; sitelinks=3; wikidata:Q1115610 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 298 elements); data/traces/fortification-of-cluj-napoca-q1115610.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/romania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
