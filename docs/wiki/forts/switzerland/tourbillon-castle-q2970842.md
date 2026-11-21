# Tourbillon Castle

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tourbillon-castle-q2970842` |
| Coordinates | 46.23646, 7.36695 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.23646/7.36695)) |
| Wikidata | [Q2970842](https://www.wikidata.org/wiki/Q2970842) (CC0) |
| Wikidata class | ruin |
| Types | archaeological site\|castle ruin |
| Administrative area | Sion |
| Inception | 1290 |
| Designations | class A Swiss cultural property of national significance |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `website` | https://www.tourbillon.ch |

## What the model contains

Tier **T1**, status `outline+walls`, 73 elements (outline 1, road 32, waterway 2, building 24, wall 5, zone 3, cliff 6).

Evidence: documented 0, mapped 73, inferred 0, derived 0; heights documented 0, inferred 0, unknown 29.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/237143474 historic=castle Q2970842 21 m from ledger point
- origin moved 18 m from the ledger point to the outline centroid
- 17 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.23646/7.36695) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; archaeological site\|castle ruin; sitelinks=11; wikidata:Q2970842 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 73 elements); data/traces/tourbillon-castle-q2970842.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
