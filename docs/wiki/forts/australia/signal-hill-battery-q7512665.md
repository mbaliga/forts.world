# Signal Hill Battery

> Australia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `signal-hill-battery-q7512665` |
| Coordinates | -33.84959, 151.28712 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-33.84959/151.28712)) |
| Wikidata | [Q7512665](https://www.wikidata.org/wiki/Q7512665) (CC0) |
| Wikidata class | fort |
| Types | coastal fortification |
| Administrative area | New South Wales |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 42 elements (marker 6, road 25, cliff 1, coastline 2, zone 3, building 4, water 1).

Evidence: documented 0, mapped 42, inferred 0, derived 1; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":157,"medianInside":6.8,"medianOutside":69.2}
- 137 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-33.84959/151.28712) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; coastal fortification; sitelinks=3; wikidata:Q7512665 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 42 elements); data/traces/signal-hill-battery-q7512665.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/australia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
