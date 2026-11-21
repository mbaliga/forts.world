# Bateria de Punta S'Arenella

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bateria-de-punta-s-arenella-q121879554` |
| Coordinates | 42.34798, 3.18342 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.34798/3.18342)) |
| Wikidata | [Q121879554](https://www.wikidata.org/wiki/Q121879554) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery\|coastal battery |
| Administrative area | El Port de la Selva |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 60 elements (coastline 4, road 24, building 28, waterway 3, water 1).

Evidence: documented 0, mapped 60, inferred 0, derived 1; heights documented 0, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":2,"medianInside":0.3,"medianOutside":29.6}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.34798/3.18342) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery\|coastal battery; sitelinks=1; wikidata:Q121879554 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 60 elements); data/traces/bateria-de-punta-s-arenella-q121879554.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
