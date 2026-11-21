# Lonehort Battery

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lonehort-battery-q132855868` |
| Coordinates | 51.642, -9.7907 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.642/-9.7907)) |
| Wikidata | [Q132855868](https://www.wikidata.org/wiki/Q132855868) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Bere Island |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |
| OSM `barrier` | retaining_wall |

## What the model contains

Tier **T1**, status `outline-only`, 36 elements (outline 1, marker 1, road 23, retaining-wall 1, coastline 1, building 8, water 1).

Evidence: documented 0, mapped 36, inferred 0, derived 1; heights documented 1, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/225049021 historic=fort 8 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":101,"medianInside":8,"medianOutside":26.5}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.642/-9.7907) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=1; wikidata:Q132855868 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 36 elements); data/traces/lonehort-battery-q132855868.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
