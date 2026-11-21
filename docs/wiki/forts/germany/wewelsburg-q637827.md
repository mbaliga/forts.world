# Wewelsburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wewelsburg-q637827` |
| Coordinates | 51.60677, 8.65143 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.60677/8.65143)) |
| Wikidata | [Q637827](https://www.wikidata.org/wiki/Q637827) (CC0) |
| Wikidata class | castle |
| Types | fort\|military museum\|hill castle\|Schloss |
| Administrative area | Büren |
| Inception | 1603 |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 25 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 8 |

## What the model contains

Tier **T1**, status `outline+walls`, 257 elements (outline 1, marker 4, road 130, zone 15, waterway 6, building 99, retaining-wall 1, wall 1).

Evidence: documented 0, mapped 257, inferred 0, derived 0; heights documented 14, inferred 0, unknown 87.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3922836 historic=castle Q637827 12 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.60677/8.65143) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; fort\|military museum\|hill castle\|Schloss; sitelinks=25; wikidata:Q637827 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 257 elements); data/traces/wewelsburg-q637827.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
