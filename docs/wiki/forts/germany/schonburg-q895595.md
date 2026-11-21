# Schönburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schonburg-q895595` |
| Coordinates | 50.1012, 7.73222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.1012/7.73222)) |
| Wikidata | [Q895595](https://www.wikidata.org/wiki/Q895595) (CC0) |
| Wikidata class | ruin |
| Types | castle\|castle ruin |
| Administrative area | Oberwesel |
| Inception | 1100 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 193 elements (outline 1, road 74, waterway 4, building 97, zone 2, wall 9, cliff 4, retaining-wall 2).

Evidence: documented 0, mapped 193, inferred 0, derived 0; heights documented 0, inferred 0, unknown 108.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/85388188 historic=castle Q895595 24 m from ledger point
- origin moved 23 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.1012/7.73222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|castle ruin; sitelinks=9; wikidata:Q895595 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 193 elements); data/traces/schonburg-q895595.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
