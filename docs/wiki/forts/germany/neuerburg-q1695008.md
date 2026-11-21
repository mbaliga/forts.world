# Neuerburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `neuerburg-q1695008` |
| Coordinates | 50.0107, 6.29037 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.0107/6.29037)) |
| Wikidata | [Q1695008](https://www.wikidata.org/wiki/Q1695008) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Neuerburg |
| Inception | 0892 |
| Designations | cultural heritage monument in Rhineland-Palatinate |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 210 elements (outline 1, road 52, zone 2, wall 6, waterway 8, water 1, building 138, retaining-wall 2).

Evidence: documented 0, mapped 210, inferred 0, derived 0; heights documented 4, inferred 0, unknown 142.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/155415466 historic=castle 7 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid
- 17 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.0107/6.29037) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q1695008 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 210 elements); data/traces/neuerburg-q1695008.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
