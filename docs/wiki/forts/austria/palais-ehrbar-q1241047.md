# Palais Ehrbar

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-ehrbar-q1241047` |
| Coordinates | 48.19699, 16.36283 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.19699/16.36283)) |
| Wikidata | [Q1241047](https://www.wikidata.org/wiki/Q1241047) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|conservatory\|concert hall\|residential building |
| Administrative area | Vienna |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 296 elements (outline 1, marker 5, road 271, building 168, wall 2, waterway 1, retaining-wall 5, zone 12).

Evidence: documented 0, mapped 296, inferred 0, derived 0; heights documented 85, inferred 0, unknown 42.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/122318565 historic=castle Q1241047 0 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 168 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 271 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.19699/16.36283) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|conservatory\|concert hall\|residential building; sitelinks=2; wikidata:Q1241047 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 296 elements); data/traces/palais-ehrbar-q1241047.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
