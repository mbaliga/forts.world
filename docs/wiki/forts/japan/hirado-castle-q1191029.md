# Hirado Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hirado-castle-q1191029` |
| Coordinates | 33.36868, 129.55752 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.36868/129.55752)) |
| Wikidata | [Q1191029](https://www.wikidata.org/wiki/Q1191029) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Hirado |
| Inception | 1718 |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `castle_type` | shiro |

## What the model contains

Tier **T1**, status `outline+walls`, 212 elements (outline 1, marker 26, road 66, coastline 1, building 75, retaining-wall 29, wall 12, water 2).

Evidence: documented 0, mapped 212, inferred 0, derived 2; heights documented 0, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/586353581 historic=castle Q1191029 14 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":50,"medianInside":3.6,"medianOutside":18}
- sea-1: DEM check ok {"cells":4,"medianInside":6.3,"medianOutside":13.4}
- 12 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.36868/129.55752) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=15; wikidata:Q1191029 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 212 elements); data/traces/hirado-castle-q1191029.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
