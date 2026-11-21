# Fasangarten

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fasangarten-q38061140` |
| Coordinates | 48.19786, 16.90992 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.19786/16.90992)) |
| Wikidata | [Q38061140](https://www.wikidata.org/wiki/Q38061140) (CC0) |
| Wikidata class | castle |
| Types | motte-and-bailey castle\|abandoned village |
| Administrative area | Engelhartstetten |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 20 elements (outline 1, road 11, zone 3, building 2, wall 3).

Evidence: documented 0, mapped 20, inferred 0, derived 0; heights documented 1, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/37438935 historic=castle Q536582 664 m from ledger point
- origin moved 663 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.19786/16.90992) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; motte-and-bailey castle\|abandoned village; sitelinks=1; wikidata:Q38061140 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 20 elements); data/traces/fasangarten-q38061140.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
