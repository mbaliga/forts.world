# Porta Nigra

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-nigra-q152339` |
| Coordinates | 49.75972, 6.64389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.75972/6.64389)) |
| Wikidata | [Q152339](https://www.wikidata.org/wiki/Q152339) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Trier |
| Inception | 0180 |
| Designations | cultural heritage monument in Rhineland-Palatinate\|part of UNESCO World Heritage Site |
| UNESCO WHC id | 367-005 |
| Wikipedia language editions | 49 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 310 elements (outline 1, marker 3, road 148, building 118, wall 33, zone 7).

Evidence: documented 0, mapped 310, inferred 0, derived 0; heights documented 112, inferred 0, unknown 39.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/50284090 historic=castle Q316766 718 m from ledger point
- origin moved 718 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.75972/6.64389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=49; wikidata:Q152339 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 310 elements); data/traces/porta-nigra-q152339.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
