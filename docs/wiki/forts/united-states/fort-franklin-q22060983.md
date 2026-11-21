# Fort Franklin

> United States · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-franklin-q22060983` |
| Coordinates | 40.919, -73.488 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.919/-73.488)) |
| Wikidata | [Q22060983](https://www.wikidata.org/wiki/Q22060983) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | New York |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 35 elements (road 11, coastline 1, building 19, water 2, zone 2).

Evidence: documented 0, mapped 35, inferred 0, derived 1; heights documented 0, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":31,"medianInside":6.6,"medianOutside":23.7}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.919/-73.488) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q22060983 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 35 elements); data/traces/fort-franklin-q22060983.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
