# Porta Sempione

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-sempione-q3875281` |
| Coordinates | 45.47566, 9.17243 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.47566/9.17243)) |
| Wikidata | [Q3875281](https://www.wikidata.org/wiki/Q3875281) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Milan |
| Inception | 1807 |
| Designations | Italian national heritage |
| Wikipedia language editions | 9 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 342 elements (outline 1, road 210, building 78, wall 15, zone 21, retaining-wall 17).

Evidence: documented 0, mapped 342, inferred 0, derived 0; heights documented 73, inferred 0, unknown 37.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18237414 historic=monument Q776576 4 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.47566/9.17243) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=9; wikidata:Q3875281 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 342 elements); data/traces/porta-sempione-q3875281.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
