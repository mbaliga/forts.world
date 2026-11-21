# Zbaraski Palace in Kraków

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zbaraski-palace-in-krakow-q11814892` |
| Coordinates | 50.0607, 19.93665 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.0607/19.93665)) |
| Wikidata | [Q11814892](https://www.wikidata.org/wiki/Q11814892) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|palace\|architectural heritage monument |
| Administrative area | Kraków |
| Inception | 1400 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 233 elements (outline 1, marker 16, road 306, building 200, zone 93, wall 66, water 1).

Evidence: documented 0, mapped 233, inferred 0, derived 0; heights documented 57, inferred 0, unknown 44.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2702585 historic=castle Q11814892 4 m from ledger point
- pruned to the outline plus 150 m: 683 -> 389 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 126 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 170 mapped (trace size budget); minor lanes are not drawn
- origin moved 8 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.0607/19.93665) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|palace\|architectural heritage monument; sitelinks=4; wikidata:Q11814892 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 233 elements); data/traces/zbaraski-palace-in-krakow-q11814892.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
