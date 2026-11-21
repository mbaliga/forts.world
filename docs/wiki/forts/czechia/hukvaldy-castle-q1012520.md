# Hukvaldy Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hukvaldy-castle-q1012520` |
| Coordinates | 49.62108, 18.22778 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.62108/18.22778)) |
| Wikidata | [Q1012520](https://www.wikidata.org/wiki/Q1012520) (CC0) |
| Wikidata class | ruin |
| Types | castle\|castle ruin\|event venue |
| Administrative area | Hukvaldy |
| Inception | 1250 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 99 elements (outline 1, building 12, road 57, waterway 3, wall 18, zone 8).

Evidence: documented 0, mapped 99, inferred 0, derived 0; heights documented 3, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/40306193 historic=castle Q1012520 74 m from ledger point
- origin moved 75 m from the ledger point to the outline centroid
- 22 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.62108/18.22778) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|castle ruin\|event venue; sitelinks=7; wikidata:Q1012520 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 99 elements); data/traces/hukvaldy-castle-q1012520.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
