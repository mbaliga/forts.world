# Vandenberg Launch Facility 09

> United States · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vandenberg-launch-facility-09-q2510062` |
| Coordinates | 34.87846, -120.63364 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.87846/-120.63364)) |
| Wikidata | [Q2510062](https://www.wikidata.org/wiki/Q2510062) (CC0) |
| Wikidata class | fortification |
| Types | missile launch facility |
| Administrative area | Santa Barbara County |
| Inception | 1963 |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 6 elements (road 3, coastline 1, zone 1, water 1).

Evidence: documented 0, mapped 6, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":60,"medianInside":3.8,"medianOutside":27.3}
- 9 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.87846/-120.63364) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; missile launch facility; sitelinks=2; wikidata:Q2510062 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 6 elements); data/traces/vandenberg-launch-facility-09-q2510062.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
