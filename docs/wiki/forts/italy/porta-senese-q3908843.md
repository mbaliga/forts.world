# Porta Senese

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-senese-q3908843` |
| Coordinates | 42.90838, 10.85172 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.90838/10.85172)) |
| Wikidata | [Q3908843](https://www.wikidata.org/wiki/Q3908843) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Scarlino |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 227 elements (outline 1, road 99, wall 12, zone 1, retaining-wall 23, building 91).

Evidence: documented 0, mapped 227, inferred 0, derived 0; heights documented 12, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/84838696 historic=castle Q3939433 211 m from ledger point
- origin moved 212 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.90838/10.85172) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=3; wikidata:Q3908843 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 227 elements); data/traces/porta-senese-q3908843.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
