# Rotes Schloss Jagsthausen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rotes-schloss-jagsthausen-q15843086` |
| Coordinates | 49.31092, 9.46918 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.31092/9.46918)) |
| Wikidata | [Q15843086](https://www.wikidata.org/wiki/Q15843086) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|restaurant\|château\|built structure |
| Administrative area | Jagsthausen |
| Inception | 1590 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 337 elements (outline 1, marker 1, road 192, building 273, zone 43, wall 17, waterway 4, water 1).

Evidence: documented 0, mapped 337, inferred 0, derived 0; heights documented 33, inferred 0, unknown 104.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/63637609 historic=castle Q15843086 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 273 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 192 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.31092/9.46918) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|restaurant\|château\|built structure; sitelinks=2; wikidata:Q15843086 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 337 elements); data/traces/rotes-schloss-jagsthausen-q15843086.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
