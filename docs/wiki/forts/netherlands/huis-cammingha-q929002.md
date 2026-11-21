# Huis Cammingha

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `huis-cammingha-q929002` |
| Coordinates | 52.07219, 5.19678 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.07219/5.19678)) |
| Wikidata | [Q929002](https://www.wikidata.org/wiki/Q929002) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|château |
| Administrative area | Bunnik |
| Inception | 1395 |
| Designations | Rijksmonument |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `outline-only`, 252 elements (outline 1, road 69, building 280, zone 49, water 7, waterway 6).

Evidence: documented 0, mapped 252, inferred 0, derived 0; heights documented 43, inferred 0, unknown 77.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/57928909 historic=castle Q929002 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 280 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.07219/5.19678) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|château; sitelinks=3; wikidata:Q929002 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 252 elements); data/traces/huis-cammingha-q929002.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
