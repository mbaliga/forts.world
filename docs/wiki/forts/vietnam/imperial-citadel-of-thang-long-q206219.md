# Imperial Citadel of Thang Long

> Vietnam · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `imperial-citadel-of-thang-long-q206219` |
| Coordinates | 21.0325, 105.83972 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/21.0325/105.83972)) |
| Wikidata | [Q206219](https://www.wikidata.org/wiki/Q206219) (CC0) |
| Wikidata class | fort |
| Types | citadel\|geographical feature |
| Administrative area | Hanoi |
| Designations | World Heritage Site |
| UNESCO WHC id | 1328 |
| Wikipedia language editions | 42 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | https://whc.unesco.org/en/list/1328/ |

## What the model contains

Tier **T1**, status `outline+walls`, 356 elements (outline 1, marker 3, road 852, building 641, water 9, wall 91, zone 153, retaining-wall 26).

Evidence: documented 0, mapped 356, inferred 0, derived 0; heights documented 20, inferred 0, unknown 222.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21425205 historic=castle Q206219 428 m from ledger point
- pruned to the outline plus 80 m: 1776 -> 742 elements
- present-day buildings capped: kept the 200 nearest the outline centre of 234 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 432 mapped (trace size budget); minor lanes are not drawn
- origin moved 433 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/21.0325/105.83972) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel\|geographical feature; sitelinks=42; wikidata:Q206219 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 323 elements); data/traces/imperial-citadel-of-thang-long-q206219.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/vietnam.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
