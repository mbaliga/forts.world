# City walls of Pelhřimov

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-pelhrimov-q38047244` |
| Coordinates | 49.43012, 15.2223 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.43012/15.2223)) |
| Wikidata | [Q38047244](https://www.wikidata.org/wiki/Q38047244) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Pelhřimov |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 352 elements (outline 1, marker 38, road 210, building 262, waterway 1, water 1, wall 22, zone 19).

Evidence: documented 0, mapped 352, inferred 0, derived 0; heights documented 47, inferred 0, unknown 95.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/53555452 historic=castle Q29397785 74 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 262 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 210 mapped (trace size budget); minor lanes are not drawn
- origin moved 73 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.43012/15.2223) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q38047244 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 352 elements); data/traces/city-walls-of-pelhrimov-q38047244.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
