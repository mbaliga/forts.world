# Kasselburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kasselburg-q1731932` |
| Coordinates | 50.23917, 6.68528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.23917/6.68528)) |
| Wikidata | [Q1731932](https://www.wikidata.org/wiki/Q1731932) (CC0) |
| Wikidata class | ruin |
| Types | château\|castle ruin |
| Administrative area | Pelm |
| Inception | 1100 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 54 elements (outline 1, road 31, waterway 1, zone 11, building 8, wall 1).

Evidence: documented 0, mapped 54, inferred 0, derived 0; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/216961123 historic=castle Q1731932 11 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.23917/6.68528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; château\|castle ruin; sitelinks=7; wikidata:Q1731932 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 54 elements); data/traces/kasselburg-q1731932.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
