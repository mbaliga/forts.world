# New Palace

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `new-palace-q695076` |
| Coordinates | 48.7781, 9.18144 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.7781/9.18144)) |
| Wikidata | [Q695076](https://www.wikidata.org/wiki/Q695076) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|château |
| Administrative area | Stuttgart |
| Inception | 1746 |
| Wikipedia language editions | 17 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://www.neues-schloss-stuttgart.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 349 elements (outline 1, marker 12, road 578, water 6, building 78, zone 64, waterway 3, retaining-wall 20, wall 15).

Evidence: documented 0, mapped 349, inferred 0, derived 0; heights documented 41, inferred 0, unknown 72.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/487414511 historic=castle Q695076 17 m from ledger point
- roads capped: kept the 150 longest of 578 mapped (trace size budget); minor lanes are not drawn
- origin moved 17 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.7781/9.18144) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|château; sitelinks=17; wikidata:Q695076 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 349 elements); data/traces/new-palace-q695076.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
