# Durham Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `durham-castle-q752266` |
| Coordinates | 54.7749, -1.57558 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.7749/-1.57558)) |
| Wikidata | [Q752266](https://www.wikidata.org/wiki/Q752266) (CC0) |
| Wikidata class | castle |
| Types | castle\|university museum\|historic house museum |
| Administrative area | City of Durham |
| Inception | 1072 |
| Designations | part of UNESCO World Heritage Site\|Grade I listed building |
| UNESCO WHC id | 370 |
| Wikipedia language editions | 46 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 368 elements (outline 1, marker 20, waterway 5, road 273, building 300, zone 16, wall 48, retaining-wall 8).

Evidence: documented 0, mapped 368, inferred 0, derived 0; heights documented 3, inferred 0, unknown 173.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/81522967 historic=castle Q752266 89 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 300 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 273 mapped (trace size budget); minor lanes are not drawn
- origin moved 90 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.7749/-1.57558) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|university museum\|historic house museum; sitelinks=46; wikidata:Q752266 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 368 elements); data/traces/durham-castle-q752266.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
