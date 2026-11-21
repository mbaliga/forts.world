# Castra of Osterburken

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castra-of-osterburken-q1243550` |
| Coordinates | 49.42753, 9.42364 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.42753/9.42364)) |
| Wikidata | [Q1243550](https://www.wikidata.org/wiki/Q1243550) (CC0) |
| Wikidata class | fortification |
| Types | archaeological site\|castrum |
| Administrative area | Germania Superior |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | castrum |
| OSM `description` | Grundriss ist NICHT rekonstruiert, sondern nur mit Beton im 19 Jh. überkront, um weiteren Steinraub zu verhindern. |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 232 elements (outline 1, marker 1, road 187, building 273, waterway 3, zone 93, water 1, retaining-wall 7, wall 33).

Evidence: documented 0, mapped 232, inferred 0, derived 0; heights documented 28, inferred 0, unknown 62.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/92022433 historic=castle Q1243550 98 m from ledger point
- pruned to the outline plus 150 m: 599 -> 426 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 203 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 131 mapped (trace size budget); minor lanes are not drawn
- origin moved 99 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.42753/9.42364) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological site\|castrum; sitelinks=4; wikidata:Q1243550 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 232 elements); data/traces/castra-of-osterburken-q1243550.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
