# Round Tower

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `round-tower-q21393870` |
| Coordinates | 55.75564, 37.61797 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.75564/37.61797)) |
| Wikidata | [Q21393870](https://www.wikidata.org/wiki/Q21393870) (CC0) |
| Wikidata class | fortification |
| Types | replica\|defensive tower |
| Administrative area | Moscow |
| Inception | 1997 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 243 elements (outline 1, marker 30, road 429, building 14, retaining-wall 30, zone 13, water 2, wall 1, waterway 2).

Evidence: documented 0, mapped 243, inferred 0, derived 0; heights documented 4, inferred 0, unknown 41.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1359233 historic=castle Q930376 269 m from ledger point
- roads capped: kept the 150 longest of 429 mapped (trace size budget); minor lanes are not drawn
- origin moved 271 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.75564/37.61797) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; replica\|defensive tower; sitelinks=2; wikidata:Q21393870 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 243 elements); data/traces/round-tower-q21393870.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
