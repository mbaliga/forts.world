# Marburg Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `marburg-castle-q538301` |
| Coordinates | 50.81019, 8.767 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.81019/8.767)) |
| Wikidata | [Q538301](https://www.wikidata.org/wiki/Q538301) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Marburg |
| Inception | 1200 |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.uni-marburg.de/uni-museum/kulturgeschichte |

## What the model contains

Tier **T1**, status `outline+walls`, 296 elements (outline 1, marker 5, zone 2, road 164, building 223, waterway 1, wall 7, retaining-wall 10).

Evidence: documented 0, mapped 296, inferred 0, derived 0; heights documented 4, inferred 0, unknown 133.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3081305 historic=castle Q538301 20 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 223 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 164 mapped (trace size budget); minor lanes are not drawn
- origin moved 20 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.81019/8.767) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=15; wikidata:Q538301 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 296 elements); data/traces/marburg-castle-q538301.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
