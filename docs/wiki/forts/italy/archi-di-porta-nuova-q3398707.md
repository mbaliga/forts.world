# Archi di Porta Nuova

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `archi-di-porta-nuova-q3398707` |
| Coordinates | 45.4721, 9.19493 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.4721/9.19493)) |
| Wikidata | [Q3398707](https://www.wikidata.org/wiki/Q3398707) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Milan |
| Designations | Italian national heritage |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 286 elements (outline 1, marker 3, road 377, building 119, zone 3, wall 9, waterway 1).

Evidence: documented 0, mapped 286, inferred 0, derived 0; heights documented 51, inferred 0, unknown 77.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6416227 historic=castle Q3889706 114 m from ledger point
- roads capped: kept the 150 longest of 377 mapped (trace size budget); minor lanes are not drawn
- origin moved 113 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.4721/9.19493) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=8; wikidata:Q3398707 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 286 elements); data/traces/archi-di-porta-nuova-q3398707.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
