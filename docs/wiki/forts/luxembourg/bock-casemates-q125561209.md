# Bock Casemates

> Luxembourg · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bock-casemates-q125561209` |
| Coordinates | 49.61174, 6.13715 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.61174/6.13715)) |
| Wikidata | [Q125561209](https://www.wikidata.org/wiki/Q125561209) (CC0) |
| Wikidata class | fortification |
| Types | casemate |
| Administrative area | Luxembourg |
| Inception | 1640 |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 228 elements (outline 1, marker 4, road 423, building 184, cliff 10, retaining-wall 50, wall 35, water 2, zone 35, waterway 5).

Evidence: documented 0, mapped 228, inferred 0, derived 0; heights documented 7, inferred 0, unknown 102.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/546345995 historic=fort Q125561209 10 m from ledger point
- pruned to the outline plus 150 m: 749 -> 437 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 61 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 288 mapped (trace size budget); minor lanes are not drawn
- origin moved 11 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.61174/6.13715) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; casemate; sitelinks=1; wikidata:Q125561209 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 228 elements); data/traces/bock-casemates-q125561209.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/luxembourg.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
