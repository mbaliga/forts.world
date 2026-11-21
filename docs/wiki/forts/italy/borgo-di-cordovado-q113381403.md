# Borgo di Cordovado

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `borgo-di-cordovado-q113381403` |
| Coordinates | 45.84442, 12.88126 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.84442/12.88126)) |
| Wikidata | [Q113381403](https://www.wikidata.org/wiki/Q113381403) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Cordovado |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `website` | https://www.castellodicordovado.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 376 elements (outline 1, marker 3, road 161, building 216, waterway 12, zone 72, wall 13, water 2, retaining-wall 2, cliff 1).

Evidence: documented 0, mapped 376, inferred 0, derived 0; heights documented 44, inferred 0, unknown 91.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/36289848 historic=castle 44 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 216 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 161 mapped (trace size budget); minor lanes are not drawn
- origin moved 43 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.84442/12.88126) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q113381403 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 376 elements); data/traces/borgo-di-cordovado-q113381403.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
