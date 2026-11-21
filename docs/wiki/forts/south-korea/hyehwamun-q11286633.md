# Hyehwamun

> South Korea · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hyehwamun-q11286633` |
| Coordinates | 37.58794, 127.00393 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.58794/127.00393)) |
| Wikidata | [Q11286633](https://www.wikidata.org/wiki/Q11286633) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Hyehwa-dong |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://cgg.cha.go.kr/agapp/main/index.do?siteCd=CGG |

## What the model contains

Tier **T1**, status `outline+walls`, 303 elements (outline 1, marker 4, road 108, building 154, waterway 5, water 3, wall 13, zone 15).

Evidence: documented 0, mapped 303, inferred 0, derived 0; heights documented 3, inferred 0, unknown 164.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/380863257 historic=castle Q482852 1175 m from ledger point
- origin moved 1171 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.58794/127.00393) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=8; wikidata:Q11286633 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 303 elements); data/traces/hyehwamun-q11286633.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/south-korea.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
