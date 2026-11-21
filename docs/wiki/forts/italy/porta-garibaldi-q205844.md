# Porta Garibaldi

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-garibaldi-q205844` |
| Coordinates | 45.48066, 9.18687 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.48066/9.18687)) |
| Wikidata | [Q205844](https://www.wikidata.org/wiki/Q205844) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|tollbooth |
| Administrative area | Milan |
| Designations | Italian national heritage |
| Wikipedia language editions | 8 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 295 elements (outline 1, road 345, zone 19, building 103, wall 17, waterway 5).

Evidence: documented 0, mapped 295, inferred 0, derived 0; heights documented 57, inferred 0, unknown 63.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/437239944 historic=building 319 m from ledger point
- roads capped: kept the 150 longest of 345 mapped (trace size budget); minor lanes are not drawn
- origin moved 318 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.48066/9.18687) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|tollbooth; sitelinks=8; wikidata:Q205844 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 295 elements); data/traces/porta-garibaldi-q205844.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
