# Rendelstein

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rendelstein-q18180831` |
| Coordinates | 46.51308, 11.35345 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.51308/11.35345)) |
| Wikidata | [Q18180831](https://www.wikidata.org/wiki/Q18180831) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Bolzano |
| Inception | 1237 |
| Designations | cultural heritage monument in South Tyrol |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 92 elements (outline 1, road 45, building 37, zone 5, waterway 2, wall 2).

Evidence: documented 0, mapped 92, inferred 0, derived 0; heights documented 2, inferred 0, unknown 37.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/119015038 historic=castle Q2241880 176 m from ledger point
- origin moved 176 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.51308/11.35345) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q18180831 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 92 elements); data/traces/rendelstein-q18180831.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
