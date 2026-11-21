# Sinhagad (Kondhana)

> India · Maharashtra · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sinhagad` |
| Coordinates | 18.366, 73.755 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.366/73.755)) |
| Programme catalogue | confidence high, significance rank 226; sources catalogue:sinhagad;wikidata:Q3078248;smith-newton:r56 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 39 elements (outline 1, marker 2, cliff 2, water 1, building 4, road 29).

Evidence: documented 0, mapped 39, inferred 0, derived 0; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/126392859 historic=castle 131 m from ledger point
- origin moved 136 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.366/73.755) | 2026-11-14 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-14 |

## Research notes

- [docs/research/sinhagad-pass.md](../../../research/sinhagad-pass.md)

## Ledger note

2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 39 elements); data/traces/sinhagad.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
