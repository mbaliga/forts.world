# Battery Lothringen

> Jersey · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `battery-lothringen-q4869861` |
| Coordinates | 49.1675, -2.1696 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.1675/-2.1696)) |
| Wikidata | [Q4869861](https://www.wikidata.org/wiki/Q4869861) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Saint Brelade |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 45 elements (marker 4, road 12, building 22, zone 3, coastline 2, water 2).

Evidence: documented 0, mapped 45, inferred 0, derived 2; heights documented 0, inferred 0, unknown 22.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":105,"medianInside":0,"medianOutside":32.5}
- sea-1: DEM check ok {"cells":7,"medianInside":0.1,"medianOutside":24.5}
- 12 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.1675/-2.1696) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=3; wikidata:Q4869861 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 45 elements); data/traces/battery-lothringen-q4869861.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/jersey.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
