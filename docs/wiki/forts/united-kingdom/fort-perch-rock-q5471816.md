# Fort Perch Rock

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-perch-rock-q5471816` |
| Coordinates | 53.4427, -3.0412 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.4427/-3.0412)) |
| Wikidata | [Q5471816](https://www.wikidata.org/wiki/Q5471816) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Wirral |
| Inception | 1825 |
| Designations | Grade II* listed building |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 35 elements (outline 1, marker 1, coastline 4, water 4, road 17, zone 3, building 2, wall 2, retaining-wall 1).

Evidence: documented 0, mapped 35, inferred 0, derived 3; heights documented 1, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/12212174 historic=fort 23 m from ledger point
- origin moved 27 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":74,"medianInside":2.7,"medianOutside":2.3}
- sea-1: DEM check ok {"cells":88,"medianInside":0.8,"medianOutside":3.1}
- sea-2: DEM check ok {"cells":91,"medianInside":1.9,"medianOutside":2.7}
- 9 DEM cells below -3 m (bathymetry) clamped to -3 m
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.4427/-3.0412) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q5471816 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 35 elements); data/traces/fort-perch-rock-q5471816.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
