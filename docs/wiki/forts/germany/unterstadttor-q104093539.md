# Unterstadttor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `unterstadttor-q104093539` |
| Coordinates | 47.69353, 9.26935 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.69353/9.26935)) |
| Wikidata | [Q104093539](https://www.wikidata.org/wiki/Q104093539) (CC0) |
| Wikidata class | fortification |
| Types | gate tower |
| Administrative area | Meersburg |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 4 |
| OSM `description` | Schloßmuseum |
| OSM `website` | https://www.burg-meersburg.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 317 elements (outline 1, marker 6, road 204, building 246, retaining-wall 26, wall 11, zone 2, water 1).

Evidence: documented 0, mapped 317, inferred 0, derived 0; heights documented 16, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/696326051 historic=castle Q552305 106 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 246 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 204 mapped (trace size budget); minor lanes are not drawn
- origin moved 105 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.69353/9.26935) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate tower; sitelinks=1; wikidata:Q104093539 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 317 elements); data/traces/unterstadttor-q104093539.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
