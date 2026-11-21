# Imperial Palace Ingelheim

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `imperial-palace-ingelheim-q1662969` |
| Coordinates | 49.9775, 8.0715 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.9775/8.0715)) |
| Wikidata | [Q1662969](https://www.wikidata.org/wiki/Q1662969) (CC0) |
| Wikidata class | castle |
| Types | palace\|castle\|museum |
| Administrative area | Ingelheim am Rhein |
| Designations | cultural heritage monument in Rhineland-Palatinate |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Kaiserpfalz |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 284 elements (outline 1, marker 14, road 113, building 357, wall 29, waterway 2, zone 5).

Evidence: documented 0, mapped 284, inferred 0, derived 0; heights documented 71, inferred 0, unknown 78.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/128491139 historic=castle Q1662969 8 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 357 mapped (trace size budget); the rest of the town is not drawn
- origin moved 10 m from the ledger point to the outline centroid
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.9775/8.0715) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; palace\|castle\|museum; sitelinks=8; wikidata:Q1662969 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 284 elements); data/traces/imperial-palace-ingelheim-q1662969.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
