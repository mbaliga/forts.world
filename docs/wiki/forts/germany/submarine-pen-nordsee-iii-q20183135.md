# Submarine Pen Nordsee III

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `submarine-pen-nordsee-iii-q20183135` |
| Coordinates | 54.17667, 7.89389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.17667/7.89389)) |
| Wikidata | [Q20183135](https://www.wikidata.org/wiki/Q20183135) (CC0) |
| Wikidata class | fortification |
| Types | submarine pen |
| Administrative area | Heligoland |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `description` | Ehemaliges Trockendock aus dem Ersten Weltkrieg, bei Niedrigwasser sichtbar. |
| OSM `ruins` | military |

## What the model contains

Tier **T1**, status `outline+walls`, 67 elements (outline 1, road 43, building 8, zone 1, wall 5, retaining-wall 1, coastline 4, water 4).

Evidence: documented 0, mapped 67, inferred 0, derived 3; heights documented 6, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/570556492 historic=ruins 491 m from ledger point
- origin moved 495 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":70,"medianInside":-2,"medianOutside":-3.7}
- sea-1: DEM check ok {"cells":282,"medianInside":-6,"medianOutside":0.5}
- sea-2: DEM check ok {"cells":437,"medianInside":-3.4,"medianOutside":1}
- 882 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.17667/7.89389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; submarine pen; sitelinks=2; wikidata:Q20183135 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 67 elements); data/traces/submarine-pen-nordsee-iii-q20183135.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
