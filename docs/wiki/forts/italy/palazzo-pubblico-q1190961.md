# Palazzo Pubblico

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palazzo-pubblico-q1190961` |
| Coordinates | 43.31799, 11.3323 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.31799/11.3323)) |
| Wikidata | [Q1190961](https://www.wikidata.org/wiki/Q1190961) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|Palazzo\|city hall |
| Administrative area | Siena |
| Designations | Italian national heritage |
| Wikipedia language editions | 22 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 321 elements (outline 1, marker 2, road 238, building 195, water 3, wall 18, retaining-wall 20, waterway 2, zone 5).

Evidence: documented 0, mapped 321, inferred 0, derived 0; heights documented 17, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3757203 historic=castle Q1190961 17 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 195 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 238 mapped (trace size budget); minor lanes are not drawn
- origin moved 24 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.31799/11.3323) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|Palazzo\|city hall; sitelinks=22; wikidata:Q1190961 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 321 elements); data/traces/palazzo-pubblico-q1190961.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
