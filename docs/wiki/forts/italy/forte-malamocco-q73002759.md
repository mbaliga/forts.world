# Forte Malamocco

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-malamocco-q73002759` |
| Coordinates | 45.37165, 12.34198 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.37165/12.34198)) |
| Wikidata | [Q73002759](https://www.wikidata.org/wiki/Q73002759) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Venice |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 129 elements (marker 1, waterway 3, road 29, wall 34, building 55, water 6, coastline 1).

Evidence: documented 0, mapped 129, inferred 0, derived 2; heights documented 0, inferred 0, unknown 89.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":48,"medianInside":0,"medianOutside":0.2}
- sea-1: DEM check ok {"cells":20,"medianInside":0,"medianOutside":0.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.37165/12.34198) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q73002759 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 129 elements); data/traces/forte-malamocco-q73002759.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
