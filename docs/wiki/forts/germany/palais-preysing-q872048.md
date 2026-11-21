# Palais Preysing

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-preysing-q872048` |
| Coordinates | 48.14149, 11.57721 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.14149/11.57721)) |
| Wikidata | [Q872048](https://www.wikidata.org/wiki/Q872048) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|mansion |
| Administrative area | Munich |
| Inception | 1828 |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 297 elements (outline 1, marker 3, road 320, zone 32, building 104, waterway 3, wall 2, retaining-wall 2).

Evidence: documented 0, mapped 297, inferred 0, derived 0; heights documented 68, inferred 0, unknown 40.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/52740 historic=castle Q872048 3 m from ledger point
- roads capped: kept the 150 longest of 320 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.14149/11.57721) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|mansion; sitelinks=6; wikidata:Q872048 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 297 elements); data/traces/palais-preysing-q872048.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
