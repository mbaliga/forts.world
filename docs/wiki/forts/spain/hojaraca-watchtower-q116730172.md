# Hojaraca Watchtower

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hojaraca-watchtower-q116730172` |
| Coordinates | 41.36291, -2.79338 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.36291/-2.79338)) |
| Wikidata | [Q116730172](https://www.wikidata.org/wiki/Q116730172) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | La Riba de Escalote |
| Inception | 1000 |
| Designations | Bien de Interés Cultural\|Spanish historical heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 11 elements (outline 1, marker 1, road 3, waterway 1, wall 2, zone 2, cliff 1).

Evidence: documented 0, mapped 11, inferred 0, derived 0; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1073048677 historic=fort Q116730172 10 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.36291/-2.79338) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=1; wikidata:Q116730172 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 11 elements); data/traces/hojaraca-watchtower-q116730172.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
