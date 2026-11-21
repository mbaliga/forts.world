# Durg Mandalgarh

> India · Bhilwara district · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `durg-mandalgarh-q140982232` |
| Coordinates | 25.206944, 75.093056 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/25.206944/75.093056)) |
| Wikidata | [Q140982232](https://www.wikidata.org/wiki/Q140982232) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Bhilwara district |
| Designations | State Protected Monument |
| Wikipedia language editions | 0 |
| Programme catalogue | confidence high, significance rank 818; sources wikidata:Q140982232;smith-newton:r2527 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 6 elements (outline 1, road 4, water 1).

Evidence: documented 0, mapped 6, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/559557047 historic=castle 385 m from ledger point
- origin moved 389 m from the ledger point to the outline centroid
- 7 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/25.206944/75.093056) | 2026-11-16 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-16 |

## Ledger note

type=fort; confidence=high; rank=818; sources=2 Alpha-F batch (2026-11-14): 10 sites spread across A-Z starting at F; see docs/fort-fidelity/batch-alpha-F.csv. \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline-only, 6 elements); data/traces/durg-mandalgarh-q140982232.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
