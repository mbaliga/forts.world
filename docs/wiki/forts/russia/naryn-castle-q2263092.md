# Naryn Castle

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `naryn-castle-q2263092` |
| Coordinates | 42.05302, 48.27412 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.05302/48.27412)) |
| Wikidata | [Q2263092](https://www.wikidata.org/wiki/Q2263092) (CC0) |
| Wikidata class | fort |
| Types | citadel\|architectural landmark |
| Administrative area | Derbent |
| Inception | 0501 |
| Designations | World Heritage Site\|federal cultural heritage site in Russia |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 339 elements (outline 1, marker 11, road 134, wall 17, building 220, zone 39, retaining-wall 17).

Evidence: documented 0, mapped 339, inferred 0, derived 0; heights documented 2, inferred 0, unknown 152.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19337633 historic=castle Q2263092 34 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 220 mapped (trace size budget); the rest of the town is not drawn
- origin moved 33 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.05302/48.27412) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel\|architectural landmark; sitelinks=15; wikidata:Q2263092 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 339 elements); data/traces/naryn-castle-q2263092.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
