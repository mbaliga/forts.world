# Schloss Pyrmont

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-pyrmont-q2243023` |
| Coordinates | 51.98391, 9.24826 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.98391/9.24826)) |
| Wikidata | [Q2243023](https://www.wikidata.org/wiki/Q2243023) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Bad Pyrmont |
| Designations | architectural heritage monument |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 214 elements (outline 1, marker 3, road 155, zone 4, water 2, waterway 1, building 44, wall 4).

Evidence: documented 0, mapped 214, inferred 0, derived 0; heights documented 10, inferred 0, unknown 38.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11510724 historic=castle 6 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.98391/9.24826) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=5; wikidata:Q2243023 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 214 elements); data/traces/schloss-pyrmont-q2243023.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
