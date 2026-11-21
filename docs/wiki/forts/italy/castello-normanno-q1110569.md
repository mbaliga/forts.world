# Castello Normanno

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-normanno-q1110569` |
| Coordinates | 37.56545, 14.89369 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.56545/14.89369)) |
| Wikidata | [Q1110569](https://www.wikidata.org/wiki/Q1110569) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Paternò |
| Inception | 1072 |
| Designations | Italian national heritage |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 267 elements (outline 1, marker 1, road 71, retaining-wall 39, building 308, zone 6, wall 28, cliff 1).

Evidence: documented 0, mapped 267, inferred 0, derived 0; heights documented 0, inferred 0, unknown 187.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/560615374 historic=castle Q1110569 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 308 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.56545/14.89369) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q1110569 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 267 elements); data/traces/castello-normanno-q1110569.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
