# Burg Hüls

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-huls-q1012538` |
| Coordinates | 51.3747, 6.51222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.3747/6.51222)) |
| Wikidata | [Q1012538](https://www.wikidata.org/wiki/Q1012538) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Krefeld |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 8 |
| OSM `description` | Burgruine der ehem. Burg Hüls |

## What the model contains

Tier **T1**, status `outline-only`, 226 elements (outline 1, marker 3, road 91, building 481, waterway 3, zone 5, retaining-wall 1, water 2).

Evidence: documented 0, mapped 226, inferred 0, derived 0; heights documented 5, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14283462 historic=castle Q1012538 7 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 481 mapped (trace size budget); the rest of the town is not drawn
- origin moved 9 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.3747/6.51222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q1012538 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 226 elements); data/traces/burg-huls-q1012538.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
