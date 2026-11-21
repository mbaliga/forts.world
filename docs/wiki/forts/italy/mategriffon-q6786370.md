# Mategriffon

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mategriffon-q6786370` |
| Coordinates | 38.19619, 15.55197 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.19619/15.55197)) |
| Wikidata | [Q6786370](https://www.wikidata.org/wiki/Q6786370) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortification\|prison |
| Administrative area | Messina |
| Inception | 1061 |
| Designations | Italian national heritage |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 162 elements (outline 1, road 57, building 92, waterway 1, wall 5, retaining-wall 6).

Evidence: documented 0, mapped 162, inferred 0, derived 0; heights documented 2, inferred 0, unknown 101.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/166197360 historic=castle 3 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.19619/15.55197) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortification\|prison; sitelinks=5; wikidata:Q6786370 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 162 elements); data/traces/mategriffon-q6786370.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
