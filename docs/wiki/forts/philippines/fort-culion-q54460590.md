# Fort Culion

> Philippines · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-culion-q54460590` |
| Coordinates | 11.89237, 120.02441 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/11.89237/120.02441)) |
| Wikidata | [Q54460590](https://www.wikidata.org/wiki/Q54460590) (CC0) |
| Wikidata class | fort |
| Types | fort\|church building |
| Administrative area | Culion |
| Inception | 1740 |
| Designations | Important Cultural Property |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 161 elements (marker 1, coastline 2, road 22, building 134, wall 1, water 1).

Evidence: documented 0, mapped 161, inferred 0, derived 1; heights documented 0, inferred 0, unknown 135.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":245,"medianInside":2,"medianOutside":6.3}
- 41 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/11.89237/120.02441) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|church building; sitelinks=2; wikidata:Q54460590 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 161 elements); data/traces/fort-culion-q54460590.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/philippines.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
