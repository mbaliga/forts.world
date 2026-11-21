# Apothekerturm

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `apothekerturm-q121704585` |
| Coordinates | 52.1323, 11.6387 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.1323/11.6387)) |
| Wikidata | [Q121704585](https://www.wikidata.org/wiki/Q121704585) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Magdeburg |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `location-only`, 380 elements (marker 277, road 1114, building 193, zone 107, waterway 4, wall 21, retaining-wall 3, water 2).

Evidence: documented 0, mapped 380, inferred 0, derived 0; heights documented 23, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/194991 historic=castle Q1408941 1069 m from ledger point
- site is a site relation of 51 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (4977 x 8093 m)
- present-day buildings capped: kept the 30 nearest the outline centre of 193 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 40 longest of 1114 mapped (trace size budget); minor lanes are not drawn
- elements capped: kept the 380 nearest the ledger point of 484 mapped (trace size budget); the rest are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.1323/11.6387) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q121704585 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 380 elements); data/traces/apothekerturm-q121704585.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
