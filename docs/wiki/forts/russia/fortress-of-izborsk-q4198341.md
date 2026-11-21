# Fortress of Izborsk

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortress-of-izborsk-q4198341` |
| Coordinates | 57.71028, 27.86077 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.71028/27.86077)) |
| Wikidata | [Q4198341](https://www.wikidata.org/wiki/Q4198341) (CC0) |
| Wikidata class | fort |
| Types | fortress\|historic site\|archaeological site\|architectural landmark |
| Administrative area | Izborsk |
| Inception | 1341 |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | kremlin |

## What the model contains

Tier **T1**, status `outline+walls`, 284 elements (outline 1, marker 4, road 68, cliff 3, building 199, wall 7, waterway 2).

Evidence: documented 0, mapped 284, inferred 0, derived 0; heights documented 26, inferred 0, unknown 180.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6602664 historic=castle 28 m from ledger point
- origin moved 27 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.71028/27.86077) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|historic site\|archaeological site\|architectural landmark; sitelinks=10; wikidata:Q4198341 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 284 elements); data/traces/fortress-of-izborsk-q4198341.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
