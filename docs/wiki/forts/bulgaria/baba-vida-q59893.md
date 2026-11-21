# Baba Vida

> Bulgaria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `baba-vida-q59893` |
| Coordinates | 43.99318, 22.88682 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.99318/22.88682)) |
| Wikidata | [Q59893](https://www.wikidata.org/wiki/Q59893) (CC0) |
| Wikidata class | fort |
| Types | museum\|fortress |
| Administrative area | Vidin |
| Wikipedia language editions | 28 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 74 elements (outline 1, road 44, building 20, wall 6, zone 2, waterway 1).

Evidence: documented 0, mapped 74, inferred 0, derived 0; heights documented 13, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1250432 historic=castle Q59893 32 m from ledger point
- origin moved 30 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.99318/22.88682) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; museum\|fortress; sitelinks=28; wikidata:Q59893 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 74 elements); data/traces/baba-vida-q59893.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bulgaria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
