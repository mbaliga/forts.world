# Bydgoszcz Gate in Torun

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bydgoszcz-gate-in-torun-q86673812` |
| Coordinates | 53.00917, 18.59944 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.00917/18.59944)) |
| Wikidata | [Q86673812](https://www.wikidata.org/wiki/Q86673812) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|destroyed building or structure |
| Administrative area | Toruń |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 194 elements (outline 1, marker 7, road 518, building 82, wall 28, zone 134, water 4, waterway 14, retaining-wall 1).

Evidence: documented 0, mapped 194, inferred 0, derived 0; heights documented 6, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/243742854 historic=building Q65162006 168 m from ledger point
- pruned to the outline plus 150 m: 789 -> 364 elements
- roads capped: kept the 80 longest of 250 mapped (trace size budget); minor lanes are not drawn
- origin moved 168 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.00917/18.59944) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|destroyed building or structure; sitelinks=1; wikidata:Q86673812 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 194 elements); data/traces/bydgoszcz-gate-in-torun-q86673812.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
