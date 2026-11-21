# Jemniště Chateau

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jemniste-chateau-q2241754` |
| Coordinates | 49.74392, 14.78507 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.74392/14.78507)) |
| Wikidata | [Q2241754](https://www.wikidata.org/wiki/Q2241754) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Jemniště |
| Inception | 1725 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.jemniste.cz/ |

## What the model contains

Tier **T1**, status `outline+walls`, 61 elements (outline 1, road 35, water 1, waterway 2, building 11, zone 8, wall 3).

Evidence: documented 0, mapped 61, inferred 0, derived 0; heights documented 2, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/788344077 historic=castle Q2241754 4 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.74392/14.78507) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=5; wikidata:Q2241754 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 61 elements); data/traces/jemniste-chateau-q2241754.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
