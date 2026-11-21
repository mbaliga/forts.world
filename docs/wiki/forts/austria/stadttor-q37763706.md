# Stadttor

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadttor-q37763706` |
| Coordinates | 48.21084, 13.48807 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.21084/13.48807)) |
| Wikidata | [Q37763706](https://www.wikidata.org/wiki/Q37763706) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 249 elements (outline 1, marker 3, road 124, building 331, waterway 1).

Evidence: documented 0, mapped 249, inferred 0, derived 0; heights documented 30, inferred 0, unknown 90.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/29754022 historic=yes 147 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 331 mapped (trace size budget); the rest of the town is not drawn
- origin moved 149 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.21084/13.48807) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q37763706 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 249 elements); data/traces/stadttor-q37763706.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
