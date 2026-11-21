# Brod Fortress

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `brod-fortress-q1276499` |
| Coordinates | 45.15639, 18.00667 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.15639/18.00667)) |
| Wikidata | [Q1276499](https://www.wikidata.org/wiki/Q1276499) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Slavonski Brod |
| Inception | 1715 |
| Designations | Cultural Heritage in Croatia |
| Wikipedia language editions | 16 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 311 elements (outline 1, marker 8, road 240, building 112, waterway 3, wall 5, water 3, zone 25, retaining-wall 4).

Evidence: documented 0, mapped 311, inferred 0, derived 0; heights documented 28, inferred 0, unknown 93.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/380051108 historic=fort Q1276499 49 m from ledger point
- roads capped: kept the 150 longest of 240 mapped (trace size budget); minor lanes are not drawn
- origin moved 49 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.15639/18.00667) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=16; wikidata:Q1276499 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 311 elements); data/traces/brod-fortress-q1276499.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
