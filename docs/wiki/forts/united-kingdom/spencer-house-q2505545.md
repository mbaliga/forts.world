# Spencer House

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `spencer-house-q2505545` |
| Coordinates | 51.50515, -0.14025 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.50515/-0.14025)) |
| Wikidata | [Q2505545](https://www.wikidata.org/wiki/Q2505545) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|historic house museum |
| Administrative area | City of Westminster |
| Inception | 1754 |
| Designations | Grade I listed building |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 301 elements (outline 1, marker 4, road 278, building 124, wall 8, waterway 1, retaining-wall 1, zone 16).

Evidence: documented 0, mapped 301, inferred 0, derived 0; heights documented 9, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/16057566 historic=castle Q2505545 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 124 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 278 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.50515/-0.14025) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|historic house museum; sitelinks=15; wikidata:Q2505545 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 301 elements); data/traces/spencer-house-q2505545.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
