# Leicester Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `leicester-castle-q6519156` |
| Coordinates | 52.6323, -1.14119 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.6323/-1.14119)) |
| Wikidata | [Q6519156](https://www.wikidata.org/wiki/Q6519156) (CC0) |
| Wikidata class | castle |
| Types | motte-and-bailey castle\|archaeological site |
| Administrative area | City of Leicester |
| Inception | 1060 |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 315 elements (outline 1, marker 13, road 296, waterway 3, building 145, water 1, wall 5, zone 18, retaining-wall 4).

Evidence: documented 0, mapped 315, inferred 0, derived 0; heights documented 9, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1065559054 historic=castle 89 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 145 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 296 mapped (trace size budget); minor lanes are not drawn
- origin moved 92 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.6323/-1.14119) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; motte-and-bailey castle\|archaeological site; sitelinks=10; wikidata:Q6519156 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 315 elements); data/traces/leicester-castle-q6519156.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
