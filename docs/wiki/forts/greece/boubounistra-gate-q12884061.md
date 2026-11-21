# Boubounistra Gate

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `boubounistra-gate-q12884061` |
| Coordinates | 37.9749, 23.7355 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.9749/23.7355)) |
| Wikidata | [Q12884061](https://www.wikidata.org/wiki/Q12884061) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | tower |

## What the model contains

Tier **T1**, status `outline+walls`, 263 elements (outline 1, marker 2, road 88, zone 4, building 337, wall 47, retaining-wall 1).

Evidence: documented 0, mapped 263, inferred 0, derived 0; heights documented 6, inferred 0, unknown 162.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/223175501 historic=castle 651 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 337 mapped (trace size budget); the rest of the town is not drawn
- origin moved 651 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.9749/23.7355) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q12884061 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 263 elements); data/traces/boubounistra-gate-q12884061.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
