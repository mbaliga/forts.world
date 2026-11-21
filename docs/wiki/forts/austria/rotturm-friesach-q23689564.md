# Rotturm, Friesach

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rotturm-friesach-q23689564` |
| Coordinates | 46.94977, 14.40327 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.94977/14.40327)) |
| Wikidata | [Q23689564](https://www.wikidata.org/wiki/Q23689564) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Friesach |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | ga |

## What the model contains

Tier **T1**, status `outline+walls`, 192 elements (outline 1, road 64, waterway 1, building 104, wall 5, zone 2, water 1, cliff 14).

Evidence: documented 0, mapped 192, inferred 0, derived 0; heights documented 1, inferred 0, unknown 108.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/231619243 historic=castle 163 m from ledger point
- origin moved 164 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.94977/14.40327) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=2; wikidata:Q23689564 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 192 elements); data/traces/rotturm-friesach-q23689564.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
