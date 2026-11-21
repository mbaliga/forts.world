# Hněvín Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hnevin-castle-q1012363` |
| Coordinates | 50.52028, 13.63347 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.52028/13.63347)) |
| Wikidata | [Q1012363](https://www.wikidata.org/wiki/Q1012363) (CC0) |
| Wikidata class | castle |
| Types | castle\|hillfort\|replica\|observation tower |
| Administrative area | Most |
| Inception | 1900 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `website` | https://hradhnevin.cz/ |

## What the model contains

Tier **T1**, status `outline+walls`, 81 elements (outline 1, road 56, building 13, wall 4, zone 2, cliff 3, waterway 1, retaining-wall 1).

Evidence: documented 0, mapped 81, inferred 0, derived 0; heights documented 1, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/50236288 historic=castle Q1012363 47 m from ledger point
- origin moved 46 m from the ledger point to the outline centroid
- 39 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.52028/13.63347) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|hillfort\|replica\|observation tower; sitelinks=5; wikidata:Q1012363 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 81 elements); data/traces/hnevin-castle-q1012363.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
