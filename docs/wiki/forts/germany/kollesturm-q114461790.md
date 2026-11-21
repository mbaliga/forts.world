# Köllesturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kollesturm-q114461790` |
| Coordinates | 49.04275, 9.09361 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.04275/9.09361)) |
| Wikidata | [Q114461790](https://www.wikidata.org/wiki/Q114461790) (CC0) |
| Wikidata class | fortification |
| Types | gate tower |
| Administrative area | Bönnigheim |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 206 elements (outline 1, road 80, building 585, wall 2, zone 3).

Evidence: documented 0, mapped 206, inferred 0, derived 0; heights documented 4, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/325210287 historic=castle 182 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 585 mapped (trace size budget); the rest of the town is not drawn
- origin moved 181 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.04275/9.09361) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate tower; sitelinks=1; wikidata:Q114461790 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 206 elements); data/traces/kollesturm-q114461790.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
