# Balchik Palace

> Bulgaria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `balchik-palace-q3334309` |
| Coordinates | 43.40318, 28.14566 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.40318/28.14566)) |
| Wikidata | [Q3334309](https://www.wikidata.org/wiki/Q3334309) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|palace\|museum |
| Administrative area | Balchik |
| Inception | 1937 |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `description` | Дворец на кралица Мария |
| OSM `website` | https://dvoreca.com |

## What the model contains

Tier **T1**, status `outline+walls`, 240 elements (outline 1, marker 1, coastline 1, road 163, building 45, wall 4, zone 2, waterway 5, water 15, retaining-wall 3).

Evidence: documented 0, mapped 240, inferred 0, derived 1; heights documented 1, inferred 0, unknown 51.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/159685838 historic=castle Q3334309 3 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":132,"medianInside":0,"medianOutside":30.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.40318/28.14566) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|palace\|museum; sitelinks=12; wikidata:Q3334309 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 240 elements); data/traces/balchik-palace-q3334309.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bulgaria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
