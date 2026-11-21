# Defensive walls in Malbork

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `defensive-walls-in-malbork-q30635790` |
| Coordinates | 54.03728, 19.02636 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.03728/19.02636)) |
| Wikidata | [Q30635790](https://www.wikidata.org/wiki/Q30635790) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Malbork |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 1 |
| OSM `website` | https://zamek.malbork.pl |

## What the model contains

Tier **T1**, status `outline+walls`, 358 elements (outline 1, marker 15, road 279, wall 58, building 86, retaining-wall 10, zone 32, waterway 6).

Evidence: documented 0, mapped 358, inferred 0, derived 0; heights documented 45, inferred 0, unknown 109.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6436433 historic=castle Q71279 328 m from ledger point
- roads capped: kept the 150 longest of 279 mapped (trace size budget); minor lanes are not drawn
- origin moved 324 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.03728/19.02636) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q30635790 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 358 elements); data/traces/defensive-walls-in-malbork-q30635790.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
