# Dampoort

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dampoort-q13511153` |
| Coordinates | 51.22177, 3.23393 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.22177/3.23393)) |
| Wikidata | [Q13511153](https://www.wikidata.org/wiki/Q13511153) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Bruges |
| Wikipedia language editions | 2 |
| OSM `historic` | monastery |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 345 elements (outline 1, marker 4, waterway 13, road 264, water 13, building 985, wall 28, zone 16).

Evidence: documented 0, mapped 345, inferred 0, derived 0; heights documented 1, inferred 0, unknown 147.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/180787464 historic=monastery Q2479554 464 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 985 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 264 mapped (trace size budget); minor lanes are not drawn
- origin moved 463 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.22177/3.23393) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q13511153 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 345 elements); data/traces/dampoort-q13511153.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
