# Barriera Bixio

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `barriera-bixio-q25303374` |
| Coordinates | 44.79639, 10.31722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.79639/10.31722)) |
| Wikidata | [Q25303374](https://www.wikidata.org/wiki/Q25303374) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Parma |
| Inception | 1261 |
| Wikipedia language editions | 3 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 254 elements (outline 1, marker 1, road 120, building 304, zone 11, wall 1).

Evidence: documented 0, mapped 254, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/179475045 historic=building Q25303374 21 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 304 mapped (trace size budget); the rest of the town is not drawn
- origin moved 21 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.79639/10.31722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=3; wikidata:Q25303374 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 254 elements); data/traces/barriera-bixio-q25303374.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
