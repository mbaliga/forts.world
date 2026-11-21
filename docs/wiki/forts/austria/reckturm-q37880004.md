# Reckturm

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `reckturm-q37880004` |
| Coordinates | 48.72473, 16.38166 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.72473/16.38166)) |
| Wikidata | [Q37880004](https://www.wikidata.org/wiki/Q37880004) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Laa an der Thaya |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 295 elements (outline 1, marker 3, road 49, waterway 2, building 233, wall 5, zone 2).

Evidence: documented 0, mapped 295, inferred 0, derived 0; heights documented 1, inferred 0, unknown 237.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/609990320 historic=castle Q37880004 5 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.72473/16.38166) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q37880004 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 295 elements); data/traces/reckturm-q37880004.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
