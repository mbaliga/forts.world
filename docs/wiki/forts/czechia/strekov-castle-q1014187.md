# Střekov Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `strekov-castle-q1014187` |
| Coordinates | 50.63913, 14.05079 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.63913/14.05079)) |
| Wikidata | [Q1014187](https://www.wikidata.org/wiki/Q1014187) (CC0) |
| Wikidata class | ruin |
| Types | castle\|castle ruin\|event venue |
| Administrative area | Střekov |
| Inception | 1310 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | http://www.hradstrekov.cz/ |

## What the model contains

Tier **T1**, status `outline+walls`, 119 elements (outline 1, marker 1, waterway 8, road 57, building 23, wall 12, zone 11, cliff 5, retaining-wall 1).

Evidence: documented 0, mapped 119, inferred 0, derived 0; heights documented 3, inferred 0, unknown 33.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6801083 historic=castle Q1014187 37 m from ledger point
- origin moved 37 m from the ledger point to the outline centroid
- 15 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.63913/14.05079) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|castle ruin\|event venue; sitelinks=12; wikidata:Q1014187 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 119 elements); data/traces/strekov-castle-q1014187.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
