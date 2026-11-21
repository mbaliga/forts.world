# Porto Romano

> Albania · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porto-romano-q30185473` |
| Coordinates | 41.37415, 19.42208 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.37415/19.42208)) |
| Wikidata | [Q30185473](https://www.wikidata.org/wiki/Q30185473) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site\|historic site |
| Administrative area | Durrës County |
| Designations | Cultural Monument of Albania |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 47 elements (marker 1, waterway 2, road 23, zone 2, building 10, coastline 2, wall 3, water 4).

Evidence: documented 0, mapped 47, inferred 0, derived 4; heights documented 0, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":7,"medianInside":0,"medianOutside":0}
- sea-1: DEM check failed {"cells":388,"medianInside":0,"medianOutside":-0.1}
- sea-2: DEM check failed {"cells":13,"medianInside":0,"medianOutside":0}
- sea-3: DEM check failed {"cells":93,"medianInside":0,"medianOutside":0}
- 11 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.37415/19.42208) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site\|historic site; sitelinks=2; wikidata:Q30185473 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 47 elements); data/traces/porto-romano-q30185473.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/albania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
