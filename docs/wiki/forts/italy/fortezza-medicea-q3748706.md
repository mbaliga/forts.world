# Fortezza Medicea

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortezza-medicea-q3748706` |
| Coordinates | 43.32228, 11.32358 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.32228/11.32358)) |
| Wikidata | [Q3748706](https://www.wikidata.org/wiki/Q3748706) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Siena |
| Inception | 1561 |
| Designations | Italian national heritage |
| Wikipedia language editions | 7 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 385 elements (outline 1, marker 6, road 519, retaining-wall 51, building 166, wall 28, water 4, zone 24, cliff 1).

Evidence: documented 0, mapped 385, inferred 0, derived 0; heights documented 41, inferred 0, unknown 158.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/16532023 historic=fort Q3748706 14 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 166 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 519 mapped (trace size budget); minor lanes are not drawn
- origin moved 13 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.32228/11.32358) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=7; wikidata:Q3748706 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 385 elements); data/traces/fortezza-medicea-q3748706.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
