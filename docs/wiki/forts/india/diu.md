# Diu Fort

> India · Dadra and Nagar Haveli and Daman and Diu · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `diu` |
| Coordinates | 20.715, 70.995 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/20.715/70.995)) |
| Programme catalogue | confidence high, significance rank 236; sources catalogue:diu;wikidata:Q5283746;smith-newton:r3661 |

## What the model contains

Tier **T1**, status `location-only`, 36 elements (coastline 1, road 18, water 3, wall 3, building 11).

Evidence: documented 0, mapped 36, inferred 0, derived 2; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":9,"medianInside":4.9,"medianOutside":8.9}
- sea-1: DEM check ok {"cells":81,"medianInside":3.7,"medianOutside":10.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/20.715/70.995) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

Alpha-R batch (2026-11-11): 10 forts spread across A-Z starting at R, distinct from batch 0 and other alphabet batches. \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 36 elements); data/traces/diu.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
