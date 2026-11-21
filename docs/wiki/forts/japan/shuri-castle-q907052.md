# Shuri Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `shuri-castle-q907052` |
| Coordinates | 26.21703, 127.71948 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/26.21703/127.71948)) |
| Wikidata | [Q907052](https://www.wikidata.org/wiki/Q907052) (CC0) |
| Wikidata class | fortification |
| Types | museum\|government agency\|official residence\|gusuku |
| Administrative area | Naha |
| Inception | 1400 |
| Designations | part of UNESCO World Heritage Site\|Historic Site of Japan\|National Treasure of Japan |
| UNESCO WHC id | 972-007 |
| Wikipedia language editions | 40 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 332 elements (outline 1, marker 9, zone 100, road 290, water 3, building 184, retaining-wall 84, waterway 5, wall 34).

Evidence: documented 0, mapped 332, inferred 0, derived 0; heights documented 2, inferred 0, unknown 157.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/380508031 historic=yes 7 m from ledger point
- pruned to the outline plus 150 m: 710 -> 486 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 84 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 210 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/26.21703/127.71948) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; museum\|government agency\|official residence\|gusuku; sitelinks=40; wikidata:Q907052 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 332 elements); data/traces/shuri-castle-q907052.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
