# Uffhubtor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `uffhubtor-q1331031` |
| Coordinates | 49.9616, 8.06408 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.9616/8.06408)) |
| Wikidata | [Q1331031](https://www.wikidata.org/wiki/Q1331031) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Ingelheim am Rhein |
| Inception | 1400 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | tower |

## What the model contains

Tier **T1**, status `outline+walls`, 290 elements (outline 1, marker 6, road 70, zone 2, wall 9, building 200, waterway 2).

Evidence: documented 0, mapped 290, inferred 0, derived 0; heights documented 8, inferred 0, unknown 201.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/604036489 historic=castle 161 m from ledger point
- origin moved 161 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.9616/8.06408) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q1331031 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 290 elements); data/traces/uffhubtor-q1331031.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
