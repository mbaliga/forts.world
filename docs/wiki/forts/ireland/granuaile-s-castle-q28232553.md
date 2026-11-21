# Granuaile's Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `granuaile-s-castle-q28232553` |
| Coordinates | 53.79975, -9.95131 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.79975/-9.95131)) |
| Wikidata | [Q28232553](https://www.wikidata.org/wiki/Q28232553) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | County Mayo |
| Designations | national monument of Ireland |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | towerhouse |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 45 elements (outline 1, coastline 5, road 19, building 14, waterway 3, wall 1, water 2).

Evidence: documented 0, mapped 45, inferred 0, derived 2; heights documented 3, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/400046443 historic=castle Q28232553 20 m from ledger point
- origin moved 21 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":4,"medianInside":7.8,"medianOutside":4}
- sea-1: DEM check ok {"cells":150,"medianInside":2.9,"medianOutside":6.3}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.79975/-9.95131) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=4; wikidata:Q28232553 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 45 elements); data/traces/granuaile-s-castle-q28232553.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
