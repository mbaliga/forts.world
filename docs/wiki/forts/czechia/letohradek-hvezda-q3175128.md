# Letohrádek Hvězda

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `letohradek-hvezda-q3175128` |
| Coordinates | 50.0834, 14.3263 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.0834/14.3263)) |
| Wikidata | [Q3175128](https://www.wikidata.org/wiki/Q3175128) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Liboc |
| Inception | 1555 |
| Designations | part of national cultural heritage site in the Czech Republic |
| Wikipedia language editions | 16 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 107 elements (outline 1, marker 1, road 69, wall 7, waterway 11, building 5, water 2, zone 10, retaining-wall 1).

Evidence: documented 0, mapped 107, inferred 0, derived 0; heights documented 4, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/9093338 historic=castle Q3175128 5 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.0834/14.3263) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=16; wikidata:Q3175128 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 107 elements); data/traces/letohradek-hvezda-q3175128.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
