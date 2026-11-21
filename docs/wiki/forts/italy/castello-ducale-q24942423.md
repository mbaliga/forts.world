# Castello Ducale

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-ducale-q24942423` |
| Coordinates | 40.64669, 17.51765 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.64669/17.51765)) |
| Wikidata | [Q24942423](https://www.wikidata.org/wiki/Q24942423) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Ceglie Messapica |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.cegliesistemagustodarte.it/ilcastello |

## What the model contains

Tier **T1**, status `outline+walls`, 361 elements (outline 1, marker 17, road 284, building 352, retaining-wall 19, zone 5, wall 48, waterway 1).

Evidence: documented 0, mapped 361, inferred 0, derived 0; heights documented 101, inferred 0, unknown 86.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4823201 historic=castle Q24942423 30 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 352 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 284 mapped (trace size budget); minor lanes are not drawn
- origin moved 32 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.64669/17.51765) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q24942423 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 361 elements); data/traces/castello-ducale-q24942423.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
