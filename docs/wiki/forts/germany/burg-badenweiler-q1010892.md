# Burg Badenweiler

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-badenweiler-q1010892` |
| Coordinates | 47.8025, 7.6682 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.8025/7.6682)) |
| Wikidata | [Q1010892](https://www.wikidata.org/wiki/Q1010892) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Badenweiler |
| Inception | 1122 |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 170 elements (outline 1, marker 4, road 98, building 47, wall 6, zone 9, waterway 1, retaining-wall 3).

Evidence: documented 0, mapped 170, inferred 0, derived 0; heights documented 0, inferred 0, unknown 57.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/297644513 historic=castle Q1010892 32 m from ledger point
- origin moved 32 m from the ledger point to the outline centroid
- 15 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.8025/7.6682) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=7; wikidata:Q1010892 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 170 elements); data/traces/burg-badenweiler-q1010892.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
