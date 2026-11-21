# Rohan Castle

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rohan-castle-q1670612` |
| Coordinates | 48.74219, 7.36338 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.74219/7.36338)) |
| Wikidata | [Q1670612](https://www.wikidata.org/wiki/Q1670612) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|château |
| Administrative area | Saverne |
| Designations | classified historical monument |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 321 elements (outline 1, marker 10, road 162, building 279, water 4, wall 13, retaining-wall 2, waterway 10, zone 11).

Evidence: documented 0, mapped 321, inferred 0, derived 0; heights documented 0, inferred 0, unknown 135.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/62029007 historic=castle Q1670612 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 279 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 162 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.74219/7.36338) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|château; sitelinks=7; wikidata:Q1670612 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 321 elements); data/traces/rohan-castle-q1670612.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
