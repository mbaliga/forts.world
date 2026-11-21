# Heidelberg Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `heidelberg-castle-q327265` |
| Coordinates | 49.41056, 8.71583 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.41056/8.71583)) |
| Wikidata | [Q327265](https://www.wikidata.org/wiki/Q327265) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum |
| Administrative area | Heidelberg |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 40 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `website` | https://www.schloss-heidelberg.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 280 elements (outline 1, marker 22, road 471, building 289, retaining-wall 40, zone 44, water 5, wall 64, waterway 6, cliff 1).

Evidence: documented 0, mapped 280, inferred 0, derived 0; heights documented 57, inferred 0, unknown 86.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/254154168 historic=castle Q327265 55 m from ledger point
- pruned to the outline plus 150 m: 943 -> 643 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 149 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 354 mapped (trace size budget); minor lanes are not drawn
- origin moved 56 m from the ledger point to the outline centroid
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.41056/8.71583) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum; sitelinks=40; wikidata:Q327265 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 280 elements); data/traces/heidelberg-castle-q327265.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
