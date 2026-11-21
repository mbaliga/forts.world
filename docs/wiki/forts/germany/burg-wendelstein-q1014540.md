# Burg Wendelstein

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-wendelstein-q1014540` |
| Coordinates | 50.8303, 10.0244 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.8303/10.0244)) |
| Wikidata | [Q1014540](https://www.wikidata.org/wiki/Q1014540) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Vacha |
| Inception | 1260 |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 320 elements (outline 1, marker 9, road 61, water 1, zone 7, building 226, wall 7, waterway 7, retaining-wall 1).

Evidence: documented 0, mapped 320, inferred 0, derived 0; heights documented 6, inferred 0, unknown 228.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/262520525 historic=castle Q1014540 154 m from ledger point
- origin moved 155 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.8303/10.0244) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q1014540 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 320 elements); data/traces/burg-wendelstein-q1014540.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
