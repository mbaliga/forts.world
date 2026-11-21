# Lusciano

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lusciano-q58687` |
| Coordinates | 40.96991, 14.19238 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.96991/14.19238)) |
| Wikidata | [Q58687](https://www.wikidata.org/wiki/Q58687) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|comune of Italy |
| Administrative area | Province of Caserta |
| Wikipedia language editions | 49 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline-only`, 225 elements (outline 1, marker 4, road 100, building 374).

Evidence: documented 0, mapped 225, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1417756465 historic=castle 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 374 mapped (trace size budget); the rest of the town is not drawn
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.96991/14.19238) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|comune of Italy; sitelinks=49; wikidata:Q58687 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 225 elements); data/traces/lusciano-q58687.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
