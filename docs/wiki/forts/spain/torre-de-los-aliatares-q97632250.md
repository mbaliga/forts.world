# Torre de los Aliatares

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-los-aliatares-q97632250` |
| Coordinates | 37.99302, -3.46818 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.99302/-3.46818)) |
| Wikidata | [Q97632250](https://www.wikidata.org/wiki/Q97632250) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Baeza |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 177 elements (outline 1, marker 28, road 129, building 445, wall 156, waterway 1, zone 3, retaining-wall 3).

Evidence: documented 0, mapped 177, inferred 0, derived 0; heights documented 26, inferred 0, unknown 81.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/110279113 historic=castle Q97632250 8 m from ledger point
- pruned to the outline plus 150 m: 766 -> 316 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 199 mapped (trace size budget); the rest of the town is not drawn
- origin moved 9 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.99302/-3.46818) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q97632250 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 177 elements); data/traces/torre-de-los-aliatares-q97632250.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
