# Burg Ehrenberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-ehrenberg-q1011541` |
| Coordinates | 49.2672, 9.14639 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.2672/9.14639)) |
| Wikidata | [Q1011541](https://www.wikidata.org/wiki/Q1011541) (CC0) |
| Wikidata class | ruin |
| Types | castle\|castle ruin |
| Administrative area | Heinsheim |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `barrier` | wall |
| OSM `website` | http://www.ferien-burg-ehrenberg.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 72 elements (outline 1, road 30, zone 14, building 19, waterway 6, wall 1).

Evidence: documented 0, mapped 72, inferred 0, derived 0; heights documented 6, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/203862867 historic=castle Q1011541 26 m from ledger point
- origin moved 24 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.2672/9.14639) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|castle ruin; sitelinks=4; wikidata:Q1011541 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 72 elements); data/traces/burg-ehrenberg-q1011541.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
