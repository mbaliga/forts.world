# Forte de São Sebastião

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-de-sao-sebastiao-q5472556` |
| Coordinates | 38.65167, -27.21222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.65167/-27.21222)) |
| Wikidata | [Q5472556](https://www.wikidata.org/wiki/Q5472556) (CC0) |
| Wikidata class | fort |
| Types | fortress\|cultural heritage\|fort |
| Administrative area | Nossa Senhora da Conceição |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 113 elements (outline 1, road 37, building 59, zone 2, wall 6, retaining-wall 3, coastline 3, water 2).

Evidence: documented 0, mapped 113, inferred 0, derived 2; heights documented 26, inferred 0, unknown 42.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14519602 historic=fort Q5472556 13 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":21,"medianInside":0.1,"medianOutside":0}
- sea-1: DEM check ok {"cells":267,"medianInside":0,"medianOutside":11.1}
- 12 DEM cells below -3 m (bathymetry) clamped to -3 m
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.65167/-27.21222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|cultural heritage\|fort; sitelinks=5; wikidata:Q5472556 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 113 elements); data/traces/forte-de-sao-sebastiao-q5472556.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
