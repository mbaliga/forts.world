# Qalaat al-Madiq

> Syria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `qalaat-al-madiq-q7265911` |
| Coordinates | 35.42001, 36.39213 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.42001/36.39213)) |
| Wikidata | [Q7265911](https://www.wikidata.org/wiki/Q7265911) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|fortified town |
| Administrative area | Syria |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | citadel |

## What the model contains

Tier **T1**, status `outline+walls`, 19 elements (outline 1, road 14, waterway 1, zone 2, wall 1).

Evidence: documented 0, mapped 19, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/171784870 historic=castle Q7265911 55 m from ledger point
- origin moved 59 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.42001/36.39213) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|fortified town; sitelinks=11; wikidata:Q7265911 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 19 elements); data/traces/qalaat-al-madiq-q7265911.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/syria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
