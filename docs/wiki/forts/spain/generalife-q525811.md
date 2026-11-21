# Generalife

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `generalife-q525811` |
| Coordinates | 37.17695, -3.58507 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.17695/-3.58507)) |
| Wikidata | [Q525811](https://www.wikidata.org/wiki/Q525811) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|Historic Garden |
| Administrative area | Granada |
| Inception | C13 |
| Designations | part of UNESCO World Heritage Site\|bien de interés cultural |
| UNESCO WHC id | 314-001 |
| Wikipedia language editions | 47 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 154 elements (outline 1, marker 4, road 443, building 77, water 15, wall 23, waterway 19, zone 92, retaining-wall 21, cliff 2).

Evidence: documented 0, mapped 154, inferred 0, derived 0; heights documented 20, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/196490785 historic=castle Q525811 97 m from ledger point
- pruned to the outline plus 150 m: 697 -> 266 elements
- roads capped: kept the 80 longest of 192 mapped (trace size budget); minor lanes are not drawn
- origin moved 94 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.17695/-3.58507) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|Historic Garden; sitelinks=47; wikidata:Q525811 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 154 elements); data/traces/generalife-q525811.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
