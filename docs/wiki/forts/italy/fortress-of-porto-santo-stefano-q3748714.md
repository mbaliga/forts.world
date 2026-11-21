# Fortress of Porto Santo Stefano

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortress-of-porto-santo-stefano-q3748714` |
| Coordinates | 42.43761, 11.11823 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.43761/11.11823)) |
| Wikidata | [Q3748714](https://www.wikidata.org/wiki/Q3748714) (CC0) |
| Wikidata class | fort |
| Types | museum\|fortress\|archaeological museum\|museum of a public entity |
| Administrative area | Monte Argentario |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://www.argentarioturismo.it/esplora-argentario-maremma-toscana/esperienze-da-vivere-maremma/le-fortezze-argentario/fortezza-spagnola/ |

## What the model contains

Tier **T1**, status `outline+walls`, 277 elements (outline 1, road 138, coastline 3, building 477, wall 4, retaining-wall 3, zone 4, water 4).

Evidence: documented 0, mapped 277, inferred 0, derived 4; heights documented 120, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/176518643 historic=castle 42 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 477 mapped (trace size budget); the rest of the town is not drawn
- origin moved 41 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":3,"medianInside":3.6,"medianOutside":20.9}
- sea-1: DEM check ok {"cells":31,"medianInside":0,"medianOutside":23.1}
- sea-2: DEM check ok {"cells":8,"medianInside":0.9,"medianOutside":20.9}
- sea-3: DEM check failed {"cells":400,"medianInside":24.1,"medianOutside":0}
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.43761/11.11823) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; museum\|fortress\|archaeological museum\|museum of a public entity; sitelinks=4; wikidata:Q3748714 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 277 elements); data/traces/fortress-of-porto-santo-stefano-q3748714.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
