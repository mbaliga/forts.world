# Murada sobre el Port de Ciutadella

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `murada-sobre-el-port-de-ciutadella-q56164807` |
| Coordinates | 40.00346, 3.83678 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.00346/3.83678)) |
| Wikidata | [Q56164807](https://www.wikidata.org/wiki/Q56164807) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Ciutadella |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 252 elements (marker 3, road 105, building 773, coastline 1, wall 21, retaining-wall 1, water 1).

Evidence: documented 0, mapped 252, inferred 0, derived 1; heights documented 117, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 773 mapped (trace size budget); the rest of the town is not drawn
- sea-0: DEM check failed {"cells":5,"medianInside":4.6,"medianOutside":-1638.3}
- 1353 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.00346/3.83678) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q56164807 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 252 elements); data/traces/murada-sobre-el-port-de-ciutadella-q56164807.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
