# Siddi Murud Palace

> India · Maharashtra · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `siddi-murud-palace-sn2116` |
| Coordinates | 18.340286, 72.947633 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.340286/72.947633)) |
| Programme catalogue | confidence medium, significance rank 8123; sources smith-newton:r2116 |

## What the model contains

Tier **T1**, status `location-only`, 6 elements (marker 1, road 1, building 1, coastline 1, water 2).

Evidence: documented 0, mapped 6, inferred 0, derived 2; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":6,"medianInside":5.8,"medianOutside":29.7}
- sea-1: DEM check ok {"cells":190,"medianInside":5.9,"medianOutside":32.7}
- 11 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.340286/72.947633) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=8123; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 6 elements); data/traces/siddi-murud-palace-sn2116.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
