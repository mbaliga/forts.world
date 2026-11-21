# Kanázs Castle

> Hungary · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kanazs-castle-q1104179` |
| Coordinates | 47.94055, 20.08973 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.94055/20.08973)) |
| Wikidata | [Q1104179](https://www.wikidata.org/wiki/Q1104179) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Mátraderecske |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `ruins` | castle |
| OSM `website` | https://geocaching.hu/caches.geo?id=1257 |

## What the model contains

Tier **T1**, status `outline-only`, 32 elements (outline 1, road 16, waterway 2, cliff 7, zone 6).

Evidence: documented 0, mapped 32, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10036694 historic=ruins 9 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.94055/20.08973) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=2; wikidata:Q1104179 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 32 elements); data/traces/kanazs-castle-q1104179.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/hungary.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
