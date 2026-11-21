# Zámek Boskovice

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zamek-boskovice-q2240368` |
| Coordinates | 49.48491, 16.65948 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.48491/16.65948)) |
| Wikidata | [Q2240368](https://www.wikidata.org/wiki/Q2240368) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Boskovice |
| Inception | 1819 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | http://www.zamekboskovice.cz/ |

## What the model contains

Tier **T1**, status `outline+walls`, 229 elements (outline 1, marker 5, road 71, building 141, zone 1, wall 8, water 1, waterway 1).

Evidence: documented 0, mapped 229, inferred 0, derived 0; heights documented 89, inferred 0, unknown 60.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1060719 historic=castle Q2240368 4 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.48491/16.65948) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=4; wikidata:Q2240368 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 229 elements); data/traces/zamek-boskovice-q2240368.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
