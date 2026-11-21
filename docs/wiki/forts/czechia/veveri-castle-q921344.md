# Veveří Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `veveri-castle-q921344` |
| Coordinates | 49.25667, 16.46167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.25667/16.46167)) |
| Wikidata | [Q921344](https://www.wikidata.org/wiki/Q921344) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum building |
| Administrative area | Brno-Bystrc |
| Inception | 1300 |
| Designations | national cultural monument of the Czech Republic\|cultural monument of the Czech Republic |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | no |

## What the model contains

Tier **T1**, status `outline+walls`, 159 elements (outline 1, marker 6, road 88, waterway 4, water 3, building 16, zone 18, wall 18, cliff 5).

Evidence: documented 0, mapped 159, inferred 0, derived 0; heights documented 2, inferred 0, unknown 32.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/504144327 historic=castle Q921344 36 m from ledger point
- origin moved 37 m from the ledger point to the outline centroid
- 26 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.25667/16.46167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum building; sitelinks=15; wikidata:Q921344 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 159 elements); data/traces/veveri-castle-q921344.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
