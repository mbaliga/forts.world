# Wisłoujście Fortress

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wis-oujscie-fortress-q1409002` |
| Coordinates | 54.39586, 18.67914 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.39586/18.67914)) |
| Wikidata | [Q1409002](https://www.wikidata.org/wiki/Q1409002) (CC0) |
| Wikidata class | fort |
| Types | lighthouse\|fortress\|architectural heritage monument |
| Administrative area | Gdańsk |
| Inception | 1482 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 138 elements (outline 1, marker 13, coastline 8, road 74, building 13, waterway 1, wall 22, water 6).

Evidence: documented 0, mapped 138, inferred 0, derived 6; heights documented 6, inferred 0, unknown 29.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/60135829 historic=castle Q1409002 30 m from ledger point
- origin moved 29 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":2687,"medianInside":0.1,"medianOutside":1.1}
- sea-1: DEM check ok {"cells":2510,"medianInside":0,"medianOutside":1.4}
- sea-2: DEM check ok {"cells":2532,"medianInside":0,"medianOutside":1.1}
- sea-3: DEM check failed {"cells":2672,"medianInside":0.2,"medianOutside":-1.2}
- sea-4: DEM check ok {"cells":2671,"medianInside":0.1,"medianOutside":0.3}
- sea-5: DEM check failed {"cells":2632,"medianInside":0.2,"medianOutside":-0.5}
- 20 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.39586/18.67914) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; lighthouse\|fortress\|architectural heritage monument; sitelinks=12; wikidata:Q1409002 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 138 elements); data/traces/wis-oujscie-fortress-q1409002.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
