# Kowali Tower

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kowali-tower-q25409106` |
| Coordinates | 50.05997, 19.941 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.05997/19.941)) |
| Wikidata | [Q25409106](https://www.wikidata.org/wiki/Q25409106) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|destroyed building or structure |
| Administrative area | Kraków |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 233 elements (outline 1, marker 16, road 306, building 200, zone 93, wall 66, water 1).

Evidence: documented 0, mapped 233, inferred 0, derived 0; heights documented 57, inferred 0, unknown 44.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2702585 historic=castle Q11814892 321 m from ledger point
- pruned to the outline plus 150 m: 683 -> 389 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 126 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 170 mapped (trace size budget); minor lanes are not drawn
- origin moved 323 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.05997/19.941) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|destroyed building or structure; sitelinks=1; wikidata:Q25409106 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 233 elements); data/traces/kowali-tower-q25409106.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
