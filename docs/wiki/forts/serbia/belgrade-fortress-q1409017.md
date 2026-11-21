# Belgrade Fortress

> Serbia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `belgrade-fortress-q1409017` |
| Coordinates | 44.8236, 20.4503 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.8236/20.4503)) |
| Wikidata | [Q1409017](https://www.wikidata.org/wiki/Q1409017) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Belgrade |
| Inception | 0100 |
| Designations | Immovable Cultural Heritage of Exceptional Importance |
| Wikipedia language editions | 32 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `website` | https://www.beogradskatvrdjava.co.rs/ |

## What the model contains

Tier **T1**, status `outline+walls`, 352 elements (outline 1, marker 144, waterway 1, road 555, building 70, wall 152, retaining-wall 5, zone 189, cliff 4, water 4).

Evidence: documented 0, mapped 352, inferred 0, derived 0; heights documented 6, inferred 0, unknown 110.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/450824126 historic=castle Q1409017 32 m from ledger point
- pruned to the outline plus 60 m: 1125 -> 565 elements
- roads capped: kept the 40 longest of 253 mapped (trace size budget); minor lanes are not drawn
- origin moved 32 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.8236/20.4503) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=32; wikidata:Q1409017 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 352 elements); data/traces/belgrade-fortress-q1409017.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/serbia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
