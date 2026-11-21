# Old Stone Fort

> United States · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `old-stone-fort-q14715796` |
| Coordinates | 42.6607, -70.6144 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.6607/-70.6144)) |
| Wikidata | [Q14715796](https://www.wikidata.org/wiki/Q14715796) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Massachusetts |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 81 elements (road 18, coastline 3, building 55, water 5).

Evidence: documented 0, mapped 81, inferred 0, derived 5; heights documented 0, inferred 0, unknown 55.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":394,"medianInside":1.9,"medianOutside":0.4}
- sea-1: DEM check failed {"cells":399,"medianInside":1.9,"medianOutside":0.3}
- sea-2: DEM check failed {"cells":145,"medianInside":3.4,"medianOutside":1.4}
- sea-3: DEM check ok {"cells":173,"medianInside":1,"medianOutside":3.2}
- sea-4: DEM check failed {"cells":5,"medianInside":5.2,"medianOutside":1.8}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.6607/-70.6144) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q14715796 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 81 elements); data/traces/old-stone-fort-q14715796.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
