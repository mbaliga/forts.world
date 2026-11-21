# Sliema Point Battery

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sliema-point-battery-q2294164` |
| Coordinates | 35.91414, 14.50714 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.91414/14.50714)) |
| Wikidata | [Q2294164](https://www.wikidata.org/wiki/Q2294164) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Sliema |
| Inception | 1872 |
| Designations | Grade 1 |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |
| OSM `barrier` | ditch |

## What the model contains

Tier **T1**, status `outline+walls`, 141 elements (outline 1, marker 1, road 73, zone 5, wall 10, building 47, retaining-wall 1, coastline 1, water 2).

Evidence: documented 0, mapped 141, inferred 0, derived 2; heights documented 3, inferred 0, unknown 55.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/352179825 historic=fort Q1028285 611 m from ledger point
- origin moved 615 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1,"medianInside":6,"medianOutside":14.1}
- sea-1: DEM check ok {"cells":64,"medianInside":1.4,"medianOutside":16}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.91414/14.50714) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=5; wikidata:Q2294164 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 141 elements); data/traces/sliema-point-battery-q2294164.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
