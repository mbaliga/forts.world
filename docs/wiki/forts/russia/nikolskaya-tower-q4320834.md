# Nikolskaya Tower

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nikolskaya-tower-q4320834` |
| Coordinates | 54.78036, 32.05902 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.78036/32.05902)) |
| Wikidata | [Q4320834](https://www.wikidata.org/wiki/Q4320834) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|gate tower |
| Administrative area | Smolensk |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | kremlin |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 301 elements (outline 1, marker 7, road 204, building 181, zone 17, wall 1, cliff 4, waterway 1).

Evidence: documented 0, mapped 301, inferred 0, derived 0; heights documented 74, inferred 0, unknown 47.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11366366 historic=castle Q1565762 597 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 181 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 204 mapped (trace size budget); minor lanes are not drawn
- origin moved 656 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.78036/32.05902) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|gate tower; sitelinks=3; wikidata:Q4320834 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 301 elements); data/traces/nikolskaya-tower-q4320834.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
