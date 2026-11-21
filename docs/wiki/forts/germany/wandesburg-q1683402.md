# Wandesburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wandesburg-q1683402` |
| Coordinates | 53.57054, 10.0695 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.57054/10.0695)) |
| Wikidata | [Q1683402](https://www.wikidata.org/wiki/Q1683402) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Wandsbek |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 290 elements (outline 1, marker 12, road 308, building 135, zone 5, wall 1, waterway 1).

Evidence: documented 0, mapped 290, inferred 0, derived 0; heights documented 38, inferred 0, unknown 83.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1086473715 historic=yes 334 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 135 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 308 mapped (trace size budget); minor lanes are not drawn
- origin moved 331 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.57054/10.0695) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q1683402 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 290 elements); data/traces/wandesburg-q1683402.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
