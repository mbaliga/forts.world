# Matsumae Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `matsumae-castle-q1143974` |
| Coordinates | 41.42983, 140.10839 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.42983/140.10839)) |
| Wikidata | [Q1143974](https://www.wikidata.org/wiki/Q1143974) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Matsumae |
| Inception | 1606 |
| Designations | Hokkaido Heritage\|part of Historic Site of Japan\|Important Cultural Property of Japan |
| Wikipedia language editions | 16 |
| OSM `historic` | castle |
| OSM `castle_type` | shiro |

## What the model contains

Tier **T1**, status `outline+walls`, 255 elements (outline 1, marker 8, road 62, waterway 2, coastline 1, building 149, retaining-wall 25, wall 5, zone 1, water 1).

Evidence: documented 0, mapped 255, inferred 0, derived 0; heights documented 0, inferred 0, unknown 179.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/488836870 historic=castle Q1143974 4 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.42983/140.10839) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=16; wikidata:Q1143974 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 255 elements); data/traces/matsumae-castle-q1143974.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
