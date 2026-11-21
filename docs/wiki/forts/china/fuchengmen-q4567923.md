# Fuchengmen

> China · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fuchengmen-q4567923` |
| Coordinates | 39.92222, 116.35 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.92222/116.35)) |
| Wikidata | [Q4567923](https://www.wikidata.org/wiki/Q4567923) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Wikipedia language editions | 8 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 70 elements (outline 1, road 21, building 43, waterway 1, wall 4).

Evidence: documented 0, mapped 70, inferred 0, derived 0; heights documented 41, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/606113402 historic=yes 726 m from ledger point
- origin moved 726 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.92222/116.35) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=8; wikidata:Q4567923 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 70 elements); data/traces/fuchengmen-q4567923.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
