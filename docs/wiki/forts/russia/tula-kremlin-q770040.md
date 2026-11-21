# Tula Kremlin

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tula-kremlin-q770040` |
| Coordinates | 54.19537, 37.62008 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.19537/37.62008)) |
| Wikidata | [Q770040](https://www.wikidata.org/wiki/Q770040) (CC0) |
| Wikidata class | fort |
| Types | kremlin\|architectural landmark |
| Administrative area | Tula |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 16 |
| OSM `historic` | castle |
| OSM `castle_type` | kremlin |

## What the model contains

Tier **T1**, status `outline+walls`, 378 elements (outline 1, marker 17, road 364, wall 30, waterway 2, building 133, water 6, zone 51, cliff 1).

Evidence: documented 0, mapped 378, inferred 0, derived 0; heights documented 76, inferred 0, unknown 74.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7042001 historic=castle Q770040 40 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 133 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 364 mapped (trace size budget); minor lanes are not drawn
- origin moved 40 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.19537/37.62008) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; kremlin\|architectural landmark; sitelinks=16; wikidata:Q770040 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 378 elements); data/traces/tula-kremlin-q770040.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
