# Jinjira Palace

> Bangladesh · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jinjira-palace-q13057978` |
| Coordinates | 23.70485, 90.39354 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.70485/90.39354)) |
| Wikidata | [Q13057978](https://www.wikidata.org/wiki/Q13057978) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline-only`, 157 elements (outline 1, road 32, building 813, water 3, waterway 1).

Evidence: documented 0, mapped 157, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/519236884 historic=castle Q13057978 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 813 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.70485/90.39354) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace; sitelinks=3; wikidata:Q13057978; South Asia site missing from the programme (no programme row within 2 km sharing a name word) \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 157 elements); data/traces/jinjira-palace-q13057978.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bangladesh.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
