# Ludwigsburg Palace

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ludwigsburg-palace-q704831` |
| Coordinates | 48.90015, 9.19597 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.90015/9.19597)) |
| Wikidata | [Q704831](https://www.wikidata.org/wiki/Q704831) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|palace\|royal palace |
| Administrative area | Ludwigsburg |
| Inception | 1704 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 25 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |
| OSM `website` | https://www.schloss-ludwigsburg.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 273 elements (outline 1, marker 4, road 340, water 11, building 154, waterway 13, zone 118, cliff 1, wall 6).

Evidence: documented 0, mapped 273, inferred 0, derived 0; heights documented 5, inferred 0, unknown 60.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/228172 historic=castle Q704831 9 m from ledger point
- pruned to the outline plus 150 m: 648 -> 441 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 70 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 238 mapped (trace size budget); minor lanes are not drawn
- origin moved 8 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.90015/9.19597) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|palace\|royal palace; sitelinks=25; wikidata:Q704831 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 273 elements); data/traces/ludwigsburg-palace-q704831.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
