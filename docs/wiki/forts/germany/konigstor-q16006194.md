# Königstor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `konigstor-q16006194` |
| Coordinates | 48.78258, 9.18202 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.78258/9.18202)) |
| Wikidata | [Q16006194](https://www.wikidata.org/wiki/Q16006194) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://www.neues-schloss-stuttgart.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 307 elements (outline 1, marker 12, road 467, water 6, building 46, zone 56, waterway 3, retaining-wall 19, wall 14).

Evidence: documented 0, mapped 307, inferred 0, derived 0; heights documented 30, inferred 0, unknown 49.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/487414511 historic=castle Q695076 504 m from ledger point
- roads capped: kept the 150 longest of 467 mapped (trace size budget); minor lanes are not drawn
- origin moved 503 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.78258/9.18202) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q16006194 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 307 elements); data/traces/konigstor-q16006194.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
