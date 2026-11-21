# Porta Napoli

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-napoli-q64877112` |
| Coordinates | 42.3416, 13.39509 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.3416/13.39509)) |
| Wikidata | [Q64877112](https://www.wikidata.org/wiki/Q64877112) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | L'Aquila |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 261 elements (outline 1, road 117, wall 11, building 115, water 1, zone 3, retaining-wall 12, waterway 1).

Evidence: documented 0, mapped 261, inferred 0, derived 0; heights documented 1, inferred 0, unknown 137.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/563245756 historic=castle 147 m from ledger point
- origin moved 146 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.3416/13.39509) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q64877112 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 261 elements); data/traces/porta-napoli-q64877112.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
