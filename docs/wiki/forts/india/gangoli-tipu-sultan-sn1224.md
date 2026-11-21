# Gangoli / Tipu Sultan

> India · Karnataka · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gangoli-tipu-sultan-sn1224` |
| Coordinates | 13.660446, 74.657887 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/13.660446/74.657887)) |
| Programme catalogue | confidence medium, significance rank 5684; sources smith-newton:r1224 |

## What the model contains

Tier **T1**, status `location-only`, 18 elements (coastline 2, road 6, building 8, wall 1, water 1).

Evidence: documented 0, mapped 18, inferred 0, derived 1; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":521,"medianInside":2.8,"medianOutside":11.8}
- 30 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/13.660446/74.657887) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

type=fort; confidence=medium; rank=5684; sources=1 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (location-only, 18 elements); data/traces/gangoli-tipu-sultan-sn1224.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
