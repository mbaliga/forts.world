# Roquebrune castle

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `roquebrune-castle-q1013727` |
| Coordinates | 43.76524, 7.45968 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.76524/7.45968)) |
| Wikidata | [Q1013727](https://www.wikidata.org/wiki/Q1013727) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Roquebrune-Cap-Martin |
| Designations | monument historique inscrit |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 203 elements (outline 1, marker 2, road 74, zone 4, cliff 1, building 583, retaining-wall 1).

Evidence: documented 0, mapped 203, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/138591946 historic=castle Q1013727 7 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 583 mapped (trace size budget); the rest of the town is not drawn
- origin moved 7 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.76524/7.45968) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q1013727 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 203 elements); data/traces/roquebrune-castle-q1013727.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
