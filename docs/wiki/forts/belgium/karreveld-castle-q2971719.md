# Karreveld Castle

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `karreveld-castle-q2971719` |
| Coordinates | 50.86028, 4.31528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.86028/4.31528)) |
| Wikidata | [Q2971719](https://www.wikidata.org/wiki/Q2971719) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Designations | protected monument |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline-only`, 290 elements (outline 1, zone 14, road 202, water 1, building 206, waterway 4).

Evidence: documented 0, mapped 290, inferred 0, derived 0; heights documented 1, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/245714191 historic=castle Q2971719 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 206 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 202 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.86028/4.31528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q2971719 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 290 elements); data/traces/karreveld-castle-q2971719.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
