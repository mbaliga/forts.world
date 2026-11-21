# Vindolanda

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vindolanda-q1233131` |
| Coordinates | 54.99159, -2.3595 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.99159/-2.3595)) |
| Wikidata | [Q1233131](https://www.wikidata.org/wiki/Q1233131) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|archaeological site\|ancient Roman structure\|Samian Ware Discovery Site |
| Administrative area | Henshaw |
| Inception | 0085 |
| Designations | part of a Scheduled Monument |
| Wikipedia language editions | 22 |
| OSM `historic` | archaeological_site |
| OSM `website` | https://www.vindolanda.com |

## What the model contains

Tier **T1**, status `outline+walls`, 380 elements (outline 1, marker 7, road 103, waterway 15, wall 544, building 19, zone 30, retaining-wall 4, cliff 2).

Evidence: documented 0, mapped 380, inferred 0, derived 0; heights documented 184, inferred 0, unknown 164.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/122660652 historic=archaeological_site Q1233131 180 m from ledger point
- pruned to the outline plus 60 m: 725 -> 635 elements
- roads capped: kept the 40 longest of 59 mapped (trace size budget); minor lanes are not drawn
- elements capped: kept the 380 nearest the outline centre of 616 mapped (trace size budget); the rest are not drawn
- origin moved 174 m from the ledger point to the outline centroid
- 19 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.99159/-2.3595) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|archaeological site\|ancient Roman structure\|Samian Ware Discovery Site; sitelinks=22; wikidata:Q1233131 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 380 elements); data/traces/vindolanda-q1233131.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
