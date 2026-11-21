# Fortifications in Kołobrzeg

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortifications-in-ko-obrzeg-q33260906` |
| Coordinates | 54.18639, 15.55421 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.18639/15.55421)) |
| Wikidata | [Q33260906](https://www.wikidata.org/wiki/Q33260906) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Kołobrzeg |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `website` | http://www.latarnia.kolobrzeg.pl/ |

## What the model contains

Tier **T1**, status `outline+walls`, 305 elements (outline 1, marker 5, road 149, building 73, retaining-wall 4, coastline 16, zone 48, wall 4, waterway 1, water 4).

Evidence: documented 0, mapped 305, inferred 0, derived 4; heights documented 54, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/300384923 historic=yes Q11309665 2 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":333,"medianInside":1.8,"medianOutside":-1}
- sea-1: DEM check failed {"cells":400,"medianInside":1.4,"medianOutside":-4}
- sea-2: DEM check ok {"cells":52,"medianInside":-2,"medianOutside":1.9}
- sea-3: DEM check ok {"cells":150,"medianInside":0.4,"medianOutside":2.5}
- 41 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.18639/15.55421) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q33260906 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 305 elements); data/traces/fortifications-in-ko-obrzeg-q33260906.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
