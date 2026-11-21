# Fortifications of Chania

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortifications-of-chania-q20948944` |
| Coordinates | 35.51825, 24.01366 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.51825/24.01366)) |
| Wikidata | [Q20948944](https://www.wikidata.org/wiki/Q20948944) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Chania Regional Unit |
| Inception | 1336 |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 323 elements (outline 1, marker 5, road 76, wall 12, coastline 9, building 213, water 5, zone 2).

Evidence: documented 0, mapped 323, inferred 0, derived 4; heights documented 0, inferred 0, unknown 225.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1069616183 historic=castle Q38279797 174 m from ledger point
- origin moved 174 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":1679,"medianInside":0,"medianOutside":0}
- sea-1: DEM check failed {"cells":1654,"medianInside":0,"medianOutside":0}
- sea-2: DEM check failed {"cells":1675,"medianInside":0,"medianOutside":-0.1}
- sea-3: DEM check ok {"cells":1037,"medianInside":0,"medianOutside":6.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.51825/24.01366) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=8; wikidata:Q20948944 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 323 elements); data/traces/fortifications-of-chania-q20948944.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
