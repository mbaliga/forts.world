# City walls of Perpignan

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-perpignan-q3078501` |
| Coordinates | 42.7006, 2.89399 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.7006/2.89399)) |
| Wikidata | [Q3078501](https://www.wikidata.org/wiki/Q3078501) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Perpignan |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 284 elements (outline 1, road 176, water 3, building 537, waterway 4, zone 1, wall 3, retaining-wall 2).

Evidence: documented 0, mapped 284, inferred 0, derived 0; heights documented 9, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/81552887 historic=castle Q3257886 129 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 537 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 176 mapped (trace size budget); minor lanes are not drawn
- origin moved 130 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.7006/2.89399) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q3078501 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 284 elements); data/traces/city-walls-of-perpignan-q3078501.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
