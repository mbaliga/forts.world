# Porta Nolana

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-nolana-q1239397` |
| Coordinates | 40.85028, 14.26792 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.85028/14.26792)) |
| Wikidata | [Q1239397](https://www.wikidata.org/wiki/Q1239397) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Naples |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 284 elements (outline 1, marker 1, road 229, building 186, zone 8, wall 4).

Evidence: documented 0, mapped 284, inferred 0, derived 0; heights documented 14, inferred 0, unknown 110.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/182381905 historic=castle 432 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 186 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 229 mapped (trace size budget); minor lanes are not drawn
- origin moved 432 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.85028/14.26792) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=10; wikidata:Q1239397 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 284 elements); data/traces/porta-nolana-q1239397.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
