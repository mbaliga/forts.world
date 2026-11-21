# Site of Qocho City

> China · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `site-of-qocho-city-q16078256` |
| Coordinates | 42.85001, 89.5235 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.85001/89.5235)) |
| Wikidata | [Q16078256](https://www.wikidata.org/wiki/Q16078256) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|heritage site\|cultural heritage of China |
| Administrative area | Turpan |
| Designations | part of UNESCO World Heritage Site\|Major Historical and Cultural Site Protected at the National Level |
| UNESCO WHC id | 1442-005 |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 380 elements (outline 1, zone 2, road 20, wall 622, waterway 1, building 5).

Evidence: documented 0, mapped 380, inferred 0, derived 0; heights documented 251, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/187273387 historic=archaeological_site 368 m from ledger point
- pruned to the outline plus 60 m: 651 -> 401 elements
- elements capped: kept the 380 nearest the outline centre of 401 mapped (trace size budget); the rest are not drawn
- origin moved 357 m from the ledger point to the centre of the mapped site
- 2025 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.85001/89.5235) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|heritage site\|cultural heritage of China; sitelinks=3; wikidata:Q16078256 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 380 elements); data/traces/site-of-qocho-city-q16078256.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
