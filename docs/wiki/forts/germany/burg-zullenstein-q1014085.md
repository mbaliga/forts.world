# Burg Zullenstein

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-zullenstein-q1014085` |
| Coordinates | 49.7035, 8.39215 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.7035/8.39215)) |
| Wikidata | [Q1014085](https://www.wikidata.org/wiki/Q1014085) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Biblis |
| Inception | 0850 |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 4 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | 4 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 41 elements (outline 1, road 21, water 1, zone 1, waterway 4, wall 13).

Evidence: documented 0, mapped 41, inferred 0, derived 0; heights documented 0, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/36845041 historic=archaeological_site Q1014085 12 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.7035/8.39215) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q1014085 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 41 elements); data/traces/burg-zullenstein-q1014085.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
