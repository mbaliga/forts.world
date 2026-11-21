# Trepponti bridge

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `trepponti-bridge-q17651429` |
| Coordinates | 44.69289, 12.18327 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.69289/12.18327)) |
| Wikidata | [Q17651429](https://www.wikidata.org/wiki/Q17651429) (CC0) |
| Wikidata class | fortification |
| Types | bridge\|city gate\|footbridge |
| Administrative area | Comacchio |
| Inception | 1650 |
| Designations | Italian national heritage |
| Wikipedia language editions | 5 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 298 elements (outline 1, marker 3, waterway 14, road 207, building 208, zone 5, wall 2, water 3).

Evidence: documented 0, mapped 298, inferred 0, derived 0; heights documented 5, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/798740544 historic=yes Q17651429 12 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 208 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 207 mapped (trace size budget); minor lanes are not drawn
- origin moved 12 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.69289/12.18327) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bridge\|city gate\|footbridge; sitelinks=5; wikidata:Q17651429 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 298 elements); data/traces/trepponti-bridge-q17651429.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
