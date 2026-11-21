# Derenburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `derenburg-q1200145` |
| Coordinates | 51.87476, 10.91498 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.87476/10.91498)) |
| Wikidata | [Q1200145](https://www.wikidata.org/wiki/Q1200145) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Blankenburg |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 190 elements (outline 1, marker 1, road 58, waterway 1, zone 5, building 119, water 2, wall 3).

Evidence: documented 0, mapped 190, inferred 0, derived 0; heights documented 1, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/121129455 historic=castle 416 m from ledger point
- origin moved 418 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.87476/10.91498) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q1200145 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 190 elements); data/traces/derenburg-q1200145.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
