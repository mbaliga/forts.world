# 11 Sigismund Augustus Boulevard in Elbląg, former malthouse

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `11-sigismund-augustus-boulevard-in-elblag-former-q30904571` |
| Coordinates | 54.15667, 19.39478 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.15667/19.39478)) |
| Wikidata | [Q30904571](https://www.wikidata.org/wiki/Q30904571) (CC0) |
| Wikidata class | castle |
| Types | castle\|malt house\|Ordensburg\|museum building |
| Administrative area | Elbląg |
| Inception | 1400 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |
| OSM `heritage` | 2 |
| OSM `description` | Dawny browar (budynek podzamcza) |

## What the model contains

Tier **T1**, status `outline+walls`, 348 elements (outline 1, marker 3, road 159, waterway 2, building 135, zone 39, water 3, coastline 1, retaining-wall 2, wall 3).

Evidence: documented 0, mapped 348, inferred 0, derived 2; heights documented 113, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1304452500 historic=yes 13 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":94,"medianInside":-3.4,"medianOutside":3.5}
- sea-1: DEM check failed {"cells":359,"medianInside":2.8,"medianOutside":0.4}
- 261 DEM cells below -3 m (bathymetry) clamped to -3 m
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.15667/19.39478) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|malt house\|Ordensburg\|museum building; sitelinks=3; wikidata:Q30904571 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 348 elements); data/traces/11-sigismund-augustus-boulevard-in-elblag-former-q30904571.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
