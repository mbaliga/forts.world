# Het Steen

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `het-steen-q1014126` |
| Coordinates | 51.22278, 4.3975 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.22278/4.3975)) |
| Wikidata | [Q1014126](https://www.wikidata.org/wiki/Q1014126) (CC0) |
| Wikidata class | castle |
| Types | castle\|prison\|museum |
| Administrative area | Antwerp |
| Inception | 1200 |
| Designations | beschermd monument |
| Wikipedia language editions | 18 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 289 elements (outline 1, marker 4, water 2, road 191, building 224, wall 7, zone 4, waterway 1).

Evidence: documented 0, mapped 289, inferred 0, derived 0; heights documented 7, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/29067925 historic=castle Q1014126 10 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 224 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 191 mapped (trace size budget); minor lanes are not drawn
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.22278/4.3975) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|prison\|museum; sitelinks=18; wikidata:Q1014126 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 289 elements); data/traces/het-steen-q1014126.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
