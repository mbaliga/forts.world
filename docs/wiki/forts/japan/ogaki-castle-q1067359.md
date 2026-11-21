# Ōgaki Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ogaki-castle-q1067359` |
| Coordinates | 35.36194, 136.61611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.36194/136.61611)) |
| Wikidata | [Q1067359](https://www.wikidata.org/wiki/Q1067359) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle\|hirajiro\|military museum |
| Administrative area | Ōgaki-shi |
| Inception | 1535 |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 340 elements (outline 1, marker 27, road 164, building 384, waterway 12, water 3, wall 8, zone 4, retaining-wall 15).

Evidence: documented 0, mapped 340, inferred 0, derived 0; heights documented 65, inferred 0, unknown 78.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/253443597 historic=castle Q1067359 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 384 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 164 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.36194/136.61611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle\|hirajiro\|military museum; sitelinks=11; wikidata:Q1067359 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 340 elements); data/traces/ogaki-castle-q1067359.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
