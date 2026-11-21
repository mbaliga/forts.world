# Fort of São João Baptista Berlengas

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-sao-joao-baptista-berlengas-q3078262` |
| Coordinates | 39.41124, -9.51012 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.41124/-9.51012)) |
| Wikidata | [Q3078262](https://www.wikidata.org/wiki/Q3078262) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Peniche |
| Inception | 1502 |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 7 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 29 elements (outline 1, wall 1, road 14, water 2, coastline 10, building 1).

Evidence: documented 0, mapped 29, inferred 0, derived 1; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6137288 historic=fort Q3078262 12 m from ledger point
- island ring (4682 m2) cut out of sea-0
- island ring (402 m2) cut out of sea-0
- island ring (498 m2) cut out of sea-0
- island ring (459 m2) cut out of sea-0
- island ring (689 m2) cut out of sea-0
- origin moved 16 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":906,"medianInside":0,"medianOutside":20.9}
- 22 DEM cells below -3 m (bathymetry) clamped to -3 m
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.41124/-9.51012) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=7; wikidata:Q3078262 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 29 elements); data/traces/fort-of-sao-joao-baptista-berlengas-q3078262.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
