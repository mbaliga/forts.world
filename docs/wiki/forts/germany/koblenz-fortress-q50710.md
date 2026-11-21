# Koblenz Fortress

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `koblenz-fortress-q50710` |
| Coordinates | 50.35, 7.6 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.35/7.6)) |
| Wikidata | [Q50710](https://www.wikidata.org/wiki/Q50710) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Koblenz |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 286 elements (outline 1, marker 6, road 322, building 34, waterway 1, wall 18, retaining-wall 12, zone 63, water 1).

Evidence: documented 0, mapped 286, inferred 0, derived 0; heights documented 4, inferred 0, unknown 60.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/953696281 historic=castle 533 m from ledger point
- roads capped: kept the 150 longest of 322 mapped (trace size budget); minor lanes are not drawn
- origin moved 533 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.35/7.6) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=7; wikidata:Q50710 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 286 elements); data/traces/koblenz-fortress-q50710.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
