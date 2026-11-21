# Burg Egeln

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-egeln-q1684330` |
| Coordinates | 51.944, 11.4376 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.944/11.4376)) |
| Wikidata | [Q1684330](https://www.wikidata.org/wiki/Q1684330) (CC0) |
| Wikidata class | castle |
| Types | water castle |
| Administrative area | Egeln |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | Anlage aus dem Jahr 941. |
| OSM `website` | http://www.burg-egeln.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 302 elements (outline 1, marker 1, road 81, zone 10, waterway 14, water 1, building 364, wall 74).

Evidence: documented 0, mapped 302, inferred 0, derived 0; heights documented 0, inferred 0, unknown 194.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/208238002 historic=castle Q1684330 17 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 364 mapped (trace size budget); the rest of the town is not drawn
- origin moved 13 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.944/11.4376) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; water castle; sitelinks=2; wikidata:Q1684330 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 302 elements); data/traces/burg-egeln-q1684330.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
