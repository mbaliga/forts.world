# Burg Schwaneck

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-schwaneck-q1013932` |
| Coordinates | 48.0593, 11.5301 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.0593/11.5301)) |
| Wikidata | [Q1013932](https://www.wikidata.org/wiki/Q1013932) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Pullach |
| Inception | 1843 |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `website` | https://www.burgschwaneck.de/deutsch/home |

## What the model contains

Tier **T1**, status `outline+walls`, 89 elements (outline 1, road 48, water 2, waterway 2, building 30, wall 3, cliff 2, zone 1).

Evidence: documented 0, mapped 89, inferred 0, derived 0; heights documented 18, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/716681280 historic=castle Q1013932 19 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.0593/11.5301) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q1013932 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 89 elements); data/traces/burg-schwaneck-q1013932.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
