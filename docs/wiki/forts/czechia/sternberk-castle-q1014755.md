# Šternberk Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sternberk-castle-q1014755` |
| Coordinates | 49.73306, 17.30167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.73306/17.30167)) |
| Wikidata | [Q1014755](https://www.wikidata.org/wiki/Q1014755) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Šternberk |
| Inception | 1300 |
| Designations | national cultural monument of the Czech Republic\|cultural monument of the Czech Republic |
| Wikipedia language editions | 7 |
| OSM `historic` | monastery |
| OSM `website` | https://sternberskyklaster.cz/ |

## What the model contains

Tier **T1**, status `outline+walls`, 284 elements (outline 1, marker 10, road 139, building 377, zone 5, wall 4, retaining-wall 3, waterway 2).

Evidence: documented 0, mapped 284, inferred 0, derived 0; heights documented 87, inferred 0, unknown 40.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1453951427 historic=monastery Q31525073 198 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 377 mapped (trace size budget); the rest of the town is not drawn
- origin moved 200 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.73306/17.30167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=7; wikidata:Q1014755 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 284 elements); data/traces/sternberk-castle-q1014755.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
