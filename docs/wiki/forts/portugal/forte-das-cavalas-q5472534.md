# Forte das Cavalas

> Portugal · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-das-cavalas-q5472534` |
| Coordinates | 38.64444, -27.09306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.64444/-27.09306)) |
| Wikidata | [Q5472534](https://www.wikidata.org/wiki/Q5472534) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Azores |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 11 elements (coastline 3, building 1, road 2, zone 3, water 2).

Evidence: documented 0, mapped 11, inferred 0, derived 2; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- island ring (820 m2) cut out of sea-0
- sea-0: DEM check ok {"cells":276,"medianInside":0,"medianOutside":9.4}
- sea-1: DEM check ok {"cells":400,"medianInside":0,"medianOutside":12.5}
- 7 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.64444/-27.09306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q5472534 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 11 elements); data/traces/forte-das-cavalas-q5472534.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
