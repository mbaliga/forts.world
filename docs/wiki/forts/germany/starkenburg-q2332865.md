# Starkenburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `starkenburg-q2332865` |
| Coordinates | 49.6461, 8.64861 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.6461/8.64861)) |
| Wikidata | [Q2332865](https://www.wikidata.org/wiki/Q2332865) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Heppenheim |
| Inception | 1065 |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 87 elements (outline 1, marker 1, zone 6, road 43, building 25, retaining-wall 10, waterway 1).

Evidence: documented 0, mapped 87, inferred 0, derived 0; heights documented 5, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/162622523 historic=castle Q2332865 28 m from ledger point
- origin moved 37 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.6461/8.64861) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q2332865 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 87 elements); data/traces/starkenburg-q2332865.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
