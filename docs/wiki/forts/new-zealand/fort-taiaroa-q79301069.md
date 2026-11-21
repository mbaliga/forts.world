# Fort Taiaroa

> New Zealand · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-taiaroa-q79301069` |
| Coordinates | -45.77486, 170.7282 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-45.77486/170.7282)) |
| Wikidata | [Q79301069](https://www.wikidata.org/wiki/Q79301069) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Dunedin City |
| Designations | Heritage New Zealand Category 1 historic place listing |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 38 elements (marker 1, road 15, building 11, cliff 1, coastline 5, zone 1, retaining-wall 1, water 3).

Evidence: documented 0, mapped 38, inferred 0, derived 3; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":57,"medianInside":5.8,"medianOutside":25.1}
- sea-1: DEM check ok {"cells":47,"medianInside":7.1,"medianOutside":24.3}
- sea-2: DEM check ok {"cells":19,"medianInside":4.8,"medianOutside":21.2}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-45.77486/170.7282) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q79301069 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 38 elements); data/traces/fort-taiaroa-q79301069.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/new-zealand.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
