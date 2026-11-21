# Manoir Chapuis

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `manoir-chapuis-q3286115` |
| Coordinates | 46.30588, 6.2982 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.30588/6.2982)) |
| Wikidata | [Q3286115](https://www.wikidata.org/wiki/Q3286115) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|manor house |
| Administrative area | Douvaine |
| Inception | 1783 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 309 elements (outline 1, marker 1, road 161, building 256, zone 8, wall 28, retaining-wall 1).

Evidence: documented 0, mapped 309, inferred 0, derived 0; heights documented 6, inferred 0, unknown 143.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/197258184 historic=castle Q3286115 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 256 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 161 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.30588/6.2982) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|manor house; sitelinks=2; wikidata:Q3286115 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 309 elements); data/traces/manoir-chapuis-q3286115.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
