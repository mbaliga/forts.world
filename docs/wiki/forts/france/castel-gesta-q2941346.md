# Castel-Gesta

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castel-gesta-q2941346` |
| Coordinates | 43.61347, 1.43878 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.61347/1.43878)) |
| Wikidata | [Q2941346](https://www.wikidata.org/wiki/Q2941346) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|villa |
| Administrative area | Toulouse |
| Inception | 1860 |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 227 elements (outline 1, road 194, building 766, waterway 1, wall 191, water 1).

Evidence: documented 0, mapped 227, inferred 0, derived 0; heights documented 0, inferred 0, unknown 146.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1458986532 historic=castle Q2941346 4 m from ledger point
- pruned to the outline plus 150 m: 1154 -> 585 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 395 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 103 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.61347/1.43878) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|villa; sitelinks=2; wikidata:Q2941346 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 227 elements); data/traces/castel-gesta-q2941346.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
