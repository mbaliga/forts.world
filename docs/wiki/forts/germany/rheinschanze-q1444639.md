# Rheinschanze

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rheinschanze-q1444639` |
| Coordinates | 50.3719, 7.6025 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.3719/7.6025)) |
| Wikidata | [Q1444639](https://www.wikidata.org/wiki/Q1444639) (CC0) |
| Wikidata class | fortification |
| Types | sconce |
| Administrative area | Rhineland-Palatinate |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | yes |
| OSM `description` | Gehört zur Neuendorfer Flesche. |

## What the model contains

Tier **T1**, status `outline-only`, 226 elements (outline 1, road 97, zone 71, building 56, waterway 1).

Evidence: documented 0, mapped 226, inferred 0, derived 0; heights documented 3, inferred 0, unknown 53.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1003833175 historic=castle 466 m from ledger point
- origin moved 468 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.3719/7.6025) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; sconce; sitelinks=1; wikidata:Q1444639 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 226 elements); data/traces/rheinschanze-q1444639.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
