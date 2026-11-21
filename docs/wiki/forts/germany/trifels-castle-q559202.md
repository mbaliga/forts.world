# Trifels Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `trifels-castle-q559202` |
| Coordinates | 49.19611, 7.97889 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.19611/7.97889)) |
| Wikidata | [Q559202](https://www.wikidata.org/wiki/Q559202) (CC0) |
| Wikidata class | castle |
| Types | rock castle |
| Administrative area | Annweiler am Trifels |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | castle |
| OSM `ruins` | no |
| OSM `website` | https://www.burgenlandschaft-pfalz.de/de/reichsburg-trifels |

## What the model contains

Tier **T1**, status `outline+walls`, 77 elements (outline 1, marker 5, road 43, wall 10, building 10, zone 4, cliff 4).

Evidence: documented 0, mapped 77, inferred 0, derived 0; heights documented 1, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/314076805 historic=castle Q559202 49 m from ledger point
- origin moved 48 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.19611/7.97889) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; rock castle; sitelinks=12; wikidata:Q559202 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 77 elements); data/traces/trifels-castle-q559202.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
