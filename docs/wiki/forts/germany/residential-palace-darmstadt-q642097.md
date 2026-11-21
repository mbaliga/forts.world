# Residential Palace Darmstadt

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `residential-palace-darmstadt-q642097` |
| Coordinates | 49.87365, 8.65504 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.87365/8.65504)) |
| Wikidata | [Q642097](https://www.wikidata.org/wiki/Q642097) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|museum\|château |
| Administrative area | Darmstadt |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 341 elements (outline 1, marker 16, road 469, wall 21, building 188, waterway 7, water 4, zone 17, retaining-wall 5).

Evidence: documented 0, mapped 341, inferred 0, derived 0; heights documented 89, inferred 0, unknown 57.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/33436097 historic=castle 43 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 188 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 469 mapped (trace size budget); minor lanes are not drawn
- origin moved 44 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.87365/8.65504) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|museum\|château; sitelinks=6; wikidata:Q642097 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 341 elements); data/traces/residential-palace-darmstadt-q642097.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
