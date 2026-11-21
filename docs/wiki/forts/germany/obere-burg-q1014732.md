# Obere Burg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `obere-burg-q1014732` |
| Coordinates | 49.407, 8.71284 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.407/8.71284)) |
| Wikidata | [Q1014732](https://www.wikidata.org/wiki/Q1014732) (CC0) |
| Wikidata class | castle |
| Types | castle\|deserted castle site |
| Administrative area | Heidelberg |
| Inception | 1000 |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `website` | https://www.schloss-heidelberg.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 277 elements (outline 1, marker 21, road 455, building 283, retaining-wall 35, zone 42, water 4, wall 64, waterway 5, cliff 1).

Evidence: documented 0, mapped 277, inferred 0, derived 0; heights documented 56, inferred 0, unknown 85.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/254154168 historic=castle Q327265 426 m from ledger point
- pruned to the outline plus 150 m: 911 -> 634 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 146 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 351 mapped (trace size budget); minor lanes are not drawn
- origin moved 426 m from the ledger point to the centre of the mapped site
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.407/8.71284) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|deserted castle site; sitelinks=1; wikidata:Q1014732 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 277 elements); data/traces/obere-burg-q1014732.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
