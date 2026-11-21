# Château de Vitré

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-vitre-q2418225` |
| Coordinates | 48.12444, -1.21528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.12444/-1.21528)) |
| Wikidata | [Q2418225](https://www.wikidata.org/wiki/Q2418225) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Vitré |
| Designations | classified historical monument |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `website` | https://chateau.vitre.bzh |

## What the model contains

Tier **T1**, status `outline+walls`, 296 elements (outline 1, marker 8, road 126, building 607, water 1, zone 6, waterway 14, wall 12, retaining-wall 6, cliff 2).

Evidence: documented 0, mapped 296, inferred 0, derived 0; heights documented 1, inferred 0, unknown 137.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/374505227 historic=castle Q2418225 11 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 607 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.12444/-1.21528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=13; wikidata:Q2418225 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 296 elements); data/traces/chateau-de-vitre-q2418225.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
