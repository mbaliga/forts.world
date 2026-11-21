# Porta Pia

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-pia-q1338582` |
| Coordinates | 41.9093, 12.5013 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.9093/12.5013)) |
| Wikidata | [Q1338582](https://www.wikidata.org/wiki/Q1338582) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|archaeological site |
| Administrative area | Rome |
| Inception | 1565 |
| Wikipedia language editions | 26 |
| OSM `historic` | monument |
| OSM `description` | South-western facade designed by Michelangelo |

## What the model contains

Tier **T1**, status `outline+walls`, 312 elements (outline 1, marker 2, road 206, water 6, building 62, wall 18, zone 10, retaining-wall 7).

Evidence: documented 0, mapped 312, inferred 0, derived 0; heights documented 28, inferred 0, unknown 59.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2739193 historic=monument Q1338582 11 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.9093/12.5013) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|archaeological site; sitelinks=26; wikidata:Q1338582 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 312 elements); data/traces/porta-pia-q1338582.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
