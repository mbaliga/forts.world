# Suomenlinna

> Finland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `suomenlinna-q1292442` |
| Coordinates | 60.14361, 24.98444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.14361/24.98444)) |
| Wikidata | [Q1292442](https://www.wikidata.org/wiki/Q1292442) (CC0) |
| Wikidata class | fort |
| Types | fortress\|sea fort\|fortress island |
| Administrative area | Helsinki |
| Inception | 1748 |
| Designations | Cultural Heritage Site of National Significance\|World Heritage Site |
| UNESCO WHC id | 583 |
| Wikipedia language editions | 54 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 364 elements (outline 1, marker 22, road 553, building 121, water 12, retaining-wall 81, coastline 5, cliff 26, wall 7, waterway 9, zone 75).

Evidence: documented 0, mapped 364, inferred 0, derived 4; heights documented 4, inferred 0, unknown 142.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1622785 historic=castle Q1292442 234 m from ledger point
- pruned to the outline plus 150 m: 912 -> 853 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 104 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 525 mapped (trace size budget); minor lanes are not drawn
- origin moved 202 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":2024,"medianInside":18.9,"medianOutside":17.5}
- sea-1: DEM check failed {"cells":1837,"medianInside":17.5,"medianOutside":28.3}
- sea-3: DEM check failed {"cells":633,"medianInside":16.8,"medianOutside":23.3}
- sea-4: DEM check failed {"cells":11,"medianInside":17,"medianOutside":18.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.14361/24.98444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|sea fort\|fortress island; sitelinks=54; wikidata:Q1292442 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 364 elements); data/traces/suomenlinna-q1292442.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/finland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
