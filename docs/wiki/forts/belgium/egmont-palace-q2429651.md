# Egmont Palace

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `egmont-palace-q2429651` |
| Coordinates | 50.83879, 4.35748 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.83879/4.35748)) |
| Wikidata | [Q2429651](https://www.wikidata.org/wiki/Q2429651) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Brussels |
| Inception | 1548 |
| Designations | protected monument |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 342 elements (outline 1, marker 21, road 361, water 3, building 282, zone 11, wall 22, retaining-wall 14).

Evidence: documented 0, mapped 342, inferred 0, derived 0; heights documented 8, inferred 0, unknown 148.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3502984 historic=castle Q2429651 9 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 282 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 361 mapped (trace size budget); minor lanes are not drawn
- origin moved 11 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.83879/4.35748) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=10; wikidata:Q2429651 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 342 elements); data/traces/egmont-palace-q2429651.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
