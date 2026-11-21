# Qala-i-Jangi

> Afghanistan · Balkh Province · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `qala-i-jangi-q7265904` |
| Coordinates | 36.666667, 66.983333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.666667/66.983333)) |
| Wikidata | [Q7265904](https://www.wikidata.org/wiki/Q7265904) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Balkh Province |
| Wikipedia language editions | 11 |
| Programme catalogue | confidence medium, significance rank 3650; sources wikidata:Q7265904 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 28 elements (outline 1, road 22, waterway 1, wall 3).

Evidence: documented 0, mapped 28, inferred 0, derived 0; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/151244523 historic=castle Q7265904 102 m from ledger point
- origin moved 107 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.666667/66.983333) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=3650; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 28 elements); data/traces/qala-i-jangi-q7265904.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/afghanistan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
