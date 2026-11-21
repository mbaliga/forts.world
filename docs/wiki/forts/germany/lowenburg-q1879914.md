# Löwenburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lowenburg-q1879914` |
| Coordinates | 50.6642, 7.25056 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.6642/7.25056)) |
| Wikidata | [Q1879914](https://www.wikidata.org/wiki/Q1879914) (CC0) |
| Wikidata class | ruin |
| Types | castle\|ruins |
| Administrative area | Bad Honnef |
| Inception | 1247 |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 68 elements (outline 1, marker 9, zone 3, road 34, building 3, wall 16, retaining-wall 2).

Evidence: documented 0, mapped 68, inferred 0, derived 0; heights documented 1, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6124853 historic=castle Q1879914 27 m from ledger point
- origin moved 29 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.6642/7.25056) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|ruins; sitelinks=4; wikidata:Q1879914 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 68 elements); data/traces/lowenburg-q1879914.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
