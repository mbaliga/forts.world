# Donuimun

> South Korea · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `donuimun-q483836` |
| Coordinates | 37.56824, 126.96898 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.56824/126.96898)) |
| Wikidata | [Q483836](https://www.wikidata.org/wiki/Q483836) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Jongno District |
| Inception | 1396 |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://www.deoksugung.go.kr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 225 elements (outline 1, marker 2, wall 14, road 70, building 96, water 1, retaining-wall 6, zone 35).

Evidence: documented 0, mapped 225, inferred 0, derived 0; heights documented 9, inferred 0, unknown 107.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/646147127 historic=castle Q16095015 357 m from ledger point
- origin moved 358 m from the ledger point to the outline centroid
- 50 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.56824/126.96898) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=11; wikidata:Q483836 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 225 elements); data/traces/donuimun-q483836.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/south-korea.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
