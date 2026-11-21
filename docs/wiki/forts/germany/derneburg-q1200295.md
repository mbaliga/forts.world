# Derneburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `derneburg-q1200295` |
| Coordinates | 52.0955, 10.13198 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.0955/10.13198)) |
| Wikidata | [Q1200295](https://www.wikidata.org/wiki/Q1200295) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|Ortsteil |
| Administrative area | Holle |
| Wikipedia language editions | 4 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 33 elements (outline 1, road 22, water 1, waterway 3, building 1, zone 2, wall 2, cliff 1).

Evidence: documented 0, mapped 33, inferred 0, derived 0; heights documented 1, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/32449567 historic=monument Q96100216 367 m from ledger point
- origin moved 367 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.0955/10.13198) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|Ortsteil; sitelinks=4; wikidata:Q1200295 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 33 elements); data/traces/derneburg-q1200295.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
