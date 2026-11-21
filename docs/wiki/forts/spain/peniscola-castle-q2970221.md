# Peniscola Castle

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `peniscola-castle-q2970221` |
| Coordinates | 40.3588, 0.40793 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.3588/0.40793)) |
| Wikidata | [Q2970221](https://www.wikidata.org/wiki/Q2970221) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Peníscola |
| Inception | 1294 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 306 elements (outline 1, marker 5, coastline 3, road 178, water 3, building 313, wall 17, cliff 3, retaining-wall 2, zone 2).

Evidence: documented 0, mapped 306, inferred 0, derived 1; heights documented 1, inferred 0, unknown 138.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18785904 historic=castle Q2970221 9 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 313 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 178 mapped (trace size budget); minor lanes are not drawn
- origin moved 9 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":798,"medianInside":0,"medianOutside":11.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.3588/0.40793) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=13; wikidata:Q2970221 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 306 elements); data/traces/peniscola-castle-q2970221.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
