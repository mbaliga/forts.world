# Sketrick Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sketrick-castle-q7534770` |
| Coordinates | 54.4879, -5.6485 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.4879/-5.6485)) |
| Wikidata | [Q7534770](https://www.wikidata.org/wiki/Q7534770) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Ballydorn |
| Inception | 1599 |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 47 elements (outline 1, coastline 4, road 13, building 18, zone 8, water 3).

Evidence: documented 0, mapped 47, inferred 0, derived 3; heights documented 0, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/194295083 historic=castle 42 m from ledger point
- origin moved 42 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":398,"medianInside":4.8,"medianOutside":5.1}
- sea-1: DEM check ok {"cells":120,"medianInside":4.7,"medianOutside":4.8}
- sea-2: DEM check ok {"cells":81,"medianInside":3.4,"medianOutside":5.6}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.4879/-5.6485) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q7534770 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 47 elements); data/traces/sketrick-castle-q7534770.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
