# Maynooth Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `maynooth-castle-q6797465` |
| Coordinates | 53.38079, -6.5944 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.38079/-6.5944)) |
| Wikidata | [Q6797465](https://www.wikidata.org/wiki/Q6797465) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Maynooth |
| Designations | national monument of Ireland |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `barrier` | fence |

## What the model contains

Tier **T1**, status `outline+walls`, 231 elements (outline 1, marker 2, road 257, building 134, wall 70, waterway 11, zone 51, water 1, retaining-wall 2).

Evidence: documented 0, mapped 231, inferred 0, derived 0; heights documented 5, inferred 0, unknown 108.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/31510307 historic=castle Q6797465 24 m from ledger point
- pruned to the outline plus 150 m: 529 -> 402 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 108 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 203 mapped (trace size budget); minor lanes are not drawn
- origin moved 21 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.38079/-6.5944) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=8; wikidata:Q6797465 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 231 elements); data/traces/maynooth-castle-q6797465.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
