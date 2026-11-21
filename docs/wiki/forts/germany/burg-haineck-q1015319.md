# Burg Haineck

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-haineck-q1015319` |
| Coordinates | 51.1194, 10.3425 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.1194/10.3425)) |
| Wikidata | [Q1015319](https://www.wikidata.org/wiki/Q1015319) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Nazza |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 20 elements (outline 1, marker 1, wall 1, road 12, building 2, zone 3).

Evidence: documented 0, mapped 20, inferred 0, derived 0; heights documented 2, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/95359005 historic=castle Q1015319 33 m from ledger point
- origin moved 31 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.1194/10.3425) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=3; wikidata:Q1015319 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 20 elements); data/traces/burg-haineck-q1015319.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
