# Copenhagen Castle

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `copenhagen-castle-q3306889` |
| Coordinates | 55.67722, 12.58 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.67722/12.58)) |
| Wikidata | [Q3306889](https://www.wikidata.org/wiki/Q3306889) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin\|destroyed building or structure |
| Administrative area | Copenhagen Municipality |
| Inception | 1400 |
| Wikipedia language editions | 18 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://denkongeligesamling.dk/christiansborg-slot/ |

## What the model contains

Tier **T1**, status `outline+walls`, 328 elements (outline 1, marker 13, road 283, coastline 7, building 378, zone 13, water 9, wall 11, retaining-wall 4).

Evidence: documented 0, mapped 328, inferred 0, derived 3; heights documented 12, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/25992657 historic=castle Q940733 207 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 378 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 283 mapped (trace size budget); minor lanes are not drawn
- origin moved 206 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":1990,"medianInside":9.7,"medianOutside":7.1}
- sea-1: DEM check ok {"cells":38,"medianInside":4.4,"medianOutside":8.3}
- sea-2: DEM check ok {"cells":1968,"medianInside":7,"medianOutside":10}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.67722/12.58) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin\|destroyed building or structure; sitelinks=18; wikidata:Q3306889 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 328 elements); data/traces/copenhagen-castle-q3306889.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
