# Kassiopi Castle

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kassiopi-castle-q15297479` |
| Coordinates | 39.7923, 19.9211 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.7923/19.9211)) |
| Wikidata | [Q15297479](https://www.wikidata.org/wiki/Q15297479) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Northern Corfu Municipality |
| Designations | protected building in Greece\|archaeological site in Greece |
| Wikipedia language editions | 6 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 138 elements (outline 1, marker 4, road 47, wall 23, building 49, coastline 2, zone 6, water 5).

Evidence: documented 0, mapped 138, inferred 0, derived 5; heights documented 1, inferred 0, unknown 72.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21618309 historic=citywalls 76 m from ledger point
- island ring (957 m2) cut out of sea-1
- origin moved 100 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":29,"medianInside":0.2,"medianOutside":11.8}
- sea-1: DEM check ok {"cells":74,"medianInside":0,"medianOutside":12.6}
- sea-2: DEM check failed {"cells":729,"medianInside":11.2,"medianOutside":null}
- sea-3: DEM check ok {"cells":89,"medianInside":0,"medianOutside":12.9}
- sea-4: DEM check ok {"cells":18,"medianInside":0,"medianOutside":11.6}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m
- 33 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.7923/19.9211) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q15297479 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 138 elements); data/traces/kassiopi-castle-q15297479.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
