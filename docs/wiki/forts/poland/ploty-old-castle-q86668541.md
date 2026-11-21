# Ploty Old Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ploty-old-castle-q86668541` |
| Coordinates | 53.80071, 15.26604 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.80071/15.26604)) |
| Wikidata | [Q86668541](https://www.wikidata.org/wiki/Q86668541) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Płoty |
| Inception | 1280 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline-only`, 255 elements (outline 1, road 89, waterway 8, zone 7, building 146, water 4).

Evidence: documented 0, mapped 255, inferred 0, derived 0; heights documented 145, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/382013301 historic=castle Q86668541 3 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.80071/15.26604) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q86668541 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 255 elements); data/traces/ploty-old-castle-q86668541.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
