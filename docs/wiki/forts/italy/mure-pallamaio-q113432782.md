# Mure Pallamaio

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mure-pallamaio-q113432782` |
| Coordinates | 45.54359, 11.5435 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.54359/11.5435)) |
| Wikidata | [Q113432782](https://www.wikidata.org/wiki/Q113432782) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Vicenza |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 234 elements (outline 1, marker 1, road 107, waterway 2, building 563, zone 1, water 1, wall 1).

Evidence: documented 0, mapped 234, inferred 0, derived 0; heights documented 3, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/138893912 historic=castle Q16586493 218 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 563 mapped (trace size budget); the rest of the town is not drawn
- origin moved 215 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.54359/11.5435) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=1; wikidata:Q113432782 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 234 elements); data/traces/mure-pallamaio-q113432782.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
