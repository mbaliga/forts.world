# Pongrác-Forgáč Palace

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pongrac-forgac-palace-q3360863` |
| Coordinates | 48.71842, 21.25854 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.71842/21.25854)) |
| Wikidata | [Q3360863](https://www.wikidata.org/wiki/Q3360863) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Košice |
| Inception | 1900 |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 211 elements (outline 1, marker 10, road 339, building 227, waterway 2, wall 54, zone 76, water 3).

Evidence: documented 0, mapped 211, inferred 0, derived 0; heights documented 4, inferred 0, unknown 82.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/48286797 historic=castle Q3360863 3 m from ledger point
- pruned to the outline plus 150 m: 712 -> 408 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 143 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 194 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.71842/21.25854) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=5; wikidata:Q3360863 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 211 elements); data/traces/pongrac-forgac-palace-q3360863.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
