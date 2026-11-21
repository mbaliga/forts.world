# Mure Araceli

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mure-araceli-q113432781` |
| Coordinates | 45.55309, 11.55105 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.55309/11.55105)) |
| Wikidata | [Q113432781](https://www.wikidata.org/wiki/Q113432781) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Vicenza |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 259 elements (outline 1, marker 4, road 129, waterway 2, water 1, wall 1, building 541, zone 1).

Evidence: documented 0, mapped 259, inferred 0, derived 0; heights documented 6, inferred 0, unknown 115.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/138734354 historic=castle 494 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 541 mapped (trace size budget); the rest of the town is not drawn
- origin moved 496 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.55309/11.55105) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=1; wikidata:Q113432781 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 259 elements); data/traces/mure-araceli-q113432781.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
