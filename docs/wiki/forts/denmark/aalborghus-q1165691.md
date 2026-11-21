# Aalborghus

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `aalborghus-q1165691` |
| Coordinates | 57.04941, 9.92446 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.04941/9.92446)) |
| Wikidata | [Q1165691](https://www.wikidata.org/wiki/Q1165691) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Aalborg Municipality |
| Inception | 1555 |
| Designations | monument on Kulturstyrelsen register |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 269 elements (outline 1, road 165, building 73, coastline 3, wall 18, retaining-wall 3, zone 2, waterway 2, water 2).

Evidence: documented 0, mapped 269, inferred 0, derived 1; heights documented 36, inferred 0, unknown 58.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/88867986 historic=castle Q1165691 9 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":62,"medianInside":3,"medianOutside":7.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.04941/9.92446) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=9; wikidata:Q1165691 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 269 elements); data/traces/aalborghus-q1165691.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
