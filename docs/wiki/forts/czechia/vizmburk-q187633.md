# Vízmburk

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vizmburk-q187633` |
| Coordinates | 50.4847, 16.0488 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.4847/16.0488)) |
| Wikidata | [Q187633](https://www.wikidata.org/wiki/Q187633) (CC0) |
| Wikidata class | ruin |
| Types | castle\|castle ruin |
| Administrative area | Havlovice |
| Inception | 1300 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `website` | https://www.hrad-vizmburk.cz/ |

## What the model contains

Tier **T1**, status `outline-only`, 33 elements (outline 1, marker 1, road 16, waterway 4, building 7, zone 4).

Evidence: documented 0, mapped 33, inferred 0, derived 0; heights documented 4, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/36002364 historic=castle Q187633 88 m from ledger point
- origin moved 88 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.4847/16.0488) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|castle ruin; sitelinks=4; wikidata:Q187633 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 33 elements); data/traces/vizmburk-q187633.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
