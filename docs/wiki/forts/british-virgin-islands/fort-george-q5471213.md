# Fort George

> British Virgin Islands · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-george-q5471213` |
| Coordinates | 18.426, -64.607 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.426/-64.607)) |
| Wikidata | [Q5471213](https://www.wikidata.org/wiki/Q5471213) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|fort |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 109 elements (road 34, coastline 1, building 72, water 2).

Evidence: documented 0, mapped 109, inferred 0, derived 2; heights documented 2, inferred 0, unknown 70.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":31,"medianInside":3.5,"medianOutside":7.8}
- sea-1: DEM check ok {"cells":26,"medianInside":5.9,"medianOutside":7.5}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.426/-64.607) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|fort; sitelinks=3; wikidata:Q5471213 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 109 elements); data/traces/fort-george-q5471213.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/british-virgin-islands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
