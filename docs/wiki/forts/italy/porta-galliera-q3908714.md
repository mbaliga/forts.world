# Porta Galliera

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-galliera-q3908714` |
| Coordinates | 44.50407, 11.3448 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.50407/11.3448)) |
| Wikidata | [Q3908714](https://www.wikidata.org/wiki/Q3908714) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|historic building |
| Administrative area | Bologna |
| Inception | 1650 |
| Designations | Italian national heritage |
| Wikipedia language editions | 7 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 342 elements (outline 1, marker 2, road 428, building 109, wall 19, zone 51, waterway 8, water 1, retaining-wall 1).

Evidence: documented 0, mapped 342, inferred 0, derived 0; heights documented 11, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/148641097 historic=archaeological_site 9 m from ledger point
- roads capped: kept the 150 longest of 428 mapped (trace size budget); minor lanes are not drawn
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.50407/11.3448) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|historic building; sitelinks=7; wikidata:Q3908714 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 342 elements); data/traces/porta-galliera-q3908714.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
