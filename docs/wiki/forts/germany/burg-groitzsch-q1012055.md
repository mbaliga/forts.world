# Burg Groitzsch

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-groitzsch-q1012055` |
| Coordinates | 51.1596, 12.275 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.1596/12.275)) |
| Wikidata | [Q1012055](https://www.wikidata.org/wiki/Q1012055) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Groitzsch |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `description` | Turm der ehemaligen Stadtkirche "St. Ägidien" Groitzsch |

## What the model contains

Tier **T1**, status `outline+walls`, 196 elements (outline 1, road 71, building 541, zone 1, waterway 2, wall 1).

Evidence: documented 0, mapped 196, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/335056432 historic=yes Q49595752 351 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 541 mapped (trace size budget); the rest of the town is not drawn
- origin moved 352 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.1596/12.275) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q1012055 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 196 elements); data/traces/burg-groitzsch-q1012055.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
