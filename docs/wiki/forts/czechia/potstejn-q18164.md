# Potštejn

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `potstejn-q18164` |
| Coordinates | 50.0781, 16.3086 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.0781/16.3086)) |
| Wikidata | [Q18164](https://www.wikidata.org/wiki/Q18164) (CC0) |
| Wikidata class | ruin |
| Types | castle\|castle ruin\|hillfort |
| Inception | 1250 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 338 elements (outline 1, marker 8, road 99, building 197, waterway 2, zone 29, water 1, wall 1).

Evidence: documented 0, mapped 338, inferred 0, derived 0; heights documented 83, inferred 0, unknown 115.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/67648 historic=castle Q15055058 459 m from ledger point
- origin moved 457 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.0781/16.3086) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|castle ruin\|hillfort; sitelinks=4; wikidata:Q18164 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 338 elements); data/traces/potstejn-q18164.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
