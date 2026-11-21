# Saga Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `saga-castle-q1071095` |
| Coordinates | 33.24574, 130.30215 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.24574/130.30215)) |
| Wikidata | [Q1071095](https://www.wikidata.org/wiki/Q1071095) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle\|hirajiro |
| Administrative area | Jōnai |
| Inception | 1602 |
| Designations | Prefectural Historic Site\|Important Cultural Property of Japan |
| Wikipedia language editions | 11 |
| OSM `historic` | tomb |

## What the model contains

Tier **T1**, status `outline-only`, 293 elements (outline 1, marker 3, waterway 38, water 3, road 118, zone 10, building 290).

Evidence: documented 0, mapped 293, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1495985238 historic=tomb 453 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 290 mapped (trace size budget); the rest of the town is not drawn
- origin moved 454 m from the ledger point to the outline centroid
- 93 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.24574/130.30215) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle\|hirajiro; sitelinks=11; wikidata:Q1071095 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 293 elements); data/traces/saga-castle-q1071095.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
