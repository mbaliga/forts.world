# Schloss Elgersburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-elgersburg-q25473790` |
| Coordinates | 50.70374, 10.85194 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.70374/10.85194)) |
| Wikidata | [Q25473790](https://www.wikidata.org/wiki/Q25473790) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Elgersburg |
| Designations | Heritage monument in Thuringia |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 237 elements (outline 1, marker 4, road 99, building 319, zone 7, retaining-wall 4, wall 1, water 1).

Evidence: documented 0, mapped 237, inferred 0, derived 0; heights documented 6, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1088732350 historic=castle Q25473790 26 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 319 mapped (trace size budget); the rest of the town is not drawn
- origin moved 25 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.70374/10.85194) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q25473790 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 237 elements); data/traces/schloss-elgersburg-q25473790.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
