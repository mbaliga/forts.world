# Hayama Imperial Villa

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hayama-imperial-villa-q5685996` |
| Coordinates | 35.26133, 139.57817 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.26133/139.57817)) |
| Wikidata | [Q5685996](https://www.wikidata.org/wiki/Q5685996) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|Imperial villa |
| Administrative area | Isshiki |
| Inception | 1894 |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 186 elements (outline 1, waterway 2, coastline 5, road 51, building 120, wall 1, water 3, retaining-wall 2, zone 1).

Evidence: documented 0, mapped 186, inferred 0, derived 2; heights documented 3, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3438399 historic=castle Q5685996 4 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":62,"medianInside":2.3,"medianOutside":9.6}
- sea-1: DEM check ok {"cells":21,"medianInside":1.3,"medianOutside":9}
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.26133/139.57817) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|Imperial villa; sitelinks=5; wikidata:Q5685996 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 186 elements); data/traces/hayama-imperial-villa-q5685996.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
