# Sheremetiev Palace

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sheremetiev-palace-q11903355` |
| Coordinates | 59.93649, 30.34567 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.93649/30.34567)) |
| Wikidata | [Q11903355](https://www.wikidata.org/wiki/Q11903355) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|architectural landmark |
| Administrative area | Saint Petersburg |
| Inception | 1730 |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 341 elements (outline 1, marker 7, road 267, waterway 1, building 28, zone 11, wall 5, retaining-wall 21).

Evidence: documented 0, mapped 341, inferred 0, derived 0; heights documented 21, inferred 0, unknown 33.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3801088 historic=castle Q11903355 12 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.93649/30.34567) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|architectural landmark; sitelinks=9; wikidata:Q11903355 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 341 elements); data/traces/sheremetiev-palace-q11903355.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
