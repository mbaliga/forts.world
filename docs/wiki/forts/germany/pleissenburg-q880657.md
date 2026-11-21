# Pleissenburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pleissenburg-q880657` |
| Coordinates | 51.3362, 12.3721 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.3362/12.3721)) |
| Wikidata | [Q880657](https://www.wikidata.org/wiki/Q880657) (CC0) |
| Wikidata class | castle |
| Types | castle\|destroyed building or structure |
| Administrative area | Leipzig |
| Wikipedia language editions | 6 |
| OSM `historic` | yes |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 281 elements (outline 1, marker 14, road 326, building 96, waterway 5, retaining-wall 5, water 1, wall 7, zone 2).

Evidence: documented 0, mapped 281, inferred 0, derived 0; heights documented 73, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1326230 historic=yes Q894408 277 m from ledger point
- roads capped: kept the 150 longest of 326 mapped (trace size budget); minor lanes are not drawn
- origin moved 277 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.3362/12.3721) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|destroyed building or structure; sitelinks=6; wikidata:Q880657 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 281 elements); data/traces/pleissenburg-q880657.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
