# Grandmaster's Palace

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `grandmaster-s-palace-q1368885` |
| Coordinates | 35.8986, 14.51411 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.8986/14.51411)) |
| Wikidata | [Q1368885](https://www.wikidata.org/wiki/Q1368885) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Valletta |
| Wikipedia language editions | 27 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://www.heritagemalta.org/ |

## What the model contains

Tier **T1**, status `outline+walls`, 213 elements (outline 1, marker 13, road 87, building 107, coastline 2, water 1, wall 2).

Evidence: documented 0, mapped 213, inferred 0, derived 0; heights documented 8, inferred 0, unknown 101.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4434917 historic=castle Q1368885 21 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 34 m from the ledger point to the outline centroid
- 20 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.8986/14.51411) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=27; wikidata:Q1368885 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 213 elements); data/traces/grandmaster-s-palace-q1368885.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
