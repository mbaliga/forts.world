# Elbisches Gate

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `elbisches-gate-q115940859` |
| Coordinates | 51.05304, 13.73796 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.05304/13.73796)) |
| Wikidata | [Q115940859](https://www.wikidata.org/wiki/Q115940859) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Dresden |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | yes |
| OSM `website` | http://www.skd.museum/de/museen-institutionen/residenzschloss/ |

## What the model contains

Tier **T1**, status `outline+walls`, 306 elements (outline 1, marker 13, road 356, waterway 1, building 32, wall 48, zone 42, water 1, retaining-wall 18).

Evidence: documented 0, mapped 306, inferred 0, derived 0; heights documented 46, inferred 0, unknown 52.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5764 historic=castle Q167314 85 m from ledger point
- roads capped: kept the 150 longest of 356 mapped (trace size budget); minor lanes are not drawn
- origin moved 90 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.05304/13.73796) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q115940859 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 306 elements); data/traces/elbisches-gate-q115940859.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
