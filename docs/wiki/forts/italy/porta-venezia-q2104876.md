# Porta Venezia

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-venezia-q2104876` |
| Coordinates | 45.47438, 9.20501 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.47438/9.20501)) |
| Wikidata | [Q2104876](https://www.wikidata.org/wiki/Q2104876) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Milan |
| Designations | Italian national heritage |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 355 elements (outline 1, marker 2, road 241, building 97, zone 5, retaining-wall 1, wall 5, waterway 3).

Evidence: documented 0, mapped 355, inferred 0, derived 0; heights documented 45, inferred 0, unknown 58.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6280979 historic=castle Q734359 358 m from ledger point
- origin moved 358 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.47438/9.20501) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=9; wikidata:Q2104876 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 355 elements); data/traces/porta-venezia-q2104876.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
