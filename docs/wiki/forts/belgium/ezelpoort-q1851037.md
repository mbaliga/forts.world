# Ezelpoort

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ezelpoort-q1851037` |
| Coordinates | 51.21556, 3.21556 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.21556/3.21556)) |
| Wikidata | [Q1851037](https://www.wikidata.org/wiki/Q1851037) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Bruges |
| Designations | beschermd monument |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 4 |
| OSM `description` | Neoclassicistisch herenhuis |

## What the model contains

Tier **T1**, status `outline+walls`, 307 elements (outline 1, marker 5, road 136, water 3, building 708, zone 8, waterway 3, wall 31).

Evidence: documented 0, mapped 307, inferred 0, derived 0; heights documented 1, inferred 0, unknown 150.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/260506717 historic=castle 513 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 708 mapped (trace size budget); the rest of the town is not drawn
- origin moved 515 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.21556/3.21556) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=6; wikidata:Q1851037 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 307 elements); data/traces/ezelpoort-q1851037.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
