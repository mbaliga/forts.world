# Gyeongbokgung

> South Korea · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gyeongbokgung-q482485` |
| Coordinates | 37.57977, 126.9769 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.57977/126.9769)) |
| Wikidata | [Q482485](https://www.wikidata.org/wiki/Q482485) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Jongno District |
| Inception | 1395 |
| Designations | Historic sites of South Korea |
| Wikipedia language editions | 46 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | http://www.royalpalace.go.kr |

## What the model contains

Tier **T1**, status `outline+walls`, 348 elements (outline 1, marker 11, wall 73, zone 104, road 611, building 926, waterway 6, retaining-wall 24).

Evidence: documented 0, mapped 348, inferred 0, derived 0; heights documented 51, inferred 0, unknown 104.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5501517 historic=castle Q482485 124 m from ledger point
- pruned to the outline plus 150 m: 1756 -> 1372 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 641 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 523 mapped (trace size budget); minor lanes are not drawn
- origin moved 122 m from the ledger point to the outline centroid
- 14 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.57977/126.9769) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=46; wikidata:Q482485 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 348 elements); data/traces/gyeongbokgung-q482485.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/south-korea.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
