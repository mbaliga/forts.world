# Floors Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `floors-castle-q11838960` |
| Coordinates | 55.60478, -2.4601 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.60478/-2.4601)) |
| Wikidata | [Q11838960](https://www.wikidata.org/wiki/Q11838960) (CC0) |
| Wikidata class | castle |
| Types | castle\|country house |
| Administrative area | Scottish Borders |
| Designations | category A listed building |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://www.floorscastle.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 39 elements (outline 1, road 22, building 4, water 1, zone 2, wall 9).

Evidence: documented 0, mapped 39, inferred 0, derived 0; heights documented 0, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/103144682 historic=castle Q11838960 21 m from ledger point
- origin moved 21 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.60478/-2.4601) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|country house; sitelinks=11; wikidata:Q11838960 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 39 elements); data/traces/floors-castle-q11838960.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
