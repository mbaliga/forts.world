# Ponnani

> India · Kerala · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ponnani-sn1296` |
| Coordinates | 10.778325, 75.918926 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/10.778325/75.918926)) |
| Programme catalogue | confidence medium, significance rank 7467; sources smith-newton:r1296 |

## What the model contains

Tier **T1**, status `location-only`, 168 elements (coastline 1, waterway 1, road 43, zone 1, building 516, wall 1, water 1).

Evidence: documented 0, mapped 168, inferred 0, derived 1; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 516 mapped (trace size budget); the rest of the town is not drawn
- sea-0: DEM check ok {"cells":16,"medianInside":2.3,"medianOutside":6.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/10.778325/75.918926) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=7467; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 168 elements); data/traces/ponnani-sn1296.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
