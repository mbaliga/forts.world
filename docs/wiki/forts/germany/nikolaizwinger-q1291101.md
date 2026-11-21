# Nikolaizwinger

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nikolaizwinger-q1291101` |
| Coordinates | 51.15878, 14.98988 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.15878/14.98988)) |
| Wikidata | [Q1291101](https://www.wikidata.org/wiki/Q1291101) (CC0) |
| Wikidata class | fortification |
| Types | park\|city walls |
| Administrative area | Görlitz |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 314 elements (outline 1, marker 5, road 145, building 254, zone 2, water 3, wall 26, waterway 7, retaining-wall 5).

Evidence: documented 0, mapped 314, inferred 0, derived 0; heights documented 75, inferred 0, unknown 76.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/72296568 historic=citywalls Q1562231 175 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 254 mapped (trace size budget); the rest of the town is not drawn
- origin moved 175 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.15878/14.98988) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; park\|city walls; sitelinks=3; wikidata:Q1291101 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 314 elements); data/traces/nikolaizwinger-q1291101.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
