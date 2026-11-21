# Eszterházy Palace

> Hungary · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `eszterhazy-palace-q925864` |
| Coordinates | 47.621, 16.87169 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.621/16.87169)) |
| Wikidata | [Q925864](https://www.wikidata.org/wiki/Q925864) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|château |
| Administrative area | Fertőd |
| Wikipedia language editions | 23 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 110 elements (outline 1, road 87, waterway 1, building 17, wall 4).

Evidence: documented 0, mapped 110, inferred 0, derived 0; heights documented 2, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3780011 historic=castle Q925864 22 m from ledger point
- origin moved 25 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.621/16.87169) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|château; sitelinks=23; wikidata:Q925864 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 110 elements); data/traces/eszterhazy-palace-q925864.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/hungary.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
