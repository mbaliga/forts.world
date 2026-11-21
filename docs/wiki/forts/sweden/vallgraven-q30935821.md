# Vallgraven

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vallgraven-q30935821` |
| Coordinates | 57.70268, 11.96948 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.70268/11.96948)) |
| Wikidata | [Q30935821](https://www.wikidata.org/wiki/Q30935821) (CC0) |
| Wikidata class | fortification |
| Types | moat |
| Administrative area | Gothenburg Municipality |
| Wikipedia language editions | 3 |
| OSM `historic` | building |
| OSM `website` | https://kronhuset.se/ |

## What the model contains

Tier **T1**, status `outline+walls`, 166 elements (outline 1, marker 1, road 86, building 72, wall 3, waterway 2, retaining-wall 1).

Evidence: documented 0, mapped 166, inferred 0, derived 0; heights documented 20, inferred 0, unknown 56.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/44697495 historic=building Q4572534 675 m from ledger point
- origin moved 672 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.70268/11.96948) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; moat; sitelinks=3; wikidata:Q30935821 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 166 elements); data/traces/vallgraven-q30935821.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
