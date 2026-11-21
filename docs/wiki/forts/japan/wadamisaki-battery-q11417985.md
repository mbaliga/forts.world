# Wadamisaki Battery

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wadamisaki-battery-q11417985` |
| Coordinates | 34.65236, 135.18489 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.65236/135.18489)) |
| Wikidata | [Q11417985](https://www.wikidata.org/wiki/Q11417985) (CC0) |
| Wikidata class | fortification |
| Types | coastal battery |
| Administrative area | Hyōgo-ku |
| Inception | 1864 |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 22 elements (outline 1, road 9, coastline 1, building 8, water 3).

Evidence: documented 0, mapped 22, inferred 0, derived 3; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1154272041 historic=fort Q11417985 5 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":67,"medianInside":3.8,"medianOutside":1.1}
- sea-1: DEM check failed {"cells":19,"medianInside":11.1,"medianOutside":1.6}
- sea-2: DEM check ok {"cells":16,"medianInside":0.6,"medianOutside":1.8}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.65236/135.18489) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal battery; sitelinks=3; wikidata:Q11417985 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 22 elements); data/traces/wadamisaki-battery-q11417985.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
