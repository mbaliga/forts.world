# Burgtor

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burgtor-q1016050` |
| Coordinates | 47.0722, 15.443 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.0722/15.443)) |
| Wikidata | [Q1016050](https://www.wikidata.org/wiki/Q1016050) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Graz |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive;stately |
| OSM `description` | Burg - Sitz der Landesregierung |

## What the model contains

Tier **T1**, status `outline+walls`, 323 elements (outline 1, marker 25, road 703, water 7, building 103, waterway 4, wall 8, retaining-wall 5, zone 20).

Evidence: documented 0, mapped 323, inferred 0, derived 0; heights documented 48, inferred 0, unknown 68.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/67773 historic=castle Q874547 80 m from ledger point
- roads capped: kept the 150 longest of 703 mapped (trace size budget); minor lanes are not drawn
- origin moved 69 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.0722/15.443) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q1016050 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 323 elements); data/traces/burgtor-q1016050.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
