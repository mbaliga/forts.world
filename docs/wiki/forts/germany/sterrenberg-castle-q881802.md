# Sterrenberg Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sterrenberg-castle-q881802` |
| Coordinates | 50.2134, 7.63314 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.2134/7.63314)) |
| Wikidata | [Q881802](https://www.wikidata.org/wiki/Q881802) (CC0) |
| Wikidata class | ruin |
| Types | castle\|castle ruin |
| Administrative area | Kamp-Bornhofen |
| Inception | 1190 |
| Designations | cultural heritage monument in Rhineland-Palatinate |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |
| OSM `website` | http://www.burg-sterrenberg.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 61 elements (outline 1, road 23, waterway 6, zone 8, wall 7, building 15, retaining-wall 1).

Evidence: documented 0, mapped 61, inferred 0, derived 0; heights documented 0, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/129148421 historic=castle Q881802 44 m from ledger point
- origin moved 45 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.2134/7.63314) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|castle ruin; sitelinks=8; wikidata:Q881802 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 61 elements); data/traces/sterrenberg-castle-q881802.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
