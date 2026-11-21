# Durnomagus

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `durnomagus-q1267419` |
| Coordinates | 51.0925, 6.84056 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.0925/6.84056)) |
| Wikidata | [Q1267419](https://www.wikidata.org/wiki/Q1267419) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|archaeological site\|ancient Roman structure |
| Administrative area | Dormagen |
| Designations | part of UNESCO World Heritage Site\|Kulturdenkmal |
| UNESCO WHC id | 1631-075 |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `heritage` | 8 |

## What the model contains

Tier **T1**, status `outline+walls`, 300 elements (outline 1, marker 28, road 138, building 309, wall 9, zone 4).

Evidence: documented 0, mapped 300, inferred 0, derived 0; heights documented 1, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/26188606 historic=yes 108 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 309 mapped (trace size budget); the rest of the town is not drawn
- origin moved 109 m from the ledger point to the centre of the mapped site
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.0925/6.84056) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|archaeological site\|ancient Roman structure; sitelinks=2; wikidata:Q1267419 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 300 elements); data/traces/durnomagus-q1267419.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
