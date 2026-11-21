# Markovi Kuli

> North Macedonia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `markovi-kuli-q1283784` |
| Coordinates | 41.36166, 21.5385 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.36166/21.5385)) |
| Wikidata | [Q1283784](https://www.wikidata.org/wiki/Q1283784) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|wall\|protected area\|archaeological site |
| Administrative area | Prilep Municipality |
| Designations | Heritage Site in North Macedonia\|Tentative World Heritage Site\|World Heritage Site |
| Wikipedia language editions | 22 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 32 elements (outline 1, marker 1, building 4, zone 4, wall 10, road 12).

Evidence: documented 0, mapped 32, inferred 0, derived 0; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6620184 historic=castle Q1283784 3 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.36166/21.5385) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|wall\|protected area\|archaeological site; sitelinks=22; wikidata:Q1283784 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 32 elements); data/traces/markovi-kuli-q1283784.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/north-macedonia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
