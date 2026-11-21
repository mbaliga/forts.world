# Potongmun

> North Korea · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `potongmun-q717009` |
| Coordinates | 39.02722, 125.74167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.02722/125.74167)) |
| Wikidata | [Q717009](https://www.wikidata.org/wiki/Q717009) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Pyongyang |
| Inception | 0600 |
| Wikipedia language editions | 14 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 53 elements (outline 1, road 30, building 7, zone 14, wall 1).

Evidence: documented 0, mapped 53, inferred 0, derived 0; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/425992663 historic=monument Q1325633 1119 m from ledger point
- origin moved 1117 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.02722/125.74167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=14; wikidata:Q717009 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 53 elements); data/traces/potongmun-q717009.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/north-korea.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
