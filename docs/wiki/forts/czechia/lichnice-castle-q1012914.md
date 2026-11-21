# Lichnice Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lichnice-castle-q1012914` |
| Coordinates | 49.87911, 15.58625 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.87911/15.58625)) |
| Wikidata | [Q1012914](https://www.wikidata.org/wiki/Q1012914) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Třemošnice |
| Inception | 1300 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 8 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 121 elements (outline 1, road 25, waterway 1, building 57, wall 29, cliff 1, zone 7).

Evidence: documented 0, mapped 121, inferred 0, derived 0; heights documented 40, inferred 0, unknown 46.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14692746 historic=ruins Q1012914 13 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid
- 15 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.87911/15.58625) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=8; wikidata:Q1012914 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 121 elements); data/traces/lichnice-castle-q1012914.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
