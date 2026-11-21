# Burg Horkheim

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-horkheim-q1012492` |
| Coordinates | 49.1158, 9.166 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.1158/9.166)) |
| Wikidata | [Q1012492](https://www.wikidata.org/wiki/Q1012492) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Heilbronn |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 391 elements (outline 1, road 82, retaining-wall 4, building 284, zone 7, waterway 10, water 2, wall 1).

Evidence: documented 0, mapped 391, inferred 0, derived 0; heights documented 173, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/684027357 historic=castle Q1012492 9 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.1158/9.166) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q1012492 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 391 elements); data/traces/burg-horkheim-q1012492.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
