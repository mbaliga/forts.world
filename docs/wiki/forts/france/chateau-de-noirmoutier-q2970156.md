# Château de Noirmoutier

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-noirmoutier-q2970156` |
| Coordinates | 47.00048, -2.24214 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.00048/-2.24214)) |
| Wikidata | [Q2970156](https://www.wikidata.org/wiki/Q2970156) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum |
| Administrative area | Noirmoutier-en-l'Île |
| Designations | classified historical monument |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 264 elements (outline 1, marker 3, road 121, building 495, wall 13, waterway 1, zone 2, retaining-wall 2, water 1).

Evidence: documented 0, mapped 264, inferred 0, derived 0; heights documented 0, inferred 0, unknown 135.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/33680862 historic=castle Q2970156 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 495 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.00048/-2.24214) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum; sitelinks=7; wikidata:Q2970156 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 264 elements); data/traces/chateau-de-noirmoutier-q2970156.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
