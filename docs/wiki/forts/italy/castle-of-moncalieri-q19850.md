# Castle of Moncalieri

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-moncalieri-q19850` |
| Coordinates | 45.00217, 7.68723 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.00217/7.68723)) |
| Wikidata | [Q19850](https://www.wikidata.org/wiki/Q19850) (CC0) |
| Wikidata class | castle |
| Types | castle\|art museum\|historic house museum\|Museum of the Italian Ministry of Culture\|Italian national museum\|historical park museum |
| Administrative area | Moncalieri |
| Designations | part of UNESCO World Heritage Site\|Italian national heritage |
| UNESCO WHC id | 823bis-004 |
| Wikipedia language editions | 14 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 285 elements (outline 1, road 109, waterway 2, zone 2, building 168, water 1, retaining-wall 1, wall 1).

Evidence: documented 0, mapped 285, inferred 0, derived 0; heights documented 24, inferred 0, unknown 146.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/66693329 historic=castle Q19850 83 m from ledger point
- origin moved 82 m from the ledger point to the outline centroid
- 1140 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.00217/7.68723) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|art museum\|historic house museum\|Museum of the Italian Ministry of Culture\|Italian national museum\|historical park museum; sitelinks=14; wikidata:Q19850 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 285 elements); data/traces/castle-of-moncalieri-q19850.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
