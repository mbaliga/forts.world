# Scheune

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `scheune-q2240548` |
| Coordinates | 49.94022, 11.60694 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.94022/11.60694)) |
| Wikidata | [Q2240548](https://www.wikidata.org/wiki/Q2240548) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|château |
| Administrative area | Bayreuth |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 101 elements (outline 1, road 55, building 34, wall 3, retaining-wall 1, zone 7).

Evidence: documented 0, mapped 101, inferred 0, derived 0; heights documented 1, inferred 0, unknown 37.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/142672735 historic=castle Q2240548 3 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.94022/11.60694) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|château; sitelinks=2; wikidata:Q2240548 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 101 elements); data/traces/scheune-q2240548.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
