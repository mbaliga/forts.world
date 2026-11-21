# Zandpoort

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zandpoort-q108156891` |
| Coordinates | 51.17713, 4.83007 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.17713/4.83007)) |
| Wikidata | [Q108156891](https://www.wikidata.org/wiki/Q108156891) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Herentals |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 4 |
| OSM `description` | Neoclassicistisch dubbelhuis |

## What the model contains

Tier **T1**, status `outline+walls`, 355 elements (outline 1, road 97, building 255, zone 1, wall 1).

Evidence: documented 0, mapped 355, inferred 0, derived 0; heights documented 2, inferred 0, unknown 254.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/175806448 historic=castle 604 m from ledger point
- origin moved 604 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.17713/4.83007) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q108156891 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 355 elements); data/traces/zandpoort-q108156891.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
