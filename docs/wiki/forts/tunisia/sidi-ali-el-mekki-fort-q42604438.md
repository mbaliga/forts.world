# Sidi Ali El Mekki Fort

> Tunisia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sidi-ali-el-mekki-fort-q42604438` |
| Coordinates | 37.16959, 10.19441 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.16959/10.19441)) |
| Wikidata | [Q42604438](https://www.wikidata.org/wiki/Q42604438) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Ghar el-Melh |
| Designations | listed monument of Tunisia |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 39 elements (outline 1, road 30, building 1, wall 2, zone 2, coastline 1, water 2).

Evidence: documented 0, mapped 39, inferred 0, derived 2; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2314655 historic=castle 1 m from ledger point
- origin moved 1 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1598,"medianInside":3.9,"medianOutside":19.6}
- sea-1: DEM check ok {"cells":299,"medianInside":-0.2,"medianOutside":7.4}
- 253 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.16959/10.19441) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q42604438 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline+walls, 39 elements); data/traces/sidi-ali-el-mekki-fort-q42604438.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/tunisia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
