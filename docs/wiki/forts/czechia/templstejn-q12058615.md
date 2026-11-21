# Templštejn

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `templstejn-q12058615` |
| Coordinates | 49.0906, 16.2486 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.0906/16.2486)) |
| Wikidata | [Q12058615](https://www.wikidata.org/wiki/Q12058615) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Jamolice |
| Inception | 1281 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 58 elements (outline 1, wall 13, road 33, waterway 3, building 4, water 1, cliff 2, zone 1).

Evidence: documented 0, mapped 58, inferred 0, derived 0; heights documented 0, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/87141014 historic=castle Q12058615 15 m from ledger point
- origin moved 11 m from the ledger point to the outline centroid
- 23 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.0906/16.2486) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=5; wikidata:Q12058615 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 58 elements); data/traces/templstejn-q12058615.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
