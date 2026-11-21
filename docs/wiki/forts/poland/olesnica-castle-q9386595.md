# Oleśnica Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `olesnica-castle-q9386595` |
| Coordinates | 51.2089, 17.3764 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.2089/17.3764)) |
| Wikidata | [Q9386595](https://www.wikidata.org/wiki/Q9386595) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Oleśnica |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 240 elements (outline 1, marker 2, road 353, building 157, retaining-wall 7, zone 107, wall 13, waterway 1).

Evidence: documented 0, mapped 240, inferred 0, derived 0; heights documented 39, inferred 0, unknown 36.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3623705 historic=castle Q9386595 36 m from ledger point
- pruned to the outline plus 150 m: 641 -> 437 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 91 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 246 mapped (trace size budget); minor lanes are not drawn
- origin moved 38 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.2089/17.3764) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=8; wikidata:Q9386595 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 240 elements); data/traces/olesnica-castle-q9386595.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
