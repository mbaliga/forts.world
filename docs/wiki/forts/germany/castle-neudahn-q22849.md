# Castle Neudahn

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-neudahn-q22849` |
| Coordinates | 49.1631, 7.75722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.1631/7.75722)) |
| Wikidata | [Q22849](https://www.wikidata.org/wiki/Q22849) (CC0) |
| Wikidata class | castle |
| Types | rock castle |
| Administrative area | Dahn |
| Inception | 1240 |
| Designations | cultural heritage monument in Rhineland-Palatinate |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 73 elements (outline 1, road 41, water 4, waterway 8, building 3, zone 2, cliff 4, wall 10).

Evidence: documented 0, mapped 73, inferred 0, derived 0; heights documented 0, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13430159 historic=castle Q22849 16 m from ledger point
- origin moved 15 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.1631/7.75722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; rock castle; sitelinks=5; wikidata:Q22849 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 73 elements); data/traces/castle-neudahn-q22849.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
