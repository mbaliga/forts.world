# Stage Fort

> United States · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stage-fort-q96406401` |
| Coordinates | 42.605, -70.67583 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.605/-70.67583)) |
| Wikidata | [Q96406401](https://www.wikidata.org/wiki/Q96406401) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 22 elements (road 15, building 1, coastline 5, water 1).

Evidence: documented 0, mapped 22, inferred 0, derived 1; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":265,"medianInside":0.8,"medianOutside":8.1}
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.605/-70.67583) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q96406401 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 22 elements); data/traces/stage-fort-q96406401.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
