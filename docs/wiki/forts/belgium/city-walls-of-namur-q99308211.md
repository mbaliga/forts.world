# City walls of Namur

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-namur-q99308211` |
| Coordinates | 50.46667, 4.86667 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.46667/4.86667)) |
| Wikidata | [Q99308211](https://www.wikidata.org/wiki/Q99308211) (CC0) |
| Wikidata class | fortification |
| Types | enceinte |
| Administrative area | Namur |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 4 |
| OSM `website` | https://citadelle.namur.be/ |

## What the model contains

Tier **T1**, status `outline+walls`, 217 elements (outline 1, marker 16, road 325, building 1128, zone 25, wall 82, cliff 1, retaining-wall 15, water 5, waterway 4).

Evidence: documented 0, mapped 217, inferred 0, derived 0; heights documented 29, inferred 0, unknown 84.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/121629346 historic=castle Q2600730 772 m from ledger point
- pruned to the outline plus 150 m: 1602 -> 587 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 335 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 175 mapped (trace size budget); minor lanes are not drawn
- origin moved 766 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.46667/4.86667) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; enceinte; sitelinks=2; wikidata:Q99308211 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 217 elements); data/traces/city-walls-of-namur-q99308211.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
