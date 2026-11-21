# Orford Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `orford-castle-q1964047` |
| Coordinates | 52.0942, 1.53073 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.0942/1.53073)) |
| Wikidata | [Q1964047](https://www.wikidata.org/wiki/Q1964047) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site\|historic house museum |
| Administrative area | East Suffolk |
| Inception | 1165 |
| Designations | Grade I listed building |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 185 elements (outline 1, road 71, zone 9, building 98, waterway 2, wall 3, coastline 1).

Evidence: documented 0, mapped 185, inferred 0, derived 0; heights documented 0, inferred 0, unknown 101.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/144168614 historic=castle Q1964047 10 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.0942/1.53073) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site\|historic house museum; sitelinks=13; wikidata:Q1964047 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 185 elements); data/traces/orford-castle-q1964047.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
