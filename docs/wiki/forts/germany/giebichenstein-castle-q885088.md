# Giebichenstein Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `giebichenstein-castle-q885088` |
| Coordinates | 51.5033, 11.9539 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.5033/11.9539)) |
| Wikidata | [Q885088](https://www.wikidata.org/wiki/Q885088) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Halle (Saale) |
| Inception | 0900 |
| Designations | heritage monument in Saxony-Anhalt |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 268 elements (outline 1, marker 3, road 146, building 63, zone 9, wall 36, cliff 4, retaining-wall 4, waterway 2).

Evidence: documented 0, mapped 268, inferred 0, derived 0; heights documented 40, inferred 0, unknown 63.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/305139565 historic=castle Q885088 29 m from ledger point
- origin moved 29 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.5033/11.9539) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=10; wikidata:Q885088 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 268 elements); data/traces/giebichenstein-castle-q885088.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
