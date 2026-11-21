# Taarnborg

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `taarnborg-q56678882` |
| Coordinates | 55.32703, 8.76172 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.32703/8.76172)) |
| Wikidata | [Q56678882](https://www.wikidata.org/wiki/Q56678882) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|building |
| Administrative area | Esbjerg Municipality |
| Inception | 1507 |
| Designations | monument on Kulturstyrelsen register |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `website` | https://taarnborg-ribe.dk/ |

## What the model contains

Tier **T1**, status `outline+walls`, 261 elements (outline 1, marker 8, road 110, zone 1, waterway 5, building 265, wall 15, water 1).

Evidence: documented 0, mapped 261, inferred 0, derived 0; heights documented 42, inferred 0, unknown 93.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/93378668 historic=castle Q56678882 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 265 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.32703/8.76172) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|building; sitelinks=2; wikidata:Q56678882 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 261 elements); data/traces/taarnborg-q56678882.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
