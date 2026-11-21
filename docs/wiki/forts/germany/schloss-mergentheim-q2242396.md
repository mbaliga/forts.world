# Schloss Mergentheim

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-mergentheim-q2242396` |
| Coordinates | 49.49117, 9.77604 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.49117/9.77604)) |
| Wikidata | [Q2242396](https://www.wikidata.org/wiki/Q2242396) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Bad Mergentheim |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `website` | https://www.schloss-mergentheim.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 282 elements (outline 1, marker 11, road 136, building 266, wall 2, zone 11, waterway 1).

Evidence: documented 0, mapped 282, inferred 0, derived 0; heights documented 3, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/32929799 historic=castle Q2242396 19 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 266 mapped (trace size budget); the rest of the town is not drawn
- origin moved 18 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.49117/9.77604) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=5; wikidata:Q2242396 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 282 elements); data/traces/schloss-mergentheim-q2242396.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
