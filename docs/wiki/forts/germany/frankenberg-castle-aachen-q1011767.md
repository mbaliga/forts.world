# Frankenberg Castle (Aachen)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `frankenberg-castle-aachen-q1011767` |
| Coordinates | 50.7678, 6.10389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.7678/6.10389)) |
| Wikidata | [Q1011767](https://www.wikidata.org/wiki/Q1011767) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Aachen-Mitte |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | castle |
| OSM `heritage` | 8 |
| OSM `website` | https://burgfrankenberg.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 393 elements (outline 1, marker 5, road 97, zone 7, building 263, waterway 1, wall 162).

Evidence: documented 0, mapped 393, inferred 0, derived 0; heights documented 78, inferred 0, unknown 204.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/33419227 historic=castle Q1011767 20 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 263 mapped (trace size budget); the rest of the town is not drawn
- origin moved 20 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.7678/6.10389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q1011767 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 393 elements); data/traces/frankenberg-castle-aachen-q1011767.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
