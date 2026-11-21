# Porta Romana

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-romana-q51488513` |
| Coordinates | 45.46032, 9.18874 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.46032/9.18874)) |
| Wikidata | [Q51488513](https://www.wikidata.org/wiki/Q51488513) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Milan |
| Inception | 0049 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 284 elements (outline 1, marker 1, road 337, building 111, wall 20, zone 1).

Evidence: documented 0, mapped 284, inferred 0, derived 0; heights documented 46, inferred 0, unknown 85.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7034378 historic=castle Q533422 69 m from ledger point
- roads capped: kept the 150 longest of 337 mapped (trace size budget); minor lanes are not drawn
- origin moved 69 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.46032/9.18874) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q51488513 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 284 elements); data/traces/porta-romana-q51488513.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
