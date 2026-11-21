# Hotel Clemmen

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hotel-clemmen-q2032787` |
| Coordinates | 51.05153, 3.72122 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.05153/3.72122)) |
| Wikidata | [Q2032787](https://www.wikidata.org/wiki/Q2032787) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|museum |
| Administrative area | Ghent |
| Inception | 1746 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 276 elements (outline 1, marker 6, road 131, water 2, building 427, waterway 4, zone 9, wall 3).

Evidence: documented 0, mapped 276, inferred 0, derived 0; heights documented 9, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/140966622 historic=castle Q2032787 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 427 mapped (trace size budget); the rest of the town is not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.05153/3.72122) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|museum; sitelinks=2; wikidata:Q2032787 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 276 elements); data/traces/hotel-clemmen-q2032787.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
