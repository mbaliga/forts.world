# Tettnang Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tettnang-castle-q13479850` |
| Coordinates | 47.66985, 9.58488 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.66985/9.58488)) |
| Wikidata | [Q13479850](https://www.wikidata.org/wiki/Q13479850) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|museum\|château |
| Administrative area | Tettnang |
| Inception | 1712 |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 331 elements (outline 1, marker 2, road 154, building 186, waterway 22, zone 29, wall 7).

Evidence: documented 0, mapped 331, inferred 0, derived 0; heights documented 31, inferred 0, unknown 96.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/179755 historic=castle Q13479850 10 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 186 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 154 mapped (trace size budget); minor lanes are not drawn
- origin moved 14 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.66985/9.58488) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|museum\|château; sitelinks=4; wikidata:Q13479850 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 331 elements); data/traces/tettnang-castle-q13479850.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
