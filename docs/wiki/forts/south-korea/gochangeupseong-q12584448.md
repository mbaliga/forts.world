# Gochangeupseong

> South Korea · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gochangeupseong-q12584448` |
| Coordinates | 35.43111, 126.70361 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.43111/126.70361)) |
| Wikidata | [Q12584448](https://www.wikidata.org/wiki/Q12584448) (CC0) |
| Wikidata class | fort |
| Types | fortress\|historic site |
| Administrative area | North Jeolla |
| Designations | Historic sites of South Korea |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | shiro |
| OSM `barrier` | wall |
| OSM `website` | http://www.gochang.go.kr/culture/index.gochang?menuCd=DOM_000000601001003002 |

## What the model contains

Tier **T1**, status `outline+walls`, 344 elements (outline 1, marker 4, waterway 8, road 245, building 71, wall 8, water 3, zone 3).

Evidence: documented 0, mapped 344, inferred 0, derived 0; heights documented 19, inferred 0, unknown 61.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/108290543 historic=castle 190 m from ledger point
- origin moved 191 m from the ledger point to the outline centroid
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.43111/126.70361) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|historic site; sitelinks=2; wikidata:Q12584448 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 344 elements); data/traces/gochangeupseong-q12584448.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/south-korea.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
