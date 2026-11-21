# Castell de Cunit

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castell-de-cunit-q17596156` |
| Coordinates | 41.1972, 1.63278 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.1972/1.63278)) |
| Wikidata | [Q17596156](https://www.wikidata.org/wiki/Q17596156) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Cunit |
| Designations | bien de interés cultural\|Cultural Asset of National Interest |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 218 elements (outline 1, marker 3, road 432, building 55, waterway 3, zone 5, wall 1).

Evidence: documented 0, mapped 218, inferred 0, derived 0; heights documented 8, inferred 0, unknown 48.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/815926463 historic=castle 25 m from ledger point
- roads capped: kept the 150 longest of 432 mapped (trace size budget); minor lanes are not drawn
- origin moved 25 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.1972/1.63278) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q17596156 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 218 elements); data/traces/castell-de-cunit-q17596156.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
