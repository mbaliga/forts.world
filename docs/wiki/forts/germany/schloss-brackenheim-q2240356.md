# Schloss Brackenheim

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-brackenheim-q2240356` |
| Coordinates | 49.0771, 9.06528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.0771/9.06528)) |
| Wikidata | [Q2240356](https://www.wikidata.org/wiki/Q2240356) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive;stately\|château |
| Administrative area | Brackenheim |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive;stately |

## What the model contains

Tier **T1**, status `outline+walls`, 276 elements (outline 1, marker 2, road 191, building 278, zone 2, wall 1).

Evidence: documented 0, mapped 276, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/95842949 historic=castle Q2240356 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 278 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 191 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.0771/9.06528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive;stately\|château; sitelinks=2; wikidata:Q2240356 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 276 elements); data/traces/schloss-brackenheim-q2240356.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
