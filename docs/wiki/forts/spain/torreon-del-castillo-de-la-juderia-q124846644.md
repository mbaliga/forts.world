# torreón del Castillo de la Judería

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torreon-del-castillo-de-la-juderia-q124846644` |
| Coordinates | 37.87711, -4.78233 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.87711/-4.78233)) |
| Wikidata | [Q124846644](https://www.wikidata.org/wiki/Q124846644) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Córdoba |
| Inception | 1400 |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 348 elements (outline 1, marker 3, road 254, waterway 4, zone 2, wall 39, building 145, water 22, retaining-wall 7).

Evidence: documented 0, mapped 348, inferred 0, derived 0; heights documented 107, inferred 0, unknown 59.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1416618811 historic=castle 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 145 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 254 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the outline centroid
- 29 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.87711/-4.78233) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q124846644 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 348 elements); data/traces/torreon-del-castillo-de-la-juderia-q124846644.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
