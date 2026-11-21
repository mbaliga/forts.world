# Coumeenoole North/Com Dhíneol Thuaidh

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `coumeenoole-north-com-dhineol-thuaidh-q31082269` |
| Coordinates | 52.11129, -10.46975 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.11129/-10.46975)) |
| Wikidata | [Q31082269](https://www.wikidata.org/wiki/Q31082269) (CC0) |
| Wikidata class | fort |
| Types | promontory fort |
| Administrative area | County Kerry |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 32 elements (outline 1, marker 1, coastline 2, road 12, wall 9, building 1, cliff 1, retaining-wall 1, water 4).

Evidence: documented 0, mapped 32, inferred 0, derived 4; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/529724292 historic=archaeological_site 164 m from ledger point
- origin moved 168 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":2025,"medianInside":19.9,"medianOutside":22.2}
- sea-1: DEM check failed {"cells":6,"medianInside":20.4,"medianOutside":19.9}
- sea-2: DEM check ok {"cells":384,"medianInside":7.1,"medianOutside":24.7}
- sea-3: DEM check ok {"cells":576,"medianInside":9.3,"medianOutside":24.1}
- 55 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.11129/-10.46975) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; promontory fort; sitelinks=1; wikidata:Q31082269 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 32 elements); data/traces/coumeenoole-north-com-dhineol-thuaidh-q31082269.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
