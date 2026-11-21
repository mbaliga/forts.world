# Ioannina Castle

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ioannina-castle-q17496804` |
| Coordinates | 39.6717, 20.8606 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.6717/20.8606)) |
| Wikidata | [Q17496804](https://www.wikidata.org/wiki/Q17496804) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|archaeological site |
| Administrative area | Ioannina Municipality |
| Inception | 1378 |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 14 |
| OSM `historic` | castle |
| OSM `castle_type` | city |

## What the model contains

Tier **T1**, status `outline+walls`, 317 elements (outline 1, marker 19, road 256, zone 16, building 1441, wall 9, retaining-wall 1, cliff 1).

Evidence: documented 0, mapped 317, inferred 0, derived 0; heights documented 0, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3359316 historic=castle Q17496804 129 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 1441 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 256 mapped (trace size budget); minor lanes are not drawn
- origin moved 136 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.6717/20.8606) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|archaeological site; sitelinks=14; wikidata:Q17496804 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 317 elements); data/traces/ioannina-castle-q17496804.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
