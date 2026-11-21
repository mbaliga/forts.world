# Saint-André Gate

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `saint-andre-gate-q1739273` |
| Coordinates | 46.95775, 4.30603 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.95775/4.30603)) |
| Wikidata | [Q1739273](https://www.wikidata.org/wiki/Q1739273) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Autun |
| Designations | classified historical monument |
| Wikipedia language editions | 4 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 210 elements (outline 1, marker 2, road 62, building 505, wall 25).

Evidence: documented 0, mapped 210, inferred 0, derived 0; heights documented 0, inferred 0, unknown 145.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/124226579 historic=yes 476 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 505 mapped (trace size budget); the rest of the town is not drawn
- origin moved 476 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.95775/4.30603) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=4; wikidata:Q1739273 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 210 elements); data/traces/saint-andre-gate-q1739273.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
