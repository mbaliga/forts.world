# Martinstor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `martinstor-q328965` |
| Coordinates | 47.99361, 7.84889 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.99361/7.84889)) |
| Wikidata | [Q328965](https://www.wikidata.org/wiki/Q328965) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Freiburg im Breisgau |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 10 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 364 elements (outline 1, marker 28, road 244, waterway 40, building 363, retaining-wall 12, wall 5, water 5, zone 3).

Evidence: documented 0, mapped 364, inferred 0, derived 0; heights documented 37, inferred 0, unknown 100.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/628235706 historic=ruins 165 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 363 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 244 mapped (trace size budget); minor lanes are not drawn
- origin moved 166 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.99361/7.84889) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=10; wikidata:Q328965 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 364 elements); data/traces/martinstor-q328965.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
