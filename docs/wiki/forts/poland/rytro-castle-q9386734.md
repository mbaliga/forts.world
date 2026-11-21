# Rytro Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rytro-castle-q9386734` |
| Coordinates | 49.48902, 20.68661 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.48902/20.68661)) |
| Wikidata | [Q9386734](https://www.wikidata.org/wiki/Q9386734) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Rytro |
| Inception | 1500 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 54 elements (outline 1, road 28, building 20, waterway 2, wall 3).

Evidence: documented 0, mapped 54, inferred 0, derived 0; heights documented 4, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5427466 historic=castle Q9386734 5 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.48902/20.68661) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q9386734 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 54 elements); data/traces/rytro-castle-q9386734.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
