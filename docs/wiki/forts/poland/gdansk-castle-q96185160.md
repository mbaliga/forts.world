# Gdańsk Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gdansk-castle-q96185160` |
| Coordinates | 54.35389, 18.66 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.35389/18.66)) |
| Wikidata | [Q96185160](https://www.wikidata.org/wiki/Q96185160) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Gdańsk |
| Wikipedia language editions | 5 |
| OSM `historic` | fortification |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 340 elements (outline 1, marker 10, road 416, building 188, wall 21, water 4, waterway 3, zone 26, retaining-wall 2, coastline 3).

Evidence: documented 0, mapped 340, inferred 0, derived 3; heights documented 71, inferred 0, unknown 72.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/124756177 historic=fortification Q2253051 136 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 188 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 416 mapped (trace size budget); minor lanes are not drawn
- origin moved 136 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":109,"medianInside":1.4,"medianOutside":5.7}
- sea-1: DEM check failed {"cells":341,"medianInside":5.3,"medianOutside":3.9}
- sea-2: DEM check failed {"cells":0,"medianInside":null,"medianOutside":4.4}
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.35389/18.66) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q96185160 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 340 elements); data/traces/gdansk-castle-q96185160.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
