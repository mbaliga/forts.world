# Cherven

> Bulgaria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cherven-q3366992` |
| Coordinates | 43.62073, 26.01764 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.62073/26.01764)) |
| Wikidata | [Q3366992](https://www.wikidata.org/wiki/Q3366992) (CC0) |
| Wikidata class | fort |
| Types | museum\|fortress |
| Administrative area | Cherven |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 80 elements (outline 1, road 16, zone 6, wall 42, waterway 2, cliff 10, building 3).

Evidence: documented 0, mapped 80, inferred 0, derived 0; heights documented 0, inferred 0, unknown 45.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/441829808 historic=castle 348 m from ledger point
- origin moved 350 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.62073/26.01764) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; museum\|fortress; sitelinks=6; wikidata:Q3366992 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 80 elements); data/traces/cherven-q3366992.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bulgaria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
