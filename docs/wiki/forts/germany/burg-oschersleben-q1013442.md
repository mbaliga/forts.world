# Burg Oschersleben

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-oschersleben-q1013442` |
| Coordinates | 52.0242, 11.225 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.0242/11.225)) |
| Wikidata | [Q1013442](https://www.wikidata.org/wiki/Q1013442) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Oschersleben (Bode) |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 229 elements (outline 1, marker 1, road 116, wall 92, zone 92, waterway 8, water 6, building 357).

Evidence: documented 0, mapped 229, inferred 0, derived 0; heights documented 84, inferred 0, unknown 29.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/320815928 historic=castle Q1013442 33 m from ledger point
- pruned to the outline plus 150 m: 673 -> 322 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 153 mapped (trace size budget); the rest of the town is not drawn
- origin moved 33 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.0242/11.225) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q1013442 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 229 elements); data/traces/burg-oschersleben-q1013442.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
