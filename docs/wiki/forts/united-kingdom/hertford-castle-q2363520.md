# Hertford Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hertford-castle-q2363520` |
| Coordinates | 51.7953, -0.08023 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.7953/-0.08023)) |
| Wikidata | [Q2363520](https://www.wikidata.org/wiki/Q2363520) (CC0) |
| Wikidata class | castle |
| Types | castle\|city hall |
| Administrative area | Hertford |
| Inception | 1066 |
| Designations | scheduled monument |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 306 elements (outline 1, marker 9, road 219, waterway 5, building 275, wall 8, water 2, zone 6, retaining-wall 5).

Evidence: documented 0, mapped 306, inferred 0, derived 0; heights documented 39, inferred 0, unknown 94.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/131203271 historic=castle Q2363520 34 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 275 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 219 mapped (trace size budget); minor lanes are not drawn
- origin moved 34 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.7953/-0.08023) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|city hall; sitelinks=10; wikidata:Q2363520 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 306 elements); data/traces/hertford-castle-q2363520.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
