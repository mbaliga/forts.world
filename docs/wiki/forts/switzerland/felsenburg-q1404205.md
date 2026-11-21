# Felsenburg

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `felsenburg-q1404205` |
| Coordinates | 46.53189, 7.67326 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.53189/7.67326)) |
| Wikidata | [Q1404205](https://www.wikidata.org/wiki/Q1404205) (CC0) |
| Wikidata class | ruin |
| Types | castle\|archaeological site\|castle ruin |
| Administrative area | Kandergrund |
| Designations | class A Swiss cultural property of national significance |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 42 elements (outline 1, road 23, building 13, cliff 2, wall 1, waterway 2).

Evidence: documented 0, mapped 42, inferred 0, derived 0; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/282026358 historic=castle Q1404205 7 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.53189/7.67326) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|archaeological site\|castle ruin; sitelinks=4; wikidata:Q1404205 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 42 elements); data/traces/felsenburg-q1404205.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
