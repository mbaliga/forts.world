# Schloss Borbeck

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-borbeck-q878917` |
| Coordinates | 51.46833, 6.94222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.46833/6.94222)) |
| Wikidata | [Q878917](https://www.wikidata.org/wiki/Q878917) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Essen |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `heritage` | 8 |
| OSM `website` | http://www.schloss-borbeck.essen.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 231 elements (outline 1, road 141, building 92, water 3, waterway 13, zone 181, wall 9, retaining-wall 3).

Evidence: documented 0, mapped 231, inferred 0, derived 0; heights documented 5, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/27554748 historic=castle Q878917 13 m from ledger point
- pruned to the outline plus 150 m: 443 -> 243 elements
- roads capped: kept the 80 longest of 92 mapped (trace size budget); minor lanes are not drawn
- origin moved 15 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.46833/6.94222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=9; wikidata:Q878917 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 231 elements); data/traces/schloss-borbeck-q878917.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
