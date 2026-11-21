# Castello Estense

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-estense-q89672236` |
| Coordinates | 45.00959, 11.7398 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.00959/11.7398)) |
| Wikidata | [Q89672236](https://www.wikidata.org/wiki/Q89672236) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Arquà Polesine |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | towerhouse |

## What the model contains

Tier **T1**, status `outline-only`, 194 elements (outline 1, road 29, building 159, zone 4, water 1).

Evidence: documented 0, mapped 194, inferred 0, derived 0; heights documented 1, inferred 0, unknown 158.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/222525852 historic=castle 27 m from ledger point
- origin moved 30 m from the ledger point to the centre of the mapped site
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.00959/11.7398) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q89672236 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 194 elements); data/traces/castello-estense-q89672236.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
