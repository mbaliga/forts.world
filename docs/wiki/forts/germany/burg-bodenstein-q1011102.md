# Burg Bodenstein

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-bodenstein-q1011102` |
| Coordinates | 51.45361, 10.3425 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.45361/10.3425)) |
| Wikidata | [Q1011102](https://www.wikidata.org/wiki/Q1011102) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Leinefelde-Worbis |
| Designations | Heritage monument in Thuringia |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.burg-bodenstein.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 65 elements (outline 1, road 42, building 9, wall 3, retaining-wall 5, zone 5).

Evidence: documented 0, mapped 65, inferred 0, derived 0; heights documented 1, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/234932599 historic=castle Q1011102 5 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.45361/10.3425) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q1011102 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 65 elements); data/traces/burg-bodenstein-q1011102.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
