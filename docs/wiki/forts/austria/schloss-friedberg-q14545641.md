# Schloss Friedberg

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-friedberg-q14545641` |
| Coordinates | 47.2797, 11.5628 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.2797/11.5628)) |
| Wikidata | [Q14545641](https://www.wikidata.org/wiki/Q14545641) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Volders |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `website` | https://www.schloss-friedberg.com |

## What the model contains

Tier **T1**, status `outline+walls`, 58 elements (outline 1, road 23, waterway 8, building 10, wall 3, cliff 10, zone 3).

Evidence: documented 0, mapped 58, inferred 0, derived 0; heights documented 2, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/125054284 historic=castle Q14545641 38 m from ledger point
- origin moved 39 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.2797/11.5628) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q14545641 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 58 elements); data/traces/schloss-friedberg-q14545641.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
