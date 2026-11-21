# Fort Heath

> United States · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-heath-q5471313` |
| Coordinates | 42.38954, -70.96949 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.38954/-70.96949)) |
| Wikidata | [Q5471313](https://www.wikidata.org/wiki/Q5471313) (CC0) |
| Wikidata class | fort |
| Types | sea fort |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 110 elements (road 36, building 68, cliff 1, coastline 2, zone 2, water 1).

Evidence: documented 0, mapped 110, inferred 0, derived 1; heights documented 0, inferred 0, unknown 68.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":144,"medianInside":1.8,"medianOutside":7.4}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.38954/-70.96949) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; sea fort; sitelinks=1; wikidata:Q5471313 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 110 elements); data/traces/fort-heath-q5471313.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
