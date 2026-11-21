# Churchill War Rooms

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `churchill-war-rooms-q1024854` |
| Coordinates | 51.50222, -0.1293 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.50222/-0.1293)) |
| Wikidata | [Q1024854](https://www.wikidata.org/wiki/Q1024854) (CC0) |
| Wikidata class | fortification |
| Types | bunker\|biographical museum\|military museum\|national museum |
| Administrative area | City of Westminster |
| Inception | 1984 |
| Wikipedia language editions | 19 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 1 |
| OSM `website` | https://www.parliament.uk/ |

## What the model contains

Tier **T1**, status `outline+walls`, 379 elements (outline 1, marker 28, road 625, zone 20, building 145, wall 32, retaining-wall 22, water 3, waterway 3).

Evidence: documented 0, mapped 379, inferred 0, derived 0; heights documented 41, inferred 0, unknown 133.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1567699 historic=castle Q62408 461 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 145 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 625 mapped (trace size budget); minor lanes are not drawn
- origin moved 458 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.50222/-0.1293) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker\|biographical museum\|military museum\|national museum; sitelinks=19; wikidata:Q1024854 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 379 elements); data/traces/churchill-war-rooms-q1024854.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
