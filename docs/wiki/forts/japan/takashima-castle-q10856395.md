# Takashima Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `takashima-castle-q10856395` |
| Coordinates | 36.03979, 138.11202 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.03979/138.11202)) |
| Wikidata | [Q10856395](https://www.wikidata.org/wiki/Q10856395) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Suwa |
| Inception | 1592 |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 266 elements (outline 1, marker 12, waterway 5, road 102, building 422, water 3, zone 9, retaining-wall 11, wall 3).

Evidence: documented 0, mapped 266, inferred 0, derived 0; heights documented 0, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/233643278 historic=castle Q10856395 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 422 mapped (trace size budget); the rest of the town is not drawn
- origin moved 1 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.03979/138.11202) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=10; wikidata:Q10856395 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 266 elements); data/traces/takashima-castle-q10856395.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
