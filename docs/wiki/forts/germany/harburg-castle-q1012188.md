# Harburg Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `harburg-castle-q1012188` |
| Coordinates | 48.785, 10.687 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.785/10.687)) |
| Wikidata | [Q1012188](https://www.wikidata.org/wiki/Q1012188) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum\|tourist destination\|vacation home\|spur castle |
| Administrative area | Harburg |
| Inception | 1150 |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 312 elements (outline 1, marker 1, road 143, waterway 3, zone 19, building 229, retaining-wall 4, wall 20, cliff 1).

Evidence: documented 0, mapped 312, inferred 0, derived 0; heights documented 3, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/106617291 historic=castle Q1012188 12 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 229 mapped (trace size budget); the rest of the town is not drawn
- origin moved 13 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.785/10.687) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum\|tourist destination\|vacation home\|spur castle; sitelinks=7; wikidata:Q1012188 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 312 elements); data/traces/harburg-castle-q1012188.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
