# De La Fratta

> San Marino · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `de-la-fratta-q2592701` |
| Coordinates | 43.93263, 12.45138 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.93263/12.45138)) |
| Wikidata | [Q2592701](https://www.wikidata.org/wiki/Q2592701) (CC0) |
| Wikidata class | castle |
| Types | castle\|tower\|history museum |
| Administrative area | San Marino |
| Inception | 1253 |
| Wikipedia language editions | 17 |
| OSM `historic` | castle |
| OSM `description` | Seconda Torre |

## What the model contains

Tier **T1**, status `outline+walls`, 145 elements (outline 1, marker 2, road 80, wall 6, zone 11, building 36, cliff 6, retaining-wall 3).

Evidence: documented 0, mapped 145, inferred 0, derived 0; heights documented 2, inferred 0, unknown 43.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/59329686 historic=castle Q2592701 2 m from ledger point
- origin moved 1 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.93263/12.45138) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|tower\|history museum; sitelinks=17; wikidata:Q2592701 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 145 elements); data/traces/de-la-fratta-q2592701.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/san-marino.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
