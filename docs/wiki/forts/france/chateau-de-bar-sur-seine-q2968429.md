# Château de Bar sur Seine

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-bar-sur-seine-q2968429` |
| Coordinates | 48.11333, 4.3725 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.11333/4.3725)) |
| Wikidata | [Q2968429](https://www.wikidata.org/wiki/Q2968429) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Bar-sur-Seine |
| Designations | monument historique inscrit |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 181 elements (outline 1, marker 1, road 57, zone 1, building 461, water 1).

Evidence: documented 0, mapped 181, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/283379794 historic=castle Q2968429 8 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 461 mapped (trace size budget); the rest of the town is not drawn
- origin moved 8 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.11333/4.3725) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q2968429 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 181 elements); data/traces/chateau-de-bar-sur-seine-q2968429.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
