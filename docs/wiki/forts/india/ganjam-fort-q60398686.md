# Ganjam  Fort

> India · Ganjam district · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ganjam-fort-q60398686` |
| Coordinates | 19.379265, 85.056442 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/19.379265/85.056442)) |
| Wikidata | [Q60398686](https://www.wikidata.org/wiki/Q60398686) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Ganjam district |
| Designations | State Protected Monument |
| Wikipedia language editions | 1 |
| Programme catalogue | confidence high, significance rank 691; sources wikidata:Q60398686;smith-newton:r2306 |
| OSM `historic` | fort |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 12 elements (outline 1, waterway 1, road 9).

Evidence: documented 0, mapped 12, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/685364069 historic=fort 389 m from ledger point
- origin moved 386 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/19.379265/85.056442) | 2026-11-16 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-16 |

## Ledger note

type=fort; confidence=high; rank=691; sources=2 Alpha-F batch (2026-11-14): 10 sites spread across A-Z starting at F; see docs/fort-fidelity/batch-alpha-F.csv. \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline+walls, 12 elements); data/traces/ganjam-fort-q60398686.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
