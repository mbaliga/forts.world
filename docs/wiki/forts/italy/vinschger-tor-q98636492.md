# Vinschger Tor

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vinschger-tor-q98636492` |
| Coordinates | 46.67371, 11.15944 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.67371/11.15944)) |
| Wikidata | [Q98636492](https://www.wikidata.org/wiki/Q98636492) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Merano |
| Designations | cultural heritage monument in South Tyrol |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 249 elements (outline 1, marker 1, road 123, building 535, water 1, waterway 1, wall 1, zone 1).

Evidence: documented 0, mapped 249, inferred 0, derived 0; heights documented 12, inferred 0, unknown 109.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/69323593 historic=castle Q1802191 219 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 535 mapped (trace size budget); the rest of the town is not drawn
- origin moved 219 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.67371/11.15944) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q98636492 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 249 elements); data/traces/vinschger-tor-q98636492.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
