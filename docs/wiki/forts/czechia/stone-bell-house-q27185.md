# Stone Bell House

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stone-bell-house-q27185` |
| Coordinates | 50.08787, 14.42211 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.08787/14.42211)) |
| Wikidata | [Q27185](https://www.wikidata.org/wiki/Q27185) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|art gallery\|museum building |
| Administrative area | Prague 1 |
| Inception | 1300 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 350 elements (outline 1, marker 64, road 313, waterway 1, building 214, zone 11, wall 3).

Evidence: documented 0, mapped 350, inferred 0, derived 0; heights documented 104, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10437481 historic=castle Q27185 11 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 214 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 313 mapped (trace size budget); minor lanes are not drawn
- origin moved 13 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.08787/14.42211) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|art gallery\|museum building; sitelinks=9; wikidata:Q27185 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 350 elements); data/traces/stone-bell-house-q27185.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
