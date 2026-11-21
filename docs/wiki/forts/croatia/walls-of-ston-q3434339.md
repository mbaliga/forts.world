# Walls of Ston

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `walls-of-ston-q3434339` |
| Coordinates | 42.838, 17.697 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.838/17.697)) |
| Wikidata | [Q3434339](https://www.wikidata.org/wiki/Q3434339) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Ston Municipality |
| Designations | part of UNESCO World Heritage Site |
| Wikipedia language editions | 16 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 248 elements (outline 1, marker 3, road 107, water 7, zone 7, building 103, wall 16, coastline 2, waterway 2).

Evidence: documented 0, mapped 248, inferred 0, derived 1; heights documented 5, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/180367431 historic=castle 117 m from ledger point
- origin moved 118 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":3,"medianInside":-0.1,"medianOutside":2.8}
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.838/17.697) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=16; wikidata:Q3434339 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 248 elements); data/traces/walls-of-ston-q3434339.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
