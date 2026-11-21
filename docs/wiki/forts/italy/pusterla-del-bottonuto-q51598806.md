# Pusterla del Bottonuto

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pusterla-del-bottonuto-q51598806` |
| Coordinates | 45.45966, 9.19541 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.45966/9.19541)) |
| Wikidata | [Q51598806](https://www.wikidata.org/wiki/Q51598806) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Milan |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 276 elements (outline 1, marker 6, road 362, building 101, wall 11, zone 6, water 1).

Evidence: documented 0, mapped 276, inferred 0, derived 0; heights documented 19, inferred 0, unknown 93.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5951681 historic=castle Q3890260 256 m from ledger point
- roads capped: kept the 150 longest of 362 mapped (trace size budget); minor lanes are not drawn
- origin moved 257 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.45966/9.19541) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q51598806 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 276 elements); data/traces/pusterla-del-bottonuto-q51598806.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
