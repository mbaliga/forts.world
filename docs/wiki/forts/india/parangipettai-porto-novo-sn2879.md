# Parangipettai / Porto Novo

> India · Tamil Nadu · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `parangipettai-porto-novo-sn2879` |
| Coordinates | 11.504297, 79.770133 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/11.504297/79.770133)) |
| Programme catalogue | confidence medium, significance rank 7349; sources smith-newton:r2879 |

## What the model contains

Tier **T1**, status `location-only`, 19 elements (water 1, waterway 1, road 4, coastline 1, building 11, wall 1).

Evidence: documented 0, mapped 19, inferred 0, derived 0; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/11.504297/79.770133) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=7349; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 19 elements); data/traces/parangipettai-porto-novo-sn2879.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
