# Heunginjimun

> South Korea · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `heunginjimun-q482721` |
| Coordinates | 37.57115, 127.00964 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.57115/127.00964)) |
| Wikidata | [Q482721](https://www.wikidata.org/wiki/Q482721) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Seoul |
| Designations | Treasure of the Republic of Korea |
| Wikipedia language editions | 20 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 202 elements (outline 1, road 145, building 36, waterway 3, wall 8, zone 6, water 1, retaining-wall 2).

Evidence: documented 0, mapped 202, inferred 0, derived 0; heights documented 25, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/754311138 historic=castle 328 m from ledger point
- origin moved 328 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.57115/127.00964) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=20; wikidata:Q482721 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 202 elements); data/traces/heunginjimun-q482721.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/south-korea.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
