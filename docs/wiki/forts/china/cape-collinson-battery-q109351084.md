# Cape Collinson Battery

> China · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cape-collinson-battery-q109351084` |
| Coordinates | 22.25327, 114.25535 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/22.25327/114.25535)) |
| Wikidata | [Q109351084](https://www.wikidata.org/wiki/Q109351084) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Hong Kong |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 25 elements (marker 3, coastline 2, road 9, cliff 3, zone 3, retaining-wall 4, water 1).

Evidence: documented 0, mapped 25, inferred 0, derived 1; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":221,"medianInside":1.8,"medianOutside":75.9}
- 66 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/22.25327/114.25535) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=2; wikidata:Q109351084 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 25 elements); data/traces/cape-collinson-battery-q109351084.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
