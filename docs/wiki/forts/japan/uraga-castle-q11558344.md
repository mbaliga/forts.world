# Uraga Castle

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `uraga-castle-q11558344` |
| Coordinates | 35.24167, 139.72417 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.24167/139.72417)) |
| Wikidata | [Q11558344](https://www.wikidata.org/wiki/Q11558344) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 204 elements (marker 6, road 67, coastline 7, building 352, water 4).

Evidence: documented 0, mapped 204, inferred 0, derived 4; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 352 mapped (trace size budget); the rest of the town is not drawn
- sea-0: DEM check ok {"cells":48,"medianInside":5.9,"medianOutside":17.8}
- sea-1: DEM check ok {"cells":2,"medianInside":9.7,"medianOutside":14.8}
- sea-2: DEM check ok {"cells":26,"medianInside":1.5,"medianOutside":15.5}
- sea-3: DEM check failed {"cells":0,"medianInside":null,"medianOutside":14.4}
- 7 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.24167/139.72417) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=1; wikidata:Q11558344 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 204 elements); data/traces/uraga-castle-q11558344.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
