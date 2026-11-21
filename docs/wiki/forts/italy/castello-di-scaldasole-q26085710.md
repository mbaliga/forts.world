# Castello di Scaldasole

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-di-scaldasole-q26085710` |
| Coordinates | 45.12494, 8.90888 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.12494/8.90888)) |
| Wikidata | [Q26085710](https://www.wikidata.org/wiki/Q26085710) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Scaldasole |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 180 elements (outline 1, road 29, zone 2, wall 15, building 620, waterway 13).

Evidence: documented 0, mapped 180, inferred 0, derived 0; heights documented 0, inferred 0, unknown 135.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/682435268 historic=castle Q26085710 28 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 620 mapped (trace size budget); the rest of the town is not drawn
- origin moved 31 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.12494/8.90888) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q26085710 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 180 elements); data/traces/castello-di-scaldasole-q26085710.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
