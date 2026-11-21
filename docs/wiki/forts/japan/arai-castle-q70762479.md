# Arai Castle

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `arai-castle-q70762479` |
| Coordinates | 35.15989, 139.61297 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.15989/139.61297)) |
| Wikidata | [Q70762479](https://www.wikidata.org/wiki/Q70762479) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Miura |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 42 elements (marker 1, road 12, coastline 5, building 20, water 4).

Evidence: documented 0, mapped 42, inferred 0, derived 4; heights documented 0, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":1,"medianInside":3.6,"medianOutside":13.3}
- sea-1: DEM check ok {"cells":60,"medianInside":5.1,"medianOutside":17}
- sea-2: DEM check ok {"cells":105,"medianInside":8.7,"medianOutside":18.6}
- sea-3: DEM check failed {"cells":381,"medianInside":12.3,"medianOutside":20.4}
- 10 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.15989/139.61297) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=1; wikidata:Q70762479 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 42 elements); data/traces/arai-castle-q70762479.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
