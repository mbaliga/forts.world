# Fort Loyal

> United States · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-loyal-q17182950` |
| Coordinates | 43.659, -70.2481 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.659/-70.2481)) |
| Wikidata | [Q17182950](https://www.wikidata.org/wiki/Q17182950) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Maine |
| Inception | 1678 |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 175 elements (road 129, coastline 1, waterway 1, building 42, water 2).

Evidence: documented 0, mapped 175, inferred 0, derived 2; heights documented 16, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":142,"medianInside":2.8,"medianOutside":4}
- sea-1: DEM check ok {"cells":2,"medianInside":-0.2,"medianOutside":3.8}
- 6 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.659/-70.2481) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q17182950 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 175 elements); data/traces/fort-loyal-q17182950.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
