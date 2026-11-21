# Karolinentor

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `karolinentor-q110662089` |
| Coordinates | 48.20471, 16.37729 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.20471/16.37729)) |
| Wikidata | [Q110662089](https://www.wikidata.org/wiki/Q110662089) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|destroyed building or structure |
| Administrative area | Vienna |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 341 elements (outline 1, marker 14, road 296, waterway 1, water 2, building 54, retaining-wall 9, zone 110).

Evidence: documented 0, mapped 341, inferred 0, derived 0; heights documented 42, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/121004 historic=castle Q1572832 34 m from ledger point
- roads capped: kept the 150 longest of 296 mapped (trace size budget); minor lanes are not drawn
- origin moved 32 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.20471/16.37729) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|destroyed building or structure; sitelinks=1; wikidata:Q110662089 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 341 elements); data/traces/karolinentor-q110662089.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
