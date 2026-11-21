# Institut Lluís Vives air raid shelter

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `institut-lluis-vives-air-raid-shelter-q90700977` |
| Coordinates | 39.4685, -0.37833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.4685/-0.37833)) |
| Wikidata | [Q90700977](https://www.wikidata.org/wiki/Q90700977) (CC0) |
| Wikidata class | fortification |
| Types | air-raid shelter |
| Administrative area | Ciutat Vella |
| Designations | Property of Local Relevance |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 291 elements (outline 1, marker 3, road 192, building 289, water 2, wall 5, zone 10).

Evidence: documented 0, mapped 291, inferred 0, derived 0; heights documented 9, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/515082661 historic=castle Q1993940 541 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 289 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 192 mapped (trace size budget); minor lanes are not drawn
- origin moved 539 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.4685/-0.37833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; air-raid shelter; sitelinks=1; wikidata:Q90700977 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 291 elements); data/traces/institut-lluis-vives-air-raid-shelter-q90700977.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
