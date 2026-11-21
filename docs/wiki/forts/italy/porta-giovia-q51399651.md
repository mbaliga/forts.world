# Porta Giovia

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-giovia-q51399651` |
| Coordinates | 45.46792, 9.18262 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.46792/9.18262)) |
| Wikidata | [Q51399651](https://www.wikidata.org/wiki/Q51399651) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Milan |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 287 elements (outline 1, marker 5, road 312, building 134, wall 8, waterway 1, zone 2).

Evidence: documented 0, mapped 287, inferred 0, derived 0; heights documented 81, inferred 0, unknown 47.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6214486 historic=castle Q22263700 149 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 134 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 312 mapped (trace size budget); minor lanes are not drawn
- origin moved 157 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.46792/9.18262) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q51399651 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 287 elements); data/traces/porta-giovia-q51399651.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
