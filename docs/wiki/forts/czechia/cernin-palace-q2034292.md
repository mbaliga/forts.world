# Černín Palace

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cernin-palace-q2034292` |
| Coordinates | 50.08875, 14.38988 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.08875/14.38988)) |
| Wikidata | [Q2034292](https://www.wikidata.org/wiki/Q2034292) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|building of public administration |
| Administrative area | Hradčany |
| Inception | 1700 |
| Designations | national cultural monument of the Czech Republic\|cultural monument of the Czech Republic |
| Wikipedia language editions | 18 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 361 elements (outline 1, marker 21, road 193, building 108, wall 50, retaining-wall 6, water 3, zone 20, waterway 2).

Evidence: documented 0, mapped 361, inferred 0, derived 0; heights documented 65, inferred 0, unknown 99.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2403951 historic=castle Q2034292 31 m from ledger point
- roads capped: kept the 150 longest of 193 mapped (trace size budget); minor lanes are not drawn
- origin moved 36 m from the ledger point to the outline centroid
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.08875/14.38988) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|building of public administration; sitelinks=18; wikidata:Q2034292 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 361 elements); data/traces/cernin-palace-q2034292.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
