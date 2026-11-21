# Vorburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vorburg-q1783856` |
| Coordinates | 49.8743, 11.17192 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.8743/11.17192)) |
| Wikidata | [Q1783856](https://www.wikidata.org/wiki/Q1783856) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|no\|château\|Ortsteil |
| Administrative area | Heiligenstadt in Oberfranken |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `ruins` | no |

## What the model contains

Tier **T1**, status `outline-only`, 34 elements (outline 1, marker 1, building 5, road 26, zone 1).

Evidence: documented 0, mapped 34, inferred 0, derived 0; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/366191 historic=castle 14 m from ledger point
- origin moved 17 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.8743/11.17192) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|no\|château\|Ortsteil; sitelinks=4; wikidata:Q1783856 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 34 elements); data/traces/vorburg-q1783856.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
