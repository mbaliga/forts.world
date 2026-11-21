# Zimbulka Tower

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zimbulka-tower-q4080255` |
| Coordinates | 54.78116, 32.05993 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.78116/32.05993)) |
| Wikidata | [Q4080255](https://www.wikidata.org/wiki/Q4080255) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Smolensk |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | kremlin |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 305 elements (outline 1, marker 7, road 207, building 195, zone 19, wall 1, cliff 5, waterway 2).

Evidence: documented 0, mapped 305, inferred 0, derived 0; heights documented 67, inferred 0, unknown 54.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11366366 historic=castle Q1565762 575 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 195 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 207 mapped (trace size budget); minor lanes are not drawn
- origin moved 623 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.78116/32.05993) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q4080255 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 305 elements); data/traces/zimbulka-tower-q4080255.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
