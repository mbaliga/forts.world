# Castle of Ragusa

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-ragusa-q19545308` |
| Coordinates | 36.92583, 14.74093 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.92583/14.74093)) |
| Wikidata | [Q19545308](https://www.wikidata.org/wiki/Q19545308) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Ragusa |
| Wikipedia language editions | 2 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 376 elements (outline 1, marker 1, road 129, waterway 1, building 512, retaining-wall 17, wall 105, cliff 1, zone 1).

Evidence: documented 0, mapped 376, inferred 0, derived 0; heights documented 0, inferred 0, unknown 242.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/202537732 historic=building 20 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 512 mapped (trace size budget); the rest of the town is not drawn
- origin moved 20 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.92583/14.74093) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q19545308 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 376 elements); data/traces/castle-of-ragusa-q19545308.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
