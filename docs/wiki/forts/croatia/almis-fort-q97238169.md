# Almis fort

> Croatia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `almis-fort-q97238169` |
| Coordinates | 45.24627, 14.56582 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.24627/14.56582)) |
| Wikidata | [Q97238169](https://www.wikidata.org/wiki/Q97238169) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 17 elements (marker 1, coastline 2, road 5, building 1, cliff 3, wall 2, water 3).

Evidence: documented 0, mapped 17, inferred 0, derived 3; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":84,"medianInside":0,"medianOutside":26.3}
- sea-1: DEM check ok {"cells":4,"medianInside":3.4,"medianOutside":21.9}
- sea-2: DEM check ok {"cells":39,"medianInside":0,"medianOutside":24.3}
- 17 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.24627/14.56582) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q97238169 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 17 elements); data/traces/almis-fort-q97238169.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
