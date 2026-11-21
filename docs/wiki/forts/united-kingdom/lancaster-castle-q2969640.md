# Lancaster Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lancaster-castle-q2969640` |
| Coordinates | 54.0498, -2.80562 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.0498/-2.80562)) |
| Wikidata | [Q2969640](https://www.wikidata.org/wiki/Q2969640) (CC0) |
| Wikidata class | castle |
| Types | castle\|debtors' prison\|defunct prison |
| Administrative area | Lancaster |
| Inception | 1093 |
| Designations | Grade I listed building |
| Wikipedia language editions | 16 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `website` | https://lancastercastle.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 387 elements (outline 1, marker 6, road 294, waterway 3, building 247, water 1, zone 10, wall 77, retaining-wall 19).

Evidence: documented 0, mapped 387, inferred 0, derived 0; heights documented 83, inferred 0, unknown 133.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/48815019 historic=castle Q2969640 30 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 247 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 294 mapped (trace size budget); minor lanes are not drawn
- origin moved 32 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.0498/-2.80562) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|debtors' prison\|defunct prison; sitelinks=16; wikidata:Q2969640 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 387 elements); data/traces/lancaster-castle-q2969640.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
