# Castle Meyenburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-meyenburg-q2242429` |
| Coordinates | 53.31621, 12.24295 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.31621/12.24295)) |
| Wikidata | [Q2242429](https://www.wikidata.org/wiki/Q2242429) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|château |
| Administrative area | Meyenburg |
| Designations | architectural heritage monument in Brandenburg |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 227 elements (outline 1, road 36, building 180, waterway 8, wall 2).

Evidence: documented 0, mapped 227, inferred 0, derived 0; heights documented 11, inferred 0, unknown 171.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/120633894 historic=castle Q2242429 9 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.31621/12.24295) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|château; sitelinks=4; wikidata:Q2242429 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 227 elements); data/traces/castle-meyenburg-q2242429.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
