# Baggotrath Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `baggotrath-castle-q4841592` |
| Coordinates | 53.3335, -6.24305 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.3335/-6.24305)) |
| Wikidata | [Q4841592](https://www.wikidata.org/wiki/Q4841592) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 380 elements (outline 1, marker 6, road 890, waterway 7, building 1516, wall 576, water 3, zone 18, retaining-wall 2).

Evidence: documented 0, mapped 380, inferred 0, derived 0; heights documented 5, inferred 0, unknown 356.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8452331 historic=yes 208 m from ledger point
- pruned to the outline plus 60 m: 3019 -> 2699 elements
- present-day buildings capped: kept the 30 nearest the outline centre of 1334 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 40 longest of 809 mapped (trace size budget); minor lanes are not drawn
- elements capped: kept the 380 nearest the outline centre of 626 mapped (trace size budget); the rest are not drawn
- origin moved 226 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.3335/-6.24305) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q4841592 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 380 elements); data/traces/baggotrath-castle-q4841592.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
