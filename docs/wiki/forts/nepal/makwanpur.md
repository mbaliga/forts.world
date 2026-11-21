# Makwanpur Gadhi

> Nepal · Bagmati · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `makwanpur` |
| Coordinates | 27.411027, 85.147508 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/27.411027/85.147508)) |
| Programme catalogue | confidence high, significance rank 2504; sources catalogue:makwanpur;wikidata:Q109905451;smith-newton:r3851 |

## What the model contains

Tier **T1**, status `location-only`, 41 elements (road 9, wall 1, building 31).

Evidence: documented 0, mapped 41, inferred 0, derived 0; heights documented 0, inferred 0, unknown 32.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/27.411027/85.147508) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

coords from wikidata (was 27.45,85.03) \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 41 elements); data/traces/makwanpur.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/nepal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
