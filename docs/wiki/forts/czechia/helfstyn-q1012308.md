# Helfštýn

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `helfstyn-q1012308` |
| Coordinates | 49.51812, 17.62857 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.51812/17.62857)) |
| Wikidata | [Q1012308](https://www.wikidata.org/wiki/Q1012308) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Týn nad Bečvou |
| Inception | 1306 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://helfstyn.cz/ |

## What the model contains

Tier **T1**, status `outline+walls`, 275 elements (outline 1, marker 1, road 124, wall 3, water 6, zone 28, retaining-wall 10, building 94, cliff 3, waterway 5).

Evidence: documented 0, mapped 275, inferred 0, derived 0; heights documented 4, inferred 0, unknown 103.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13255642 historic=castle Q1012308 31 m from ledger point
- origin moved 30 m from the ledger point to the outline centroid
- 44 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.51812/17.62857) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=11; wikidata:Q1012308 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 275 elements); data/traces/helfstyn-q1012308.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
