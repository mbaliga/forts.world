# Keizerpoort

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `keizerpoort-q2345749` |
| Coordinates | 51.04194, 3.74 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.04194/3.74)) |
| Wikidata | [Q2345749](https://www.wikidata.org/wiki/Q2345749) (CC0) |
| Wikidata class | fortification |
| Types | gate\|city gate\|intersection |
| Administrative area | Ghent |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 343 elements (outline 1, marker 4, road 231, zone 37, building 414, waterway 17, wall 11, water 3).

Evidence: documented 0, mapped 343, inferred 0, derived 0; heights documented 8, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7352168 historic=building 102 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 414 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 231 mapped (trace size budget); minor lanes are not drawn
- origin moved 102 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.04194/3.74) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate\|city gate\|intersection; sitelinks=2; wikidata:Q2345749 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 343 elements); data/traces/keizerpoort-q2345749.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
