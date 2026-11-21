# Roter Turm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `roter-turm-q1421149` |
| Coordinates | 50.8342, 12.9216 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.8342/12.9216)) |
| Wikidata | [Q1421149](https://www.wikidata.org/wiki/Q1421149) (CC0) |
| Wikidata class | fortification |
| Types | tower\|city gate |
| Administrative area | Zentrum |
| Inception | 1150 |
| Designations | heritage monument in Saxony |
| Wikipedia language editions | 5 |
| OSM `historic` | monument |
| OSM `description` | Depicts Marx' head |

## What the model contains

Tier **T1**, status `outline+walls`, 233 elements (outline 1, marker 5, road 324, waterway 2, building 43, water 3, retaining-wall 7, zone 20, wall 2).

Evidence: documented 0, mapped 233, inferred 0, derived 0; heights documented 31, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/44032484 historic=monument Q315569 227 m from ledger point
- roads capped: kept the 150 longest of 324 mapped (trace size budget); minor lanes are not drawn
- origin moved 225 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.8342/12.9216) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower\|city gate; sitelinks=5; wikidata:Q1421149 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 233 elements); data/traces/roter-turm-q1421149.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
