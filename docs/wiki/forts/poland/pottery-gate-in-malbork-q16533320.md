# Pottery Gate in Malbork

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pottery-gate-in-malbork-q16533320` |
| Coordinates | 54.03694, 19.02828 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.03694/19.02828)) |
| Wikidata | [Q16533320](https://www.wikidata.org/wiki/Q16533320) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Malbork |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 1 |
| OSM `website` | https://zamek.malbork.pl |

## What the model contains

Tier **T1**, status `outline+walls`, 354 elements (outline 1, marker 15, road 277, wall 58, building 81, retaining-wall 11, zone 32, waterway 6).

Evidence: documented 0, mapped 354, inferred 0, derived 0; heights documented 45, inferred 0, unknown 105.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6436433 historic=castle Q71279 364 m from ledger point
- roads capped: kept the 150 longest of 277 mapped (trace size budget); minor lanes are not drawn
- origin moved 362 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.03694/19.02828) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=3; wikidata:Q16533320 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 354 elements); data/traces/pottery-gate-in-malbork-q16533320.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
