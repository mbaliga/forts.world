# Schwabentor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schwabentor-q2252613` |
| Coordinates | 47.99278, 7.85417 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.99278/7.85417)) |
| Wikidata | [Q2252613](https://www.wikidata.org/wiki/Q2252613) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Freiburg im Breisgau |
| Wikipedia language editions | 10 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 343 elements (outline 1, marker 10, road 271, waterway 29, building 349, retaining-wall 20, zone 7, wall 2, water 4).

Evidence: documented 0, mapped 343, inferred 0, derived 0; heights documented 12, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/103022168 historic=building 195 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 349 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 271 mapped (trace size budget); minor lanes are not drawn
- origin moved 195 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.99278/7.85417) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=10; wikidata:Q2252613 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 343 elements); data/traces/schwabentor-q2252613.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
