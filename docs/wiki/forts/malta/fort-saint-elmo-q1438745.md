# Fort Saint Elmo

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-saint-elmo-q1438745` |
| Coordinates | 35.90194, 14.51861 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.90194/14.51861)) |
| Wikidata | [Q1438745](https://www.wikidata.org/wiki/Q1438745) (CC0) |
| Wikidata class | fort |
| Types | star fort\|military museum |
| Administrative area | Valletta |
| Inception | 1552 |
| Designations | Grade 1 |
| Wikipedia language editions | 22 |
| OSM `historic` | fort |
| OSM `description` | Crusader castle dating from 1533 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 144 elements (outline 1, road 72, building 41, retaining-wall 6, zone 2, wall 18, coastline 2, water 1).

Evidence: documented 0, mapped 144, inferred 0, derived 1; heights documented 2, inferred 0, unknown 64.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7893491 historic=fort Q1438745 18 m from ledger point
- origin moved 17 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1141,"medianInside":0,"medianOutside":16.8}
- 6 DEM cells below -3 m (bathymetry) clamped to -3 m
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.90194/14.51861) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; star fort\|military museum; sitelinks=22; wikidata:Q1438745 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 144 elements); data/traces/fort-saint-elmo-q1438745.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
