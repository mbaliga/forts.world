# Malin Beg Signal Tower

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `malin-beg-signal-tower-q55049332` |
| Coordinates | 54.66278, -8.79173 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.66278/-8.79173)) |
| Wikidata | [Q55049332](https://www.wikidata.org/wiki/Q55049332) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|signal tower |
| Administrative area | County Donegal |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 21 elements (outline 1, road 4, coastline 10, wall 3, water 3).

Evidence: documented 0, mapped 21, inferred 0, derived 3; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/431865451 historic=ruins Q55049332 1 m from ledger point
- island ring (7619 m2) cut out of sea-0
- sea-0: DEM check ok {"cells":146,"medianInside":3.3,"medianOutside":16.5}
- sea-1: DEM check ok {"cells":6,"medianInside":9.5,"medianOutside":12.8}
- sea-2: DEM check failed {"cells":400,"medianInside":11.9,"medianOutside":14}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.66278/-8.79173) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|signal tower; sitelinks=1; wikidata:Q55049332 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 21 elements); data/traces/malin-beg-signal-tower-q55049332.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
