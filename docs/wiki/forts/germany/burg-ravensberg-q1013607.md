# Burg Ravensberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-ravensberg-q1013607` |
| Coordinates | 52.0826, 8.29717 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.0826/8.29717)) |
| Wikidata | [Q1013607](https://www.wikidata.org/wiki/Q1013607) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Borgholzhausen |
| Inception | 1080 |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `website` | https://www.burg-ravensberg.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 65 elements (outline 1, marker 2, road 29, building 10, zone 9, cliff 2, retaining-wall 1, wall 11).

Evidence: documented 0, mapped 65, inferred 0, derived 0; heights documented 1, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/28216891 historic=castle Q1013607 43 m from ledger point
- origin moved 43 m from the ledger point to the outline centroid
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.0826/8.29717) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q1013607 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 65 elements); data/traces/burg-ravensberg-q1013607.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
