# Tour Montjoie

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-montjoie-q22923361` |
| Coordinates | 48.99183, 2.09222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.99183/2.09222)) |
| Wikidata | [Q22923361](https://www.wikidata.org/wiki/Q22923361) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Conflans-Sainte-Honorine |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 236 elements (outline 1, marker 3, road 104, building 476, waterway 1, zone 3, wall 3, retaining-wall 1).

Evidence: documented 0, mapped 236, inferred 0, derived 0; heights documented 5, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/827513523 historic=ruins 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 476 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.99183/2.09222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q22923361 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 236 elements); data/traces/tour-montjoie-q22923361.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
