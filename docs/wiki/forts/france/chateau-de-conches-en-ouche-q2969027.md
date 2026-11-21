# Château de Conches-en-Ouche

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-conches-en-ouche-q2969027` |
| Coordinates | 48.96139, 0.94333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.96139/0.94333)) |
| Wikidata | [Q2969027](https://www.wikidata.org/wiki/Q2969027) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Conches-en-Ouche |
| Inception | 1100 |
| Designations | classified historical monument\|site naturel classé |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | chateau |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 199 elements (outline 1, road 67, water 1, zone 6, waterway 1, building 342, retaining-wall 3).

Evidence: documented 0, mapped 199, inferred 0, derived 0; heights documented 0, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/333965475 historic=castle Q2969027 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 342 mapped (trace size budget); the rest of the town is not drawn
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.96139/0.94333) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q2969027 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 199 elements); data/traces/chateau-de-conches-en-ouche-q2969027.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
