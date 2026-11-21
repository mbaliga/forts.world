# Saikazaki Battery

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `saikazaki-battery-q108394072` |
| Coordinates | 34.19364, 135.13989 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.19364/135.13989)) |
| Wikidata | [Q108394072](https://www.wikidata.org/wiki/Q108394072) (CC0) |
| Wikidata class | fortification |
| Types | historic site\|daiba |
| Administrative area | Saikazaki |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 33 elements (coastline 7, road 8, building 15, retaining-wall 1, zone 1, water 1).

Evidence: documented 0, mapped 33, inferred 0, derived 1; heights documented 1, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- island ring (427 m2) cut out of sea-0
- sea-0: DEM check ok {"cells":207,"medianInside":0.3,"medianOutside":6.1}
- 8 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.19364/135.13989) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; historic site\|daiba; sitelinks=1; wikidata:Q108394072 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 33 elements); data/traces/saikazaki-battery-q108394072.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
