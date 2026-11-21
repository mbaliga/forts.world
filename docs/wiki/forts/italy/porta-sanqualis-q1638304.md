# Porta Sanqualis

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-sanqualis-q1638304` |
| Coordinates | 41.89645, 12.48675 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.89645/12.48675)) |
| Wikidata | [Q1638304](https://www.wikidata.org/wiki/Q1638304) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Rome |
| Wikipedia language editions | 9 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 247 elements (outline 1, marker 3, road 305, building 110, retaining-wall 93, zone 21, wall 116, water 3).

Evidence: documented 0, mapped 247, inferred 0, derived 0; heights documented 0, inferred 0, unknown 158.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2051645 historic=archaeological_site 70 m from ledger point
- pruned to the outline plus 150 m: 652 -> 373 elements
- roads capped: kept the 80 longest of 206 mapped (trace size budget); minor lanes are not drawn
- origin moved 71 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.89645/12.48675) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=9; wikidata:Q1638304 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 247 elements); data/traces/porta-sanqualis-q1638304.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
