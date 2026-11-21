# Zorawar Fort, Leh

> India · Ladakh · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zorawar` |
| Coordinates | 34.16, 77.58 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.16/77.58)) |
| Programme catalogue | confidence low, significance rank 3232; sources catalogue:zorawar |

## What the model contains

Tier **T1**, status `location-only`, 133 elements (road 16, building 90, zone 27).

Evidence: documented 0, mapped 133, inferred 0, derived 0; heights documented 0, inferred 0, unknown 90.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.16/77.58) | 2026-11-14 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-14 |

## Ledger note

Alpha-X batch (2026-11-14): geometry requested. \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 0 elements); data/traces/zorawar.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: the first OSM fetch (2026-11-14) had returned nothing; OSM re-fetched with the same query and 600 m radius (807 elements), terrain tiles unchanged, auto-T1 rebuilt (location-only, 133 elements). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
