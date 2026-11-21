# Telč château

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `telc-chateau-q2243703` |
| Coordinates | 49.1854, 15.4513 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.1854/15.4513)) |
| Wikidata | [Q2243703](https://www.wikidata.org/wiki/Q2243703) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Vnitřní Město |
| Inception | 1400 |
| Designations | national cultural monument of the Czech Republic\|cultural monument of the Czech Republic |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 1 |
| OSM `website` | https://www.zamek-telc.eu/ |

## What the model contains

Tier **T1**, status `outline+walls`, 398 elements (outline 1, marker 24, road 240, building 258, wall 35, waterway 10, zone 56, retaining-wall 2).

Evidence: documented 0, mapped 398, inferred 0, derived 0; heights documented 70, inferred 0, unknown 87.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/513322029 historic=castle Q2243703 7 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 258 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 240 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.1854/15.4513) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=9; wikidata:Q2243703 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 398 elements); data/traces/telc-chateau-q2243703.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
