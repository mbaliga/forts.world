# Dverce Palace

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dverce-palace-q12639210` |
| Coordinates | 45.81457, 15.97359 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.81457/15.97359)) |
| Wikidata | [Q12639210](https://www.wikidata.org/wiki/Q12639210) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|palace |
| Administrative area | Gornji Grad–Medveščak |
| Inception | 1800 |
| Designations | Register of Cultural Goods of Croatia |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 333 elements (outline 1, marker 10, road 266, building 236, wall 20, zone 21, retaining-wall 10, water 1).

Evidence: documented 0, mapped 333, inferred 0, derived 0; heights documented 33, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/296011545 historic=castle Q12639210 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 236 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 266 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.81457/15.97359) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|palace; sitelinks=5; wikidata:Q12639210 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 333 elements); data/traces/dverce-palace-q12639210.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
