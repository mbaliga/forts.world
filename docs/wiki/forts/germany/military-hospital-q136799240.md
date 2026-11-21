# Military hospital

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `military-hospital-q136799240` |
| Coordinates | 50.91957, 14.05849 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.91957/14.05849)) |
| Wikidata | [Q136799240](https://www.wikidata.org/wiki/Q136799240) (CC0) |
| Wikidata class | fortification |
| Types | casemate |
| Administrative area | Königstein |
| Inception | 1890 |
| Designations | heritage monument in Saxony |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 4 |
| OSM `website` | https://www.festung-koenigstein.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 324 elements (outline 1, marker 23, road 353, waterway 2, building 97, zone 82, water 3, wall 9, retaining-wall 60, cliff 21).

Evidence: documented 0, mapped 324, inferred 0, derived 0; heights documented 53, inferred 0, unknown 76.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/36973311 historic=castle Q700562 62 m from ledger point
- pruned to the outline plus 150 m: 651 -> 563 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 61 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 318 mapped (trace size budget); minor lanes are not drawn
- origin moved 61 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.91957/14.05849) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; casemate; sitelinks=1; wikidata:Q136799240 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 324 elements); data/traces/military-hospital-q136799240.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
