# Fort Casimir

> United States · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-casimir-q7886287` |
| Coordinates | 39.66167, -75.55889 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.66167/-75.55889)) |
| Wikidata | [Q7886287](https://www.wikidata.org/wiki/Q7886287) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Inception | 1651 |
| Wikipedia language editions | 5 |

## What the model contains

Tier **T1**, status `location-only`, 90 elements (marker 1, road 32, building 51, zone 1, coastline 1, waterway 2, wall 1, water 1).

Evidence: documented 0, mapped 90, inferred 0, derived 1; heights documented 1, inferred 0, unknown 51.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":193,"medianInside":-0.3,"medianOutside":2.1}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.66167/-75.55889) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=5; wikidata:Q7886287 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 90 elements); data/traces/fort-casimir-q7886287.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
