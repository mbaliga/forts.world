# Palais Cavriani

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-cavriani-q1344981` |
| Coordinates | 48.20811, 16.36864 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.20811/16.36864)) |
| Wikidata | [Q1344981](https://www.wikidata.org/wiki/Q1344981) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|city palace |
| Administrative area | Vienna |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 312 elements (outline 1, marker 33, road 282, building 96, zone 10, wall 19, retaining-wall 3).

Evidence: documented 0, mapped 312, inferred 0, derived 0; heights documented 92, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/150038 historic=castle Q1344981 4 m from ledger point
- roads capped: kept the 150 longest of 282 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.20811/16.36864) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|city palace; sitelinks=3; wikidata:Q1344981 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 312 elements); data/traces/palais-cavriani-q1344981.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
