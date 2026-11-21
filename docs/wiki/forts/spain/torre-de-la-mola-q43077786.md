# Torre de la Mola

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-la-mola-q43077786` |
| Coordinates | 39.53594, 2.37242 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.53594/2.37242)) |
| Wikidata | [Q43077786](https://www.wikidata.org/wiki/Q43077786) (CC0) |
| Wikidata class | fortification |
| Types | watchtower\|defensive tower |
| Administrative area | Andratx |
| Inception | 1585 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 30 elements (road 12, coastline 2, building 11, cliff 2, retaining-wall 1, water 2).

Evidence: documented 0, mapped 30, inferred 0, derived 2; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":13,"medianInside":0.3,"medianOutside":48.3}
- sea-1: DEM check ok {"cells":22,"medianInside":0.3,"medianOutside":49}
- 16 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.53594/2.37242) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower\|defensive tower; sitelinks=1; wikidata:Q43077786 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 30 elements); data/traces/torre-de-la-mola-q43077786.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
