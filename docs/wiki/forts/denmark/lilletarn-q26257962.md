# Lilletårn

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lilletarn-q26257962` |
| Coordinates | 55.32208, 15.18374 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.32208/15.18374)) |
| Wikidata | [Q26257962](https://www.wikidata.org/wiki/Q26257962) (CC0) |
| Wikidata class | fortification |
| Types | museum\|defensive tower |
| Inception | 1687 |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 217 elements (outline 1, marker 1, coastline 4, road 83, building 59, retaining-wall 14, water 13, zone 15, wall 27).

Evidence: documented 0, mapped 217, inferred 0, derived 6; heights documented 4, inferred 0, unknown 96.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/150341217 historic=ruins 290 m from ledger point
- origin moved 289 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":400,"medianInside":5.5,"medianOutside":1}
- sea-1: DEM check failed {"cells":400,"medianInside":5.5,"medianOutside":1}
- sea-2: DEM check failed {"cells":397,"medianInside":5.6,"medianOutside":1}
- sea-3: DEM check ok {"cells":98,"medianInside":3,"medianOutside":6.3}
- sea-4: DEM check failed {"cells":0,"medianInside":null,"medianOutside":5.1}
- sea-5: DEM check failed {"cells":0,"medianInside":null,"medianOutside":5.1}
- 39 DEM cells below -3 m (bathymetry) clamped to -3 m
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.32208/15.18374) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; museum\|defensive tower; sitelinks=3; wikidata:Q26257962 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 217 elements); data/traces/lilletarn-q26257962.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
