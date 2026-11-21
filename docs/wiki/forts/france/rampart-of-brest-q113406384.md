# Rampart of Brest

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rampart-of-brest-q113406384` |
| Coordinates | 48.38313, -4.48834 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.38313/-4.48834)) |
| Wikidata | [Q113406384](https://www.wikidata.org/wiki/Q113406384) (CC0) |
| Wikidata class | fortification |
| Types | rampart |
| Administrative area | Brest |
| Designations | listed in the general inventory of cultural heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 351 elements (outline 1, marker 14, road 311, building 140, zone 42, coastline 4, water 6, retaining-wall 6, wall 7, waterway 1).

Evidence: documented 0, mapped 351, inferred 0, derived 4; heights documented 30, inferred 0, unknown 103.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2443750 historic=castle Q2633625 448 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 140 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 311 mapped (trace size budget); minor lanes are not drawn
- origin moved 452 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":321,"medianInside":0,"medianOutside":13.6}
- sea-1: DEM check ok {"cells":42,"medianInside":0,"medianOutside":6.8}
- sea-2: DEM check ok {"cells":882,"medianInside":5.5,"medianOutside":6.2}
- sea-3: DEM check ok {"cells":845,"medianInside":4.7,"medianOutside":9.2}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.38313/-4.48834) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rampart; sitelinks=1; wikidata:Q113406384 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 351 elements); data/traces/rampart-of-brest-q113406384.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
