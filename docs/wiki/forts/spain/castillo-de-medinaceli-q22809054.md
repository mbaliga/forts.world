# Castillo de Medinaceli

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-medinaceli-q22809054` |
| Coordinates | 41.16976, -2.43671 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.16976/-2.43671)) |
| Wikidata | [Q22809054](https://www.wikidata.org/wiki/Q22809054) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Soria Province |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 249 elements (outline 1, marker 2, road 105, building 296, zone 14, wall 7).

Evidence: documented 0, mapped 249, inferred 0, derived 0; heights documented 0, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14103003 historic=castle Q6057626 336 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 296 mapped (trace size budget); the rest of the town is not drawn
- origin moved 335 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.16976/-2.43671) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q22809054 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 249 elements); data/traces/castillo-de-medinaceli-q22809054.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
