# Ujjayanta Palace

> India · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ujjayanta-palace-q3360963` |
| Coordinates | 23.8368, 91.28256 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.8368/91.28256)) |
| Wikidata | [Q3360963](https://www.wikidata.org/wiki/Q3360963) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|building |
| Administrative area | Agartala |
| Inception | 1901 |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline-only`, 235 elements (outline 1, road 99, water 13, building 1160, zone 2).

Evidence: documented 0, mapped 235, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/160915819 historic=castle Q3360963 32 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 1160 mapped (trace size budget); the rest of the town is not drawn
- origin moved 24 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.8368/91.28256) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|building; sitelinks=12; wikidata:Q3360963; South Asia site missing from the programme (no programme row within 2 km sharing a name word) \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 235 elements); data/traces/ujjayanta-palace-q3360963.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
