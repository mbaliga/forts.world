# El Glaoui Palace

> Morocco · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `el-glaoui-palace-q64896422` |
| Coordinates | 34.05905, -4.97708 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.05905/-4.97708)) |
| Wikidata | [Q64896422](https://www.wikidata.org/wiki/Q64896422) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Fez |
| Designations | part of UNESCO World Heritage Site |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 148 elements (outline 1, road 128, zone 1, building 16, wall 1, waterway 1).

Evidence: documented 0, mapped 148, inferred 0, derived 0; heights documented 2, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8161950 historic=castle Q67624182 556 m from ledger point
- origin moved 556 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.05905/-4.97708) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=4; wikidata:Q64896422 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 148 elements); data/traces/el-glaoui-palace-q64896422.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/morocco.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
