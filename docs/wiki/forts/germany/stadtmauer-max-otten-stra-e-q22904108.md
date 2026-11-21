# Stadtmauer Max-Otten-Straße

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtmauer-max-otten-stra-e-q22904108` |
| Coordinates | 52.1354, 11.63489 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.1354/11.63489)) |
| Wikidata | [Q22904108](https://www.wikidata.org/wiki/Q22904108) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Magdeburg |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `location-only`, 377 elements (marker 178, road 929, zone 101, building 249, retaining-wall 3, wall 24, water 1).

Evidence: documented 0, mapped 377, inferred 0, derived 0; heights documented 32, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/194991 historic=castle Q1408941 1078 m from ledger point
- site is a site relation of 51 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (4977 x 8093 m)
- present-day buildings capped: kept the 30 nearest the outline centre of 249 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 40 longest of 929 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.1354/11.63489) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q22904108 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 377 elements); data/traces/stadtmauer-max-otten-stra-e-q22904108.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
