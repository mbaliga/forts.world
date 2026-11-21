# Stadtmauer

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtmauer-q41351627` |
| Coordinates | 49.73755, 10.15563 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.73755/10.15563)) |
| Wikidata | [Q41351627](https://www.wikidata.org/wiki/Q41351627) (CC0) |
| Wikidata class | fortification |
| Types | cultural heritage ensemble\|city walls |
| Administrative area | Kitzingen |
| Designations | former architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 355 elements (outline 1, marker 14, road 81, wall 8, building 251).

Evidence: documented 0, mapped 355, inferred 0, derived 0; heights documented 6, inferred 0, unknown 253.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/132406227 historic=building Q1291753 311 m from ledger point
- origin moved 311 m from the ledger point to the centre of the mapped site
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.73755/10.15563) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; cultural heritage ensemble\|city walls; sitelinks=0; wikidata:Q41351627 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 355 elements); data/traces/stadtmauer-q41351627.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
