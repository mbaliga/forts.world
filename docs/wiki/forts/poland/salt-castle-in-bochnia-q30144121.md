# Salt castle in Bochnia

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `salt-castle-in-bochnia-q30144121` |
| Coordinates | 49.97062, 20.42842 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.97062/20.42842)) |
| Wikidata | [Q30144121](https://www.wikidata.org/wiki/Q30144121) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Bochnia |
| Inception | 1600 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 296 elements (outline 1, marker 10, road 193, building 219, zone 10, cliff 1, wall 1, water 3).

Evidence: documented 0, mapped 296, inferred 0, derived 0; heights documented 30, inferred 0, unknown 91.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/241273047 historic=castle 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 219 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 193 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.97062/20.42842) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=0; wikidata:Q30144121 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 296 elements); data/traces/salt-castle-in-bochnia-q30144121.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
