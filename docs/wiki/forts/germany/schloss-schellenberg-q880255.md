# Schloss Schellenberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-schellenberg-q880255` |
| Coordinates | 51.42207, 7.05024 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.42207/7.05024)) |
| Wikidata | [Q880255](https://www.wikidata.org/wiki/Q880255) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Essen |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 8 |
| OSM `website` | http://www.schloss-schellenberg.de/ |

## What the model contains

Tier **T1**, status `outline-only`, 102 elements (outline 1, road 46, zone 2, waterway 3, building 50).

Evidence: documented 0, mapped 102, inferred 0, derived 0; heights documented 3, inferred 0, unknown 47.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/55976566 historic=castle Q880255 24 m from ledger point
- origin moved 24 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.42207/7.05024) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q880255 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 102 elements); data/traces/schloss-schellenberg-q880255.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
