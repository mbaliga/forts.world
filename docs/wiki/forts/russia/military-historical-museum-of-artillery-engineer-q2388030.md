# Military Historical Museum of Artillery, Engineers and Signal Corps

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `military-historical-museum-of-artillery-engineer-q2388030` |
| Coordinates | 59.95303, 30.31446 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.95303/30.31446)) |
| Wikidata | [Q2388030](https://www.wikidata.org/wiki/Q2388030) (CC0) |
| Wikidata class | fort |
| Types | fortification\|military museum |
| Administrative area | Saint Petersburg |
| Inception | 1703 |
| Wikipedia language editions | 17 |
| OSM `historic` | castle |
| OSM `castle_type` | citadel |
| OSM `description` | Original citadel of St. Petersburg, founded by OPeter the Great in 1703 |
| OSM `website` | https://www.spbmuseum.ru/themuseum/museum_complex/peterpaul_fortress/ |

## What the model contains

Tier **T1**, status `outline+walls`, 338 elements (outline 1, marker 61, waterway 4, road 462, building 54, zone 44, water 1, wall 11, retaining-wall 12).

Evidence: documented 0, mapped 338, inferred 0, derived 0; heights documented 33, inferred 0, unknown 44.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/227969 historic=castle Q38646 346 m from ledger point
- roads capped: kept the 150 longest of 462 mapped (trace size budget); minor lanes are not drawn
- origin moved 317 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.95303/30.31446) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|military museum; sitelinks=17; wikidata:Q2388030 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 338 elements); data/traces/military-historical-museum-of-artillery-engineer-q2388030.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
