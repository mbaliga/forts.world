# Changuimun

> South Korea · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `changuimun-q5072137` |
| Coordinates | 37.59261, 126.96659 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.59261/126.96659)) |
| Wikidata | [Q5072137](https://www.wikidata.org/wiki/Q5072137) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Cheongun-dong |
| Designations | Treasure of the Republic of Korea |
| Wikipedia language editions | 9 |
| OSM `historic` | citywalls |
| OSM `description` | 1394년 서울 한양천도 이후 2019년 서울 한양도성 영역이 '녹색교통구역'에 포함되어 행정적으로 특별 관리되기 시작했다. |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 247 elements (outline 1, wall 14, road 332, waterway 2, building 44, zone 35).

Evidence: documented 0, mapped 247, inferred 0, derived 0; heights documented 1, inferred 0, unknown 58.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/17548771 historic=citywalls Q5472741 3155 m from ledger point
- roads capped: kept the 150 longest of 332 mapped (trace size budget); minor lanes are not drawn
- origin moved 997 m from the ledger point to the outline centroid
- 35 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.59261/126.96659) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=9; wikidata:Q5072137 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 247 elements); data/traces/changuimun-q5072137.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/south-korea.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
