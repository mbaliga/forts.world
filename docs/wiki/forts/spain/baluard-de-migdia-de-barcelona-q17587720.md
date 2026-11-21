# Baluard de Migdia de Barcelona

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `baluard-de-migdia-de-barcelona-q17587720` |
| Coordinates | 41.3829, 2.18564 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.3829/2.18564)) |
| Wikidata | [Q17587720](https://www.wikidata.org/wiki/Q17587720) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Sant Pere, Santa Caterina i la Ribera |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 273 elements (outline 1, marker 8, road 338, building 92, zone 16, wall 2, water 1, waterway 2, retaining-wall 1).

Evidence: documented 0, mapped 273, inferred 0, derived 0; heights documented 68, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/338522969 historic=castle Q19595401 113 m from ledger point
- roads capped: kept the 150 longest of 338 mapped (trace size budget); minor lanes are not drawn
- origin moved 108 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.3829/2.18564) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=3; wikidata:Q17587720 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 273 elements); data/traces/baluard-de-migdia-de-barcelona-q17587720.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
