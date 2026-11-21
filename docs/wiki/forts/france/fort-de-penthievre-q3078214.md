# Fort de Penthièvre

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-penthievre-q3078214` |
| Coordinates | 47.5435, -3.13679 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.5435/-3.13679)) |
| Wikidata | [Q3078214](https://www.wikidata.org/wiki/Q3078214) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Saint-Pierre-Quiberon |
| Inception | 1748 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |
| OSM `castle_type` | fortress |
| OSM `heritage` | 3 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 67 elements (outline 1, marker 2, road 35, building 8, coastline 3, zone 2, retaining-wall 7, wall 6, water 2).

Evidence: documented 0, mapped 67, inferred 0, derived 2; heights documented 1, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/26612420 historic=fort Q3078214 41 m from ledger point
- origin moved 40 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":0,"medianInside":null,"medianOutside":0}
- sea-1: DEM check ok {"cells":268,"medianInside":0,"medianOutside":8.2}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.5435/-3.13679) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q3078214 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 67 elements); data/traces/fort-de-penthievre-q3078214.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
