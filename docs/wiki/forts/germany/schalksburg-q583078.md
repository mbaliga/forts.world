# Schalksburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schalksburg-q583078` |
| Coordinates | 48.2344, 8.92 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.2344/8.92)) |
| Wikidata | [Q583078](https://www.wikidata.org/wiki/Q583078) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Laufen an der Eyach |
| Inception | 1100 |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `castle_type` | defensive |
| OSM `ruins` | castle |
| OSM `website` | https://burgfelderinfo.de/schalksburg/ |

## What the model contains

Tier **T1**, status `outline+walls`, 59 elements (outline 1, marker 3, road 44, building 1, zone 2, cliff 5, wall 3).

Evidence: documented 0, mapped 59, inferred 0, derived 0; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1465593998 historic=ruins Q583078 58 m from ledger point
- origin moved 61 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.2344/8.92) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=2; wikidata:Q583078 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 59 elements); data/traces/schalksburg-q583078.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
