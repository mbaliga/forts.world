# Vischering Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vischering-castle-q449031` |
| Coordinates | 51.7761, 7.44306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.7761/7.44306)) |
| Wikidata | [Q449031](https://www.wikidata.org/wiki/Q449031) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Lüdinghausen |
| Inception | 1271 |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 14 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://burg-vischering.de/en/home-castle-vischering/ |

## What the model contains

Tier **T1**, status `outline+walls`, 149 elements (outline 1, marker 1, road 98, waterway 15, water 4, building 20, zone 9, wall 1).

Evidence: documented 0, mapped 149, inferred 0, derived 0; heights documented 9, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/25923960 historic=castle Q449031 12 m from ledger point
- origin moved 11 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.7761/7.44306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=14; wikidata:Q449031 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 149 elements); data/traces/vischering-castle-q449031.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
