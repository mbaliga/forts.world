# Louvre Castle

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `louvre-castle-q15992417` |
| Coordinates | 48.8602, 2.338 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.8602/2.338)) |
| Wikidata | [Q15992417](https://www.wikidata.org/wiki/Q15992417) (CC0) |
| Wikidata class | castle |
| Types | castle\|destroyed building or structure |
| Administrative area | Paris |
| Inception | 1190 |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |
| OSM `website` | https://www.louvre.fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 281 elements (outline 1, marker 94, road 1568, wall 42, building 445, zone 28, water 2, retaining-wall 43, waterway 13).

Evidence: documented 0, mapped 281, inferred 0, derived 0; heights documented 54, inferred 0, unknown 63.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3262297 historic=castle Q1075988 149 m from ledger point
- pruned to the outline plus 150 m: 2236 -> 1329 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 148 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 1040 mapped (trace size budget); minor lanes are not drawn
- origin moved 231 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.8602/2.338) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|destroyed building or structure; sitelinks=9; wikidata:Q15992417 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 281 elements); data/traces/louvre-castle-q15992417.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
