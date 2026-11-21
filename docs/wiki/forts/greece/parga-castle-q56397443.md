# Parga Castle

> Greece · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `parga-castle-q56397443` |
| Coordinates | 39.28286, 20.39774 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.28286/20.39774)) |
| Wikidata | [Q56397443](https://www.wikidata.org/wiki/Q56397443) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Parga Municipality |
| Inception | 1380 |
| Designations | Protected monument |
| Wikipedia language editions | 5 |

## What the model contains

Tier **T1**, status `location-only`, 190 elements (marker 3, coastline 3, road 33, building 132, cliff 2, wall 14, retaining-wall 2, water 1).

Evidence: documented 0, mapped 190, inferred 0, derived 1; heights documented 1, inferred 0, unknown 147.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":225,"medianInside":0,"medianOutside":19.5}
- 24 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.28286/20.39774) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q56397443 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 190 elements); data/traces/parga-castle-q56397443.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
