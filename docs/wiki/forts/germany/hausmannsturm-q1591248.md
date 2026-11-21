# Hausmannsturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hausmannsturm-q1591248` |
| Coordinates | 52.2277, 11.0063 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.2277/11.0063)) |
| Wikidata | [Q1591248](https://www.wikidata.org/wiki/Q1591248) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|gate tower |
| Administrative area | Helmstedt |
| Designations | cultural heritage monument in Lower Saxony |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `description` | Ältestes erhaltenes Stadttor im Braunschweiger Land |

## What the model contains

Tier **T1**, status `outline+walls`, 253 elements (outline 1, marker 3, road 111, building 339, wall 18).

Evidence: documented 0, mapped 253, inferred 0, derived 0; heights documented 5, inferred 0, unknown 133.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/142881551 historic=yes Q1591248 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 339 mapped (trace size budget); the rest of the town is not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.2277/11.0063) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|gate tower; sitelinks=2; wikidata:Q1591248 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 253 elements); data/traces/hausmannsturm-q1591248.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
