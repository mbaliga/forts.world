# Žďár monastery

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zdar-monastery-q539441` |
| Coordinates | 49.58317, 15.93754 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.58317/15.93754)) |
| Wikidata | [Q539441](https://www.wikidata.org/wiki/Q539441) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|monastery\|château\|religious community |
| Administrative area | Žďár nad Sázavou 2 |
| Inception | 1252 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 395 elements (outline 1, marker 23, road 228, zone 62, building 119, wall 17, water 15, waterway 8).

Evidence: documented 0, mapped 395, inferred 0, derived 0; heights documented 69, inferred 0, unknown 67.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/450190726 historic=castle Q539441 29 m from ledger point
- roads capped: kept the 150 longest of 228 mapped (trace size budget); minor lanes are not drawn
- origin moved 26 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.58317/15.93754) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|monastery\|château\|religious community; sitelinks=5; wikidata:Q539441 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 395 elements); data/traces/zdar-monastery-q539441.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
