# Torre del Zambullón

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-del-zambullon-q43162266` |
| Coordinates | 36.70209, -3.40823 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.70209/-3.40823)) |
| Wikidata | [Q43162266](https://www.wikidata.org/wiki/Q43162266) (CC0) |
| Wikidata class | fortification |
| Types | watchtower\|monument |
| Administrative area | Gualchos |
| Designations | bien de interés cultural |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 12 elements (coastline 1, road 8, cliff 2, water 1).

Evidence: documented 0, mapped 12, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":195,"medianInside":0,"medianOutside":40.5}
- 10 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.70209/-3.40823) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower\|monument; sitelinks=0; wikidata:Q43162266 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 12 elements); data/traces/torre-del-zambullon-q43162266.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
