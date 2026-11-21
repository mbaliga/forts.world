# Citadella

> Hungary · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `citadella-q206170` |
| Coordinates | 47.48694, 19.04639 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.48694/19.04639)) |
| Wikidata | [Q206170](https://www.wikidata.org/wiki/Q206170) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Budapest District XI |
| Wikipedia language editions | 22 |
| OSM `historic` | fort |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 242 elements (outline 1, marker 7, road 338, building 41, zone 8, retaining-wall 22, waterway 1, cliff 8, water 1, wall 3).

Evidence: documented 0, mapped 242, inferred 0, derived 0; heights documented 13, inferred 0, unknown 53.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/829110605 historic=fort Q206170 11 m from ledger point
- roads capped: kept the 150 longest of 338 mapped (trace size budget); minor lanes are not drawn
- origin moved 12 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.48694/19.04639) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=22; wikidata:Q206170 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 242 elements); data/traces/citadella-q206170.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/hungary.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
