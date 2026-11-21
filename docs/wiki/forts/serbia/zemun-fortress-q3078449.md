# Zemun Fortress

> Serbia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zemun-fortress-q3078449` |
| Coordinates | 44.8483, 20.4097 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.8483/20.4097)) |
| Wikidata | [Q3078449](https://www.wikidata.org/wiki/Q3078449) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Zemun |
| Designations | Monument of Culture |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 251 elements (outline 1, marker 5, water 1, road 116, zone 4, waterway 1, building 390, wall 3).

Evidence: documented 0, mapped 251, inferred 0, derived 0; heights documented 18, inferred 0, unknown 105.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/709316521 historic=castle Q3078449 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 390 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.8483/20.4097) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q3078449 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 251 elements); data/traces/zemun-fortress-q3078449.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/serbia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
