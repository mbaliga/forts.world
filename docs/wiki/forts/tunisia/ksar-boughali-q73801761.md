# Ksar Boughali

> Tunisia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ksar-boughali-q73801761` |
| Coordinates | 33.06083, 10.33778 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.06083/10.33778)) |
| Wikidata | [Q73801761](https://www.wikidata.org/wiki/Q73801761) (CC0) |
| Wikidata class | fortification |
| Types | ksar |
| Administrative area | Ghomrassen |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 70 elements (outline 1, marker 1, road 35, wall 3, building 428, cliff 3, water 1, waterway 1).

Evidence: documented 0, mapped 70, inferred 0, derived 0; heights documented 0, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/422427817 historic=ruins 103 m from ledger point
- present-day buildings capped: kept the 25 nearest the outline centre of 428 mapped (trace size budget); the rest of the town is not drawn
- origin moved 102 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.06083/10.33778) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

world; type=fortification; ksar; sitelinks=3; wikidata:Q73801761 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline+walls, 473 elements); data/traces/ksar-boughali-q73801761.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/tunisia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
