# Schloss Erxleben

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-erxleben-q1248363` |
| Coordinates | 52.21841, 11.24014 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.21841/11.24014)) |
| Wikidata | [Q1248363](https://www.wikidata.org/wiki/Q1248363) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Erxleben |
| Designations | heritage monument in Saxony-Anhalt |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | yes |
| OSM `description` | Schloss Erxleben |

## What the model contains

Tier **T1**, status `outline+walls`, 246 elements (outline 1, marker 2, road 84, zone 29, water 3, building 426, wall 6, waterway 1).

Evidence: documented 0, mapped 246, inferred 0, derived 0; heights documented 5, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1060087841 historic=castle Q1248363 42 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 426 mapped (trace size budget); the rest of the town is not drawn
- origin moved 46 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.21841/11.24014) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=4; wikidata:Q1248363 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 246 elements); data/traces/schloss-erxleben-q1248363.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
