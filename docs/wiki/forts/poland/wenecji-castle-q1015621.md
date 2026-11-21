# Wenecji Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wenecji-castle-q1015621` |
| Coordinates | 52.79757, 17.74982 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.79757/17.74982)) |
| Wikidata | [Q1015621](https://www.wikidata.org/wiki/Q1015621) (CC0) |
| Wikidata class | castle |
| Types | castle\|architectural heritage monument |
| Administrative area | Żnin |
| Inception | 1390 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 45 elements (outline 1, water 2, wall 1, road 16, zone 5, building 18, waterway 2).

Evidence: documented 0, mapped 45, inferred 0, derived 0; heights documented 6, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/17163076 historic=castle Q1015621 1 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.79757/17.74982) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|architectural heritage monument; sitelinks=8; wikidata:Q1015621 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 45 elements); data/traces/wenecji-castle-q1015621.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
