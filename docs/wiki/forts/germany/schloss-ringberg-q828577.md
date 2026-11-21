# Schloss Ringberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-ringberg-q828577` |
| Coordinates | 47.67914, 11.74966 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.67914/11.74966)) |
| Wikidata | [Q828577](https://www.wikidata.org/wiki/Q828577) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|building |
| Administrative area | Kreuth |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.schloss-ringberg.de/start |

## What the model contains

Tier **T1**, status `outline+walls`, 74 elements (outline 1, road 48, wall 3, building 15, zone 1, waterway 6).

Evidence: documented 0, mapped 74, inferred 0, derived 0; heights documented 8, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/633124607 historic=castle Q828577 18 m from ledger point
- origin moved 18 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.67914/11.74966) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|building; sitelinks=6; wikidata:Q828577 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 74 elements); data/traces/schloss-ringberg-q828577.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
