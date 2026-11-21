# Fort Ruckman

> United States · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-ruckman-q5471955` |
| Coordinates | 42.42063, -70.93024 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.42063/-70.93024)) |
| Wikidata | [Q5471955](https://www.wikidata.org/wiki/Q5471955) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Nahant |
| Inception | 1924 |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 103 elements (road 25, water 2, building 69, zone 3, cliff 1, coastline 2, waterway 1).

Evidence: documented 0, mapped 103, inferred 0, derived 1; heights documented 2, inferred 0, unknown 67.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":57,"medianInside":2,"medianOutside":4.8}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.42063/-70.93024) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q5471955 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 103 elements); data/traces/fort-ruckman-q5471955.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
