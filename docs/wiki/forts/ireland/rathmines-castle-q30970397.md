# Rathmines Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rathmines-castle-q30970397` |
| Coordinates | 53.32271, -6.26532 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.32271/-6.26532)) |
| Wikidata | [Q30970397](https://www.wikidata.org/wiki/Q30970397) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Wikipedia language editions | 4 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 380 elements (outline 1, marker 5, road 619, zone 34, building 2042, wall 523, retaining-wall 2).

Evidence: documented 0, mapped 380, inferred 0, derived 0; heights documented 4, inferred 0, unknown 333.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13567962 historic=yes 181 m from ledger point
- pruned to the outline plus 60 m: 3226 -> 3175 elements
- present-day buildings capped: kept the 30 nearest the outline centre of 2012 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 40 longest of 610 mapped (trace size budget); minor lanes are not drawn
- elements capped: kept the 380 nearest the outline centre of 623 mapped (trace size budget); the rest are not drawn
- origin moved 165 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.32271/-6.26532) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q30970397 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 380 elements); data/traces/rathmines-castle-q30970397.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
