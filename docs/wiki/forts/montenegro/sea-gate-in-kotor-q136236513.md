# Sea Gate in Kotor

> Montenegro · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sea-gate-in-kotor-q136236513` |
| Coordinates | 42.42474, 18.7697 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.42474/18.7697)) |
| Wikidata | [Q136236513](https://www.wikidata.org/wiki/Q136236513) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Kotor Municipality |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | he Palace Bizanti with one façade is turned to Square of Arms and with the other overlooking the street leading to Square of Flour. It was built in the fourteenth century. |

## What the model contains

Tier **T1**, status `outline+walls`, 332 elements (outline 1, marker 4, road 224, building 218, wall 23, water 8, waterway 1, retaining-wall 13, zone 9, coastline 3).

Evidence: documented 0, mapped 332, inferred 0, derived 7; heights documented 36, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/197926358 historic=castle 65 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 218 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 224 mapped (trace size budget); minor lanes are not drawn
- origin moved 67 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":390,"medianInside":3.3,"medianOutside":3.2}
- sea-1: DEM check ok {"cells":400,"medianInside":3,"medianOutside":9.1}
- sea-2: DEM check failed {"cells":0,"medianInside":null,"medianOutside":3.3}
- sea-3: DEM check ok {"cells":31,"medianInside":0.4,"medianOutside":4.5}
- sea-4: DEM check ok {"cells":108,"medianInside":0,"medianOutside":6.8}
- sea-5: DEM check ok {"cells":400,"medianInside":3,"medianOutside":9.1}
- sea-6: DEM check ok {"cells":400,"medianInside":3,"medianOutside":9.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.42474/18.7697) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q136236513 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 332 elements); data/traces/sea-gate-in-kotor-q136236513.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/montenegro.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
