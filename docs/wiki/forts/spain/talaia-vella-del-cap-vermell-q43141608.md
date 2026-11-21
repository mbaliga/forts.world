# Talaia Vella del Cap Vermell

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `talaia-vella-del-cap-vermell-q43141608` |
| Coordinates | 39.65719, 3.45332 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.65719/3.45332)) |
| Wikidata | [Q43141608](https://www.wikidata.org/wiki/Q43141608) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Capdepera |
| Designations | bien de interés cultural |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 14 elements (marker 1, road 4, coastline 1, building 2, zone 1, cliff 2, water 3).

Evidence: documented 0, mapped 14, inferred 0, derived 3; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":5,"medianInside":-1,"medianOutside":116.8}
- sea-1: DEM check failed {"cells":3,"medianInside":15.6,"medianOutside":116.3}
- sea-2: DEM check failed {"cells":0,"medianInside":null,"medianOutside":115.2}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.65719/3.45332) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=0; wikidata:Q43141608 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 14 elements); data/traces/talaia-vella-del-cap-vermell-q43141608.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
