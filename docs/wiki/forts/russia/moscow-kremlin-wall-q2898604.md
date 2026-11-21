# Moscow Kremlin Wall

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `moscow-kremlin-wall-q2898604` |
| Coordinates | 55.74917, 37.61667 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.74917/37.61667)) |
| Wikidata | [Q2898604](https://www.wikidata.org/wiki/Q2898604) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall\|architectural landmark |
| Administrative area | Tverskoy District |
| Inception | 1485 |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 20 |
| OSM `historic` | castle |
| OSM `castle_type` | kremlin |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 379 elements (outline 1, marker 21, road 1033, building 104, waterway 7, retaining-wall 21, wall 27, zone 47, water 1).

Evidence: documented 0, mapped 379, inferred 0, derived 0; heights documented 57, inferred 0, unknown 95.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1360641 historic=castle Q133274 52 m from ledger point
- roads capped: kept the 150 longest of 1033 mapped (trace size budget); minor lanes are not drawn
- origin moved 50 m from the ledger point to the outline centroid
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.74917/37.61667) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall\|architectural landmark; sitelinks=20; wikidata:Q2898604 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 379 elements); data/traces/moscow-kremlin-wall-q2898604.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
