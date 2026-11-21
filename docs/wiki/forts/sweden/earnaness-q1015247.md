# Earnaness

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `earnaness-q1015247` |
| Coordinates | 58.67444, 13.5875 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.67444/13.5875)) |
| Wikidata | [Q1015247](https://www.wikidata.org/wiki/Q1015247) (CC0) |
| Wikidata class | castle |
| Types | castle\|building |
| Administrative area | Götene Municipality |
| Designations | monument in Fornminnesregistret |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 24 elements (outline 1, road 12, building 5, zone 3, water 1, wall 2).

Evidence: documented 0, mapped 24, inferred 0, derived 0; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/15670834 historic=castle Q1015247 62 m from ledger point
- origin moved 62 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.67444/13.5875) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|building; sitelinks=4; wikidata:Q1015247 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 24 elements); data/traces/earnaness-q1015247.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
