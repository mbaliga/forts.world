# Kungsholms Fort

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kungsholms-fort-q18291465` |
| Coordinates | 56.10797, 15.58877 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.10797/15.58877)) |
| Wikidata | [Q18291465](https://www.wikidata.org/wiki/Q18291465) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Karlskrona Municipality |
| Inception | 1680 |
| Designations | governmental listed building complex |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 37 elements (outline 1, coastline 10, building 19, wall 1, waterway 1, water 5).

Evidence: documented 0, mapped 37, inferred 0, derived 5; heights documented 0, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/309792260 historic=yes Q18291465 219 m from ledger point
- island ring (128795 m2) cut out of sea-0
- island ring (8118 m2) cut out of sea-0
- island ring (1865 m2) cut out of sea-0
- island ring (667 m2) cut out of sea-0
- origin moved 190 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1664,"medianInside":-3,"medianOutside":1.9}
- sea-1: DEM check ok {"cells":2001,"medianInside":0,"medianOutside":0.6}
- sea-2: DEM check failed {"cells":2025,"medianInside":0,"medianOutside":0}
- sea-3: DEM check failed {"cells":2025,"medianInside":0,"medianOutside":0}
- sea-4: DEM check ok {"cells":1979,"medianInside":0,"medianOutside":0.5}
- 2855 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.10797/15.58877) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q18291465 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 37 elements); data/traces/kungsholms-fort-q18291465.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
