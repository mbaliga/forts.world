# Lazarev's Fort

> Russia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lazarev-s-fort-q78021338` |
| Coordinates | 43.89977, 39.33549 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.89977/39.33549)) |
| Wikidata | [Q78021338](https://www.wikidata.org/wiki/Q78021338) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Black Sea Governorate |
| Inception | 1839 |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 64 elements (waterway 1, wall 1, water 2, road 14, building 45, coastline 1).

Evidence: documented 0, mapped 64, inferred 0, derived 1; heights documented 33, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":19,"medianInside":0,"medianOutside":0}
- 63 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.89977/39.33549) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q78021338 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 64 elements); data/traces/lazarev-s-fort-q78021338.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
