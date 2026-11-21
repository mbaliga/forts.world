# Kinsky Palace

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kinsky-palace-q27017` |
| Coordinates | 50.08809, 14.42202 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.08809/14.42202)) |
| Wikidata | [Q27017](https://www.wikidata.org/wiki/Q27017) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|museum building |
| Administrative area | Prague 1 |
| Inception | 1755 |
| Designations | national cultural monument of the Czech Republic\|cultural monument of the Czech Republic |
| Wikipedia language editions | 22 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 358 elements (outline 1, marker 72, road 328, waterway 1, building 215, zone 12, wall 2).

Evidence: documented 0, mapped 358, inferred 0, derived 0; heights documented 101, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/127987 historic=castle Q27017 14 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 215 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 328 mapped (trace size budget); minor lanes are not drawn
- origin moved 17 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.08809/14.42202) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|museum building; sitelinks=22; wikidata:Q27017 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 358 elements); data/traces/kinsky-palace-q27017.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
