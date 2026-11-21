# Changdeokgung

> South Korea · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `changdeokgung-q477157` |
| Coordinates | 37.58256, 126.99093 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.58256/126.99093)) |
| Wikidata | [Q477157](https://www.wikidata.org/wiki/Q477157) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Seoul |
| Designations | World Heritage Site |
| UNESCO WHC id | 816 |
| Wikipedia language editions | 51 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 1 |
| OSM `website` | www.cdg.go.kr |

## What the model contains

Tier **T1**, status `outline+walls`, 385 elements (outline 1, marker 3, road 191, building 941, zone 23, wall 74, waterway 8, water 4, retaining-wall 2).

Evidence: documented 0, mapped 385, inferred 0, derived 0; heights documented 0, inferred 0, unknown 196.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/789965985 historic=castle Q477157 65 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 941 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 191 mapped (trace size budget); minor lanes are not drawn
- origin moved 66 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.58256/126.99093) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=51; wikidata:Q477157 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 385 elements); data/traces/changdeokgung-q477157.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/south-korea.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
