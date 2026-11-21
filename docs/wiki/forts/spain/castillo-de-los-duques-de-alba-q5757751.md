# Castillo de los Duques de Alba

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-los-duques-de-alba-q5757751` |
| Coordinates | 40.82417, -5.51361 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.82417/-5.51361)) |
| Wikidata | [Q5757751](https://www.wikidata.org/wiki/Q5757751) (CC0) |
| Wikidata class | castle |
| Types | tower\|castle |
| Administrative area | Alba de Tormes |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 340 elements (outline 1, marker 2, road 248, retaining-wall 4, waterway 1, building 422, zone 39, wall 23).

Evidence: documented 0, mapped 340, inferred 0, derived 0; heights documented 124, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/334464074 historic=castle 10 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 422 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 248 mapped (trace size budget); minor lanes are not drawn
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.82417/-5.51361) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; tower\|castle; sitelinks=3; wikidata:Q5757751 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 340 elements); data/traces/castillo-de-los-duques-de-alba-q5757751.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
