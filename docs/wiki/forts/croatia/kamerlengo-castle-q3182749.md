# Kamerlengo Castle

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kamerlengo-castle-q3182749` |
| Coordinates | 43.51528, 16.2475 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.51528/16.2475)) |
| Wikidata | [Q3182749](https://www.wikidata.org/wiki/Q3182749) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Trogir |
| Inception | 1420 |
| Designations | Cultural Heritage in Croatia\|part of UNESCO World Heritage Site |
| Wikipedia language editions | 20 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 298 elements (outline 1, road 73, building 207, zone 4, wall 4, coastline 5, water 4).

Evidence: documented 0, mapped 298, inferred 0, derived 4; heights documented 6, inferred 0, unknown 205.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/696198671 historic=castle Q3182749 13 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1068,"medianInside":0,"medianOutside":2.5}
- sea-1: DEM check ok {"cells":1438,"medianInside":0.1,"medianOutside":1.5}
- sea-2: DEM check ok {"cells":1554,"medianInside":0.2,"medianOutside":1.3}
- sea-3: DEM check ok {"cells":1600,"medianInside":0.3,"medianOutside":1.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.51528/16.2475) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=20; wikidata:Q3182749 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 298 elements); data/traces/kamerlengo-castle-q3182749.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
