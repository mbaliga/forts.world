# Fedderwarden battery

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fedderwarden-battery-q66809932` |
| Coordinates | 53.59772, 8.35748 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.59772/8.35748)) |
| Wikidata | [Q66809932](https://www.wikidata.org/wiki/Q66809932) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Butjadingen |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 87 elements (road 56, building 18, zone 9, coastline 1, waterway 1, water 2).

Evidence: documented 0, mapped 87, inferred 0, derived 2; heights documented 9, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":219,"medianInside":-0.3,"medianOutside":1.1}
- sea-1: DEM check ok {"cells":358,"medianInside":0.8,"medianOutside":0.9}
- 400 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.59772/8.35748) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q66809932 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 87 elements); data/traces/fedderwarden-battery-q66809932.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
