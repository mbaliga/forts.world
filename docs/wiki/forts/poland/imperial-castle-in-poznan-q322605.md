# Imperial Castle in Poznań

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `imperial-castle-in-poznan-q322605` |
| Coordinates | 52.40803, 16.91871 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.40803/16.91871)) |
| Wikidata | [Q322605](https://www.wikidata.org/wiki/Q322605) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|palace\|architectural heritage monument |
| Administrative area | Poznań |
| Inception | 1910 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |
| OSM `website` | http://ckzamek.pl/ |

## What the model contains

Tier **T1**, status `outline+walls`, 262 elements (outline 1, marker 37, road 439, water 2, building 122, zone 70, wall 35, retaining-wall 20).

Evidence: documented 0, mapped 262, inferred 0, derived 0; heights documented 49, inferred 0, unknown 39.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1483520 historic=castle Q322605 8 m from ledger point
- pruned to the outline plus 150 m: 726 -> 599 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 82 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 395 mapped (trace size budget); minor lanes are not drawn
- origin moved 9 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.40803/16.91871) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|palace\|architectural heritage monument; sitelinks=15; wikidata:Q322605 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 262 elements); data/traces/imperial-castle-in-poznan-q322605.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
