# Scharfenberg Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `scharfenberg-castle-q1013845` |
| Coordinates | 49.189, 7.98682 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.189/7.98682)) |
| Wikidata | [Q1013845](https://www.wikidata.org/wiki/Q1013845) (CC0) |
| Wikidata class | castle |
| Types | rock castle |
| Administrative area | Rhineland-Palatinate |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | Restauriert 2021-2024 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 63 elements (outline 1, road 44, wall 8, zone 4, cliff 6).

Evidence: documented 0, mapped 63, inferred 0, derived 0; heights documented 1, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/234774667 historic=castle Q1013845 48 m from ledger point
- origin moved 48 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.189/7.98682) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; rock castle; sitelinks=5; wikidata:Q1013845 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 63 elements); data/traces/scharfenberg-castle-q1013845.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
