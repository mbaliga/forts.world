# Water tower, toll station

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `water-tower-toll-station-q112087343` |
| Coordinates | 48.1401, 17.1007 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.1401/17.1007)) |
| Wikidata | [Q112087343](https://www.wikidata.org/wiki/Q112087343) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Bratislava |
| Designations | cultural heritage of Slovakia |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `description` | Massive rectangular, 4-towered castle dating from 15th century and later. |

## What the model contains

Tier **T1**, status `outline+walls`, 365 elements (outline 1, marker 5, road 306, building 73, zone 81, wall 24, retaining-wall 27, water 4).

Evidence: documented 0, mapped 365, inferred 0, derived 0; heights documented 33, inferred 0, unknown 91.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/8160490 historic=castle Q13425656 244 m from ledger point
- roads capped: kept the 150 longest of 306 mapped (trace size budget); minor lanes are not drawn
- origin moved 244 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.1401/17.1007) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=0; wikidata:Q112087343 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 365 elements); data/traces/water-tower-toll-station-q112087343.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
