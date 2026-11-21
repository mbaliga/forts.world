# Stadtpalais Liechtenstein

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtpalais-liechtenstein-q686580` |
| Coordinates | 48.20977, 16.36269 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.20977/16.36269)) |
| Wikidata | [Q686580](https://www.wikidata.org/wiki/Q686580) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|art museum\|residential building |
| Administrative area | Innere Stadt |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 298 elements (outline 1, marker 14, road 355, building 29, zone 95, water 2, wall 1, retaining-wall 6).

Evidence: documented 0, mapped 298, inferred 0, derived 0; heights documented 20, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/150055 historic=castle Q686580 13 m from ledger point
- roads capped: kept the 150 longest of 355 mapped (trace size budget); minor lanes are not drawn
- origin moved 16 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.20977/16.36269) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|art museum\|residential building; sitelinks=11; wikidata:Q686580 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 298 elements); data/traces/stadtpalais-liechtenstein-q686580.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
