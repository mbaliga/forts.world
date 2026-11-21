# Hohenrechberg Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hohenrechberg-castle-q2175310` |
| Coordinates | 48.7558, 9.78194 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.7558/9.78194)) |
| Wikidata | [Q2175310](https://www.wikidata.org/wiki/Q2175310) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Schwäbisch Gmünd |
| Inception | 1200 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 180 elements (outline 1, marker 7, road 74, building 78, zone 8, wall 7, cliff 3, retaining-wall 2).

Evidence: documented 0, mapped 180, inferred 0, derived 0; heights documented 5, inferred 0, unknown 82.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/155634068 historic=castle Q2175310 22 m from ledger point
- origin moved 23 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.7558/9.78194) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=6; wikidata:Q2175310 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 180 elements); data/traces/hohenrechberg-castle-q2175310.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
