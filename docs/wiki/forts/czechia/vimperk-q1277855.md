# Vimperk

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vimperk-q1277855` |
| Coordinates | 49.0545, 13.77158 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.0545/13.77158)) |
| Wikidata | [Q1277855](https://www.wikidata.org/wiki/Q1277855) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Vimperk II |
| Inception | 1260 |
| Designations | national cultural monument of the Czech Republic |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `website` | https://www.zamek-vimperk.eu/ |

## What the model contains

Tier **T1**, status `outline+walls`, 364 elements (outline 1, marker 1, road 119, building 182, waterway 6, wall 24, retaining-wall 16, zone 15).

Evidence: documented 0, mapped 364, inferred 0, derived 0; heights documented 71, inferred 0, unknown 151.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2699683 historic=castle Q1277855 15 m from ledger point
- origin moved 15 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.0545/13.77158) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=7; wikidata:Q1277855 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 364 elements); data/traces/vimperk-q1277855.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
