# Fishermen's Gate

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fishermen-s-gate-q1420172` |
| Coordinates | 48.14542, 17.10672 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.14542/17.10672)) |
| Wikidata | [Q1420172](https://www.wikidata.org/wiki/Q1420172) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Bratislava Region |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 339 elements (outline 1, marker 45, road 290, zone 16, building 165, wall 6, retaining-wall 1).

Evidence: documented 0, mapped 339, inferred 0, derived 0; heights documented 78, inferred 0, unknown 49.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/207207 historic=castle Q752582 88 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 165 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 290 mapped (trace size budget); minor lanes are not drawn
- origin moved 86 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.14542/17.10672) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=8; wikidata:Q1420172 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 339 elements); data/traces/fishermen-s-gate-q1420172.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
