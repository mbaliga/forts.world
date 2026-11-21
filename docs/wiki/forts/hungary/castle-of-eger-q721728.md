# Castle of Eger

> Hungary · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-eger-q721728` |
| Coordinates | 47.9039, 20.3794 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.9039/20.3794)) |
| Wikidata | [Q721728](https://www.wikidata.org/wiki/Q721728) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Eger |
| Wikipedia language editions | 19 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.egrivar.hu/ |

## What the model contains

Tier **T1**, status `outline+walls`, 336 elements (outline 1, marker 24, road 187, waterway 1, building 426, zone 9, water 1, wall 28, retaining-wall 2).

Evidence: documented 0, mapped 336, inferred 0, derived 0; heights documented 28, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18318703 historic=castle Q721728 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 426 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 187 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.9039/20.3794) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=19; wikidata:Q721728 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 336 elements); data/traces/castle-of-eger-q721728.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/hungary.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
