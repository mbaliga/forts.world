# South Gate in Kotor

> Montenegro · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `south-gate-in-kotor-q136236521` |
| Coordinates | 42.42227, 18.77175 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.42227/18.77175)) |
| Wikidata | [Q136236521](https://www.wikidata.org/wiki/Q136236521) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Kotor Municipality |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | The Pima Palace, built after the 1667 earthquake, dominates the square with its beauty. The palace portal with the terrace was built in the Renaissance style while the windows and upper balcony which lies on the twelve consoles were built in the Baroque.. |

## What the model contains

Tier **T1**, status `outline+walls`, 341 elements (outline 1, marker 4, road 207, building 221, wall 25, waterway 1, retaining-wall 18, zone 9, coastline 6, cliff 2, water 5).

Evidence: documented 0, mapped 341, inferred 0, derived 5; heights documented 30, inferred 0, unknown 133.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/197926362 historic=castle Q136243291 240 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 221 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 207 mapped (trace size budget); minor lanes are not drawn
- origin moved 241 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":400,"medianInside":5.3,"medianOutside":15.1}
- sea-1: DEM check ok {"cells":11,"medianInside":0.6,"medianOutside":6.1}
- sea-2: DEM check ok {"cells":108,"medianInside":0,"medianOutside":8.8}
- sea-3: DEM check ok {"cells":394,"medianInside":5.3,"medianOutside":7.8}
- sea-4: DEM check ok {"cells":398,"medianInside":5.3,"medianOutside":12.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.42227/18.77175) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q136236521 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 341 elements); data/traces/south-gate-in-kotor-q136236521.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/montenegro.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
