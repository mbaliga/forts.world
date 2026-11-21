# Whelk Point Fort

> British Virgin Islands · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `whelk-point-fort-q7992397` |
| Coordinates | 18.4207, -64.5702 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.4207/-64.5702)) |
| Wikidata | [Q7992397](https://www.wikidata.org/wiki/Q7992397) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|fort |
| Administrative area | Tortola |
| Wikipedia language editions | 4 |

## What the model contains

Tier **T1**, status `location-only`, 26 elements (road 10, building 13, coastline 1, water 2).

Evidence: documented 0, mapped 26, inferred 0, derived 2; heights documented 0, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":15,"medianInside":7,"medianOutside":6.2}
- sea-1: DEM check ok {"cells":162,"medianInside":1.9,"medianOutside":9}
- 15 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.4207/-64.5702) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|fort; sitelinks=4; wikidata:Q7992397 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 26 elements); data/traces/whelk-point-fort-q7992397.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/british-virgin-islands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
