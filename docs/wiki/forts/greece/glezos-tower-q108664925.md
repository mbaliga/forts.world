# Glezos Tower

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `glezos-tower-q108664925` |
| Coordinates | 37.1063, 25.37617 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.1063/25.37617)) |
| Wikidata | [Q108664925](https://www.wikidata.org/wiki/Q108664925) (CC0) |
| Wikidata class | fortification |
| Types | defensive tower |
| Administrative area | Naxos and Lesser Cyclades Municipality |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 314 elements (outline 1, marker 6, road 287, building 773, coastline 1, zone 4, wall 20, retaining-wall 11, water 1).

Evidence: documented 0, mapped 314, inferred 0, derived 1; heights documented 0, inferred 0, unknown 151.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/541399567 historic=castle 89 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 773 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 287 mapped (trace size budget); minor lanes are not drawn
- origin moved 91 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":34,"medianInside":0.2,"medianOutside":15.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.1063/25.37617) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive tower; sitelinks=1; wikidata:Q108664925 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 314 elements); data/traces/glezos-tower-q108664925.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
