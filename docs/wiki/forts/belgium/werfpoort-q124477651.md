# Werfpoort

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `werfpoort-q124477651` |
| Coordinates | 51.22311, 4.39847 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.22311/4.39847)) |
| Wikidata | [Q124477651](https://www.wikidata.org/wiki/Q124477651) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Antwerp |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 289 elements (outline 1, marker 4, water 2, road 191, building 224, wall 7, zone 4, waterway 1).

Evidence: documented 0, mapped 289, inferred 0, derived 0; heights documented 7, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/29067925 historic=castle Q1014126 87 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 224 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 191 mapped (trace size budget); minor lanes are not drawn
- origin moved 86 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.22311/4.39847) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q124477651 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 289 elements); data/traces/werfpoort-q124477651.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
