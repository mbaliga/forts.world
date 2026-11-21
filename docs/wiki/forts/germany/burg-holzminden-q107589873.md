# Burg Holzminden

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-holzminden-q107589873` |
| Coordinates | 51.82693, 9.4442 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.82693/9.4442)) |
| Wikidata | [Q107589873](https://www.wikidata.org/wiki/Q107589873) (CC0) |
| Wikidata class | castle |
| Types | deserted castle site\|destroyed building or structure |
| Administrative area | Holzminden |
| Wikipedia language editions | 2 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 300 elements (outline 1, marker 1, road 142, water 3, waterway 9, zone 3, building 299, wall 6, retaining-wall 15).

Evidence: documented 0, mapped 300, inferred 0, derived 0; heights documented 5, inferred 0, unknown 136.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/249428810 historic=building 116 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 299 mapped (trace size budget); the rest of the town is not drawn
- origin moved 116 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.82693/9.4442) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; deserted castle site\|destroyed building or structure; sitelinks=2; wikidata:Q107589873 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 300 elements); data/traces/burg-holzminden-q107589873.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
