# Castle of San Carlos

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-san-carlos-q27699355` |
| Coordinates | 28.66206, -17.76215 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/28.66206/-17.76215)) |
| Wikidata | [Q27699355](https://www.wikidata.org/wiki/Q27699355) (CC0) |
| Wikidata class | castle |
| Types | castle\|fort |
| Administrative area | Breña Baja |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 34 elements (marker 1, coastline 1, road 9, zone 1, building 14, wall 6, water 2).

Evidence: documented 0, mapped 34, inferred 0, derived 2; heights documented 0, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":395,"medianInside":0,"medianOutside":0}
- sea-1: DEM check ok {"cells":258,"medianInside":0,"medianOutside":9.7}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/28.66206/-17.76215) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fort; sitelinks=3; wikidata:Q27699355 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 34 elements); data/traces/castle-of-san-carlos-q27699355.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
