# Burg Zieverich

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-zieverich-q1014680` |
| Coordinates | 50.9537, 6.62359 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.9537/6.62359)) |
| Wikidata | [Q1014680](https://www.wikidata.org/wiki/Q1014680) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Bergheim |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 234 elements (outline 1, marker 1, road 85, zone 9, waterway 5, water 5, building 516, wall 8).

Evidence: documented 0, mapped 234, inferred 0, derived 0; heights documented 11, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/48815315 historic=castle Q1014680 57 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 516 mapped (trace size budget); the rest of the town is not drawn
- origin moved 55 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.9537/6.62359) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q1014680 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 234 elements); data/traces/burg-zieverich-q1014680.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
