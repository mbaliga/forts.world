# Barony Rosendal

> Norway · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `barony-rosendal-q808714` |
| Coordinates | 59.98965, 6.02898 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.98965/6.02898)) |
| Wikidata | [Q808714](https://www.wikidata.org/wiki/Q808714) (CC0) |
| Wikidata class | castle |
| Types | castle\|nonprofit organization\|estate\|cultural property\|manor house |
| Administrative area | Kvinnherad Municipality |
| Inception | 2007 |
| Designations | cultural heritage preservation in Norway |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `website` | https://baroniet.no/ |

## What the model contains

Tier **T1**, status `outline+walls`, 121 elements (outline 1, road 90, waterway 3, wall 1, building 26).

Evidence: documented 0, mapped 121, inferred 0, derived 0; heights documented 0, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/467622385 historic=castle Q808714 4 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.98965/6.02898) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|nonprofit organization\|estate\|cultural property\|manor house; sitelinks=9; wikidata:Q808714 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 121 elements); data/traces/barony-rosendal-q808714.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
