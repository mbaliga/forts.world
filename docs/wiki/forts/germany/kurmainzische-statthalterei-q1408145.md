# Kurmainzische Statthalterei

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kurmainzische-statthalterei-q1408145` |
| Coordinates | 50.97446, 11.02933 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.97446/11.02933)) |
| Wikidata | [Q1408145](https://www.wikidata.org/wiki/Q1408145) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|château\|administrative building |
| Administrative area | Erfurt |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 329 elements (outline 1, marker 2, road 208, waterway 4, building 392, wall 32, zone 11, water 3, retaining-wall 6).

Evidence: documented 0, mapped 329, inferred 0, derived 0; heights documented 76, inferred 0, unknown 82.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1445740194 historic=castle Q1408145 7 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 392 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 208 mapped (trace size budget); minor lanes are not drawn
- origin moved 8 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.97446/11.02933) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|château\|administrative building; sitelinks=4; wikidata:Q1408145 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 329 elements); data/traces/kurmainzische-statthalterei-q1408145.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
