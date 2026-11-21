# Arco romano de Beja

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `arco-romano-de-beja-q7204979` |
| Coordinates | 38.01708, -7.86551 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.01708/-7.86551)) |
| Wikidata | [Q7204979](https://www.wikidata.org/wiki/Q7204979) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|triumphal arch\|cultural heritage\|Roman archaeological site |
| Administrative area | Beja (Salvador e Santa Maria da Feira) |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 326 elements (outline 1, marker 2, road 129, building 704, wall 72, zone 2).

Evidence: documented 0, mapped 326, inferred 0, derived 0; heights documented 1, inferred 0, unknown 191.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/61884964 historic=castle Q5049757 34 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 704 mapped (trace size budget); the rest of the town is not drawn
- origin moved 33 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.01708/-7.86551) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|triumphal arch\|cultural heritage\|Roman archaeological site; sitelinks=3; wikidata:Q7204979 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 326 elements); data/traces/arco-romano-de-beja-q7204979.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
