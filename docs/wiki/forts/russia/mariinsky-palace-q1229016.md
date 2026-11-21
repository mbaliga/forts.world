# Mariinsky Palace

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mariinsky-palace-q1229016` |
| Coordinates | 59.93069, 30.30968 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.93069/30.30968)) |
| Wikidata | [Q1229016](https://www.wikidata.org/wiki/Q1229016) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|administrative building |
| Administrative area | Saint Petersburg |
| Inception | 1839 |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 29 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 243 elements (outline 1, marker 11, road 347, building 39, waterway 3, wall 5, zone 24, retaining-wall 10).

Evidence: documented 0, mapped 243, inferred 0, derived 0; heights documented 23, inferred 0, unknown 31.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2001070 historic=castle Q1229016 16 m from ledger point
- roads capped: kept the 150 longest of 347 mapped (trace size budget); minor lanes are not drawn
- origin moved 22 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.93069/30.30968) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|administrative building; sitelinks=29; wikidata:Q1229016 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 243 elements); data/traces/mariinsky-palace-q1229016.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
