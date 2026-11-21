# Porta all’Arco

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-all-arco-q3908880` |
| Coordinates | 43.31519, 11.33049 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.31519/11.33049)) |
| Wikidata | [Q3908880](https://www.wikidata.org/wiki/Q3908880) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Siena |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 311 elements (outline 1, marker 1, road 197, building 240, retaining-wall 17, water 1, wall 18, zone 3).

Evidence: documented 0, mapped 311, inferred 0, derived 0; heights documented 9, inferred 0, unknown 146.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3757204 historic=castle Q3890745 219 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 240 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 197 mapped (trace size budget); minor lanes are not drawn
- origin moved 219 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.31519/11.33049) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=3; wikidata:Q3908880 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 311 elements); data/traces/porta-all-arco-q3908880.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
