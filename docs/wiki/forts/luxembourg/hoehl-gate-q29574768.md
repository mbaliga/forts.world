# Hoehl Gate

> Luxembourg · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hoehl-gate-q29574768` |
| Coordinates | 49.61595, 6.13603 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.61595/6.13603)) |
| Wikidata | [Q29574768](https://www.wikidata.org/wiki/Q29574768) (CC0) |
| Wikidata class | fortification |
| Types | gate tower |
| Administrative area | Luxembourg |
| Inception | 1685 |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 264 elements (outline 1, marker 2, building 56, road 112, wall 37, retaining-wall 19, cliff 26, water 1, zone 7, waterway 3).

Evidence: documented 0, mapped 264, inferred 0, derived 0; heights documented 9, inferred 0, unknown 103.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/547913359 historic=citywalls 72 m from ledger point
- origin moved 72 m from the ledger point to the outline centroid
- 23 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.61595/6.13603) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate tower; sitelinks=2; wikidata:Q29574768 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 264 elements); data/traces/hoehl-gate-q29574768.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/luxembourg.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
