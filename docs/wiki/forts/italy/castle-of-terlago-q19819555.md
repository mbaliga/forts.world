# Castle of Terlago

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-terlago-q19819555` |
| Coordinates | 46.09986, 11.04449 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.09986/11.04449)) |
| Wikidata | [Q19819555](https://www.wikidata.org/wiki/Q19819555) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Vallelaghi |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 324 elements (outline 1, marker 2, road 84, building 134, wall 83, zone 167, waterway 9, retaining-wall 33, water 3).

Evidence: documented 0, mapped 324, inferred 0, derived 0; heights documented 0, inferred 0, unknown 143.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/85383567 historic=castle Q19819555 16 m from ledger point
- pruned to the outline plus 150 m: 516 -> 363 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 99 mapped (trace size budget); the rest of the town is not drawn
- origin moved 16 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.09986/11.04449) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q19819555 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 324 elements); data/traces/castle-of-terlago-q19819555.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
