# Kámen Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kamen-castle-q1012773` |
| Coordinates | 49.42429, 15.01379 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.42429/15.01379)) |
| Wikidata | [Q1012773](https://www.wikidata.org/wiki/Q1012773) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 166 elements (outline 1, marker 3, road 39, water 1, retaining-wall 4, wall 3, building 111, cliff 2, zone 2).

Evidence: documented 0, mapped 166, inferred 0, derived 0; heights documented 72, inferred 0, unknown 46.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14680784 historic=castle Q1012773 12 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.42429/15.01379) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=4; wikidata:Q1012773 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 166 elements); data/traces/kamen-castle-q1012773.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
