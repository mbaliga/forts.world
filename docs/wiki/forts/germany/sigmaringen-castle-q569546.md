# Sigmaringen Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sigmaringen-castle-q569546` |
| Coordinates | 48.08778, 9.21694 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.08778/9.21694)) |
| Wikidata | [Q569546](https://www.wikidata.org/wiki/Q569546) (CC0) |
| Wikidata class | castle |
| Types | castle\|military museum |
| Administrative area | Sigmaringen |
| Inception | 1650 |
| Wikipedia language editions | 23 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 307 elements (outline 1, marker 4, road 240, waterway 3, building 260, cliff 2, zone 22, wall 3, retaining-wall 1, water 1).

Evidence: documented 0, mapped 307, inferred 0, derived 0; heights documented 36, inferred 0, unknown 88.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/190012416 historic=castle Q569546 54 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 260 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 240 mapped (trace size budget); minor lanes are not drawn
- origin moved 54 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.08778/9.21694) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|military museum; sitelinks=23; wikidata:Q569546 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 307 elements); data/traces/sigmaringen-castle-q569546.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
