# Battery Moltke

> Jersey · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `battery-moltke-q4869865` |
| Coordinates | 49.2479, -2.2512 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.2479/-2.2512)) |
| Wikidata | [Q4869865](https://www.wikidata.org/wiki/Q4869865) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Saint Ouen |
| Inception | 1941 |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 35 elements (marker 2, road 18, building 9, coastline 2, waterway 1, zone 2, water 1).

Evidence: documented 0, mapped 35, inferred 0, derived 1; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":53,"medianInside":0,"medianOutside":58.8}
- 17 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.2479/-2.2512) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=2; wikidata:Q4869865 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 35 elements); data/traces/battery-moltke-q4869865.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/jersey.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
