# Nahargarh

> India · Rajasthan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nahargarh` |
| Coordinates | 26.937, 75.815 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/26.937/75.815)) |
| Programme catalogue | confidence high, significance rank 206; sources catalogue:nahargarh;wikidata:Q2723401;smith-newton:r85 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 20 elements (outline 1, marker 2, wall 2, road 12, water 2, building 1).

Evidence: documented 0, mapped 20, inferred 0, derived 0; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2181610 historic=fort 93 m from ledger point
- origin moved 98 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/26.937/75.815) | 2026-11-14 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-14 |

## Research notes

- [docs/research/nahargarh-ridge-mapped-pass.md](../../../research/nahargarh-ridge-mapped-pass.md)
- [docs/research/nahargarh-wall-corridor-geometry-pass.md](../../../research/nahargarh-wall-corridor-geometry-pass.md)

## Ledger note

2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 0 elements); data/traces/nahargarh.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: the first OSM fetch (2026-11-14) had returned nothing; OSM re-fetched with the same query and 1500 m radius (1722 elements), terrain tiles unchanged, auto-T1 rebuilt (outline+walls, 20 elements). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
