# Taesong Fortress

> North Korea · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `taesong-fortress-q6833652` |
| Coordinates | 39.0798, 125.8369 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.0798/125.8369)) |
| Wikidata | [Q6833652](https://www.wikidata.org/wiki/Q6833652) (CC0) |
| Wikidata class | fort |
| Types | fortress\|cultural heritage\|national treasure |
| Administrative area | Pyongyang |
| Designations | National Treasures of North Korea |
| Wikipedia language editions | 6 |
| OSM `historic` | citywalls |
| OSM `description` | 국가지정문화재국보급 제8호 |

## What the model contains

Tier **T1**, status `outline+walls`, 83 elements (outline 1, road 28, water 8, wall 1, building 24, waterway 4, zone 17).

Evidence: documented 0, mapped 83, inferred 0, derived 0; heights documented 0, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5979512 historic=citywalls Q6833652 155 m from ledger point
- origin moved 177 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.0798/125.8369) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|cultural heritage\|national treasure; sitelinks=6; wikidata:Q6833652 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 83 elements); data/traces/taesong-fortress-q6833652.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/north-korea.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
