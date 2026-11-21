# Roman walls of Barcelona

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `roman-walls-of-barcelona-q6928354` |
| Coordinates | 41.3841, 2.17541 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.3841/2.17541)) |
| Wikidata | [Q6928354](https://www.wikidata.org/wiki/Q6928354) (CC0) |
| Wikidata class | fortification |
| Types | city walls\|urban ensemble |
| Administrative area | Gothic Quarter |
| Inception | 0400 |
| Designations | bien de interés cultural\|Cultural Asset of National Interest |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 373 elements (outline 1, marker 19, road 179, building 154, wall 12, waterway 4, retaining-wall 1, water 2, zone 1).

Evidence: documented 0, mapped 373, inferred 0, derived 0; heights documented 139, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7364282 historic=castle Q3751457 16 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.3841/2.17541) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls\|urban ensemble; sitelinks=5; wikidata:Q6928354 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 373 elements); data/traces/roman-walls-of-barcelona-q6928354.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
