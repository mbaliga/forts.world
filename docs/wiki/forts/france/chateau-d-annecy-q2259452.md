# Château d'Annecy

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-d-annecy-q2259452` |
| Coordinates | 45.8975, 6.12611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.8975/6.12611)) |
| Wikidata | [Q2259452](https://www.wikidata.org/wiki/Q2259452) (CC0) |
| Wikidata class | castle |
| Types | castle\|barracks\|museum building\|abandoned |
| Administrative area | Annecy |
| Inception | 1200 |
| Designations | classified historical monument |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 317 elements (outline 1, marker 6, road 198, building 342, water 3, wall 5, waterway 23, retaining-wall 3, zone 6).

Evidence: documented 0, mapped 317, inferred 0, derived 0; heights documented 16, inferred 0, unknown 112.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/24980106 historic=castle Q2259452 16 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 342 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 198 mapped (trace size budget); minor lanes are not drawn
- origin moved 15 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.8975/6.12611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|barracks\|museum building\|abandoned; sitelinks=12; wikidata:Q2259452 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 317 elements); data/traces/chateau-d-annecy-q2259452.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
