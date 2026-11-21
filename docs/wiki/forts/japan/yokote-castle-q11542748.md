# Yokote Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `yokote-castle-q11542748` |
| Coordinates | 39.32105, 140.56931 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.32105/140.56931)) |
| Wikidata | [Q11542748](https://www.wikidata.org/wiki/Q11542748) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Yokote |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | shiro |
| OSM `website` | https://www.city.yokote.lg.jp/kanko/1004048/1004531.html |

## What the model contains

Tier **T1**, status `outline+walls`, 240 elements (outline 1, marker 22, waterway 2, road 98, water 3, zone 14, building 95, retaining-wall 1, wall 4).

Evidence: documented 0, mapped 240, inferred 0, derived 0; heights documented 16, inferred 0, unknown 84.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/796370106 historic=castle Q11542748 5 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.32105/140.56931) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=5; wikidata:Q11542748 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 240 elements); data/traces/yokote-castle-q11542748.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
