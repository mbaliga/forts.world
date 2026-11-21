# Castello Malaspina

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-malaspina-q3889963` |
| Coordinates | 44.07847, 10.09964 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.07847/10.09964)) |
| Wikidata | [Q3889963](https://www.wikidata.org/wiki/Q3889963) (CC0) |
| Wikidata class | castle |
| Types | palace\|castle |
| Administrative area | Carrara |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 318 elements (outline 1, marker 8, road 200, building 770, waterway 6, water 1, zone 14, retaining-wall 5, wall 13).

Evidence: documented 0, mapped 318, inferred 0, derived 0; heights documented 2, inferred 0, unknown 136.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/498215469 historic=monument 129 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 770 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 200 mapped (trace size budget); minor lanes are not drawn
- origin moved 129 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.07847/10.09964) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; palace\|castle; sitelinks=4; wikidata:Q3889963 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 318 elements); data/traces/castello-malaspina-q3889963.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
