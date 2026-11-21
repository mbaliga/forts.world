# Castillo

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-q97642006` |
| Coordinates | 37.18088, -5.7844 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.18088/-5.7844)) |
| Wikidata | [Q97642006](https://www.wikidata.org/wiki/Q97642006) (CC0) |
| Wikidata class | castle |
| Types | castle\|human settlement\|archaeological site\|agricultural structure |
| Administrative area | Utrera |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 318 elements (outline 1, marker 1, road 86, building 218, zone 2, wall 8, water 2).

Evidence: documented 0, mapped 318, inferred 0, derived 0; heights documented 3, inferred 0, unknown 223.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/471238429 historic=castle Q97642006 4 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.18088/-5.7844) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|human settlement\|archaeological site\|agricultural structure; sitelinks=4; wikidata:Q97642006 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 318 elements); data/traces/castillo-q97642006.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
