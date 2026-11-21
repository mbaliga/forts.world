# Krujë Fortress

> Albania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kruje-fortress-q1409023` |
| Coordinates | 41.507, 19.79411 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.507/19.79411)) |
| Wikidata | [Q1409023](https://www.wikidata.org/wiki/Q1409023) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Krujë |
| Wikipedia language editions | 20 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 298 elements (outline 1, marker 4, road 102, building 154, wall 36, zone 1).

Evidence: documented 0, mapped 298, inferred 0, derived 0; heights documented 2, inferred 0, unknown 188.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/226764501 historic=castle 5 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- 23 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.507/19.79411) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=20; wikidata:Q1409023 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 298 elements); data/traces/kruje-fortress-q1409023.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/albania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
