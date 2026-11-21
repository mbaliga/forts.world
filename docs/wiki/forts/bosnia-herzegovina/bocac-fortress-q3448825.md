# Bočac Fortress

> Bosnia & Herzegovina · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bocac-fortress-q3448825` |
| Coordinates | 44.5078, 17.1583 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.5078/17.1583)) |
| Wikidata | [Q3448825](https://www.wikidata.org/wiki/Q3448825) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Dabrac |
| Designations | National Monuments of Bosnia and Herzegovina |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 59 elements (outline 1, road 11, zone 6, water 4, cliff 7, waterway 25, building 4, wall 1).

Evidence: documented 0, mapped 59, inferred 0, derived 0; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/745610641 historic=castle 131 m from ledger point
- origin moved 131 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.5078/17.1583) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=9; wikidata:Q3448825 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 59 elements); data/traces/bocac-fortress-q3448825.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bosnia-herzegovina.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
