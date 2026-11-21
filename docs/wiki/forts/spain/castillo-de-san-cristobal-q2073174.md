# Castillo de San Cristóbal

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-san-cristobal-q2073174` |
| Coordinates | 28.46683, -16.24747 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/28.46683/-16.24747)) |
| Wikidata | [Q2073174](https://www.wikidata.org/wiki/Q2073174) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Santa Cruz de Tenerife |
| Inception | 1575 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 220 elements (outline 1, road 192, building 24, coastline 1, wall 1, water 1).

Evidence: documented 0, mapped 220, inferred 0, derived 1; heights documented 2, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/78508060 historic=castle 1060 m from ledger point
- origin moved 1061 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":86,"medianInside":0,"medianOutside":9.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/28.46683/-16.24747) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=9; wikidata:Q2073174 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 220 elements); data/traces/castillo-de-san-cristobal-q2073174.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
