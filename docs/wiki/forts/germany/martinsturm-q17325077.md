# Martinsturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `martinsturm-q17325077` |
| Coordinates | 51.7882, 11.14623 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.7882/11.14623)) |
| Wikidata | [Q17325077](https://www.wikidata.org/wiki/Q17325077) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Quedlinburg |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 263 elements (outline 1, marker 5, road 94, waterway 6, building 513, wall 37).

Evidence: documented 0, mapped 263, inferred 0, derived 0; heights documented 5, inferred 0, unknown 152.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/354124628 historic=yes Q17325077 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 513 mapped (trace size budget); the rest of the town is not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.7882/11.14623) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q17325077 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 263 elements); data/traces/martinsturm-q17325077.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
