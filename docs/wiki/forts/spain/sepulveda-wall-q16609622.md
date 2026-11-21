# Sepulveda Wall

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sepulveda-wall-q16609622` |
| Coordinates | 41.29788, -3.74936 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.29788/-3.74936)) |
| Wikidata | [Q16609622](https://www.wikidata.org/wiki/Q16609622) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Sepúlveda |
| Designations | Historic Ensemble |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 316 elements (outline 1, road 84, zone 1, building 223, wall 4, cliff 1, waterway 2).

Evidence: documented 0, mapped 316, inferred 0, derived 0; heights documented 19, inferred 0, unknown 208.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/607985698 historic=castle Q50297279 69 m from ledger point
- origin moved 70 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.29788/-3.74936) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q16609622 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 316 elements); data/traces/sepulveda-wall-q16609622.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
