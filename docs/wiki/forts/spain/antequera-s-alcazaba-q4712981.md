# Antequera's Alcazaba

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `antequera-s-alcazaba-q4712981` |
| Coordinates | 37.01423, -4.55754 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.01423/-4.55754)) |
| Wikidata | [Q4712981](https://www.wikidata.org/wiki/Q4712981) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Antequera |
| Designations | bien de interés cultural |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 293 elements (outline 1, marker 10, road 130, building 276, zone 2, wall 17, waterway 1, retaining-wall 12).

Evidence: documented 0, mapped 293, inferred 0, derived 0; heights documented 0, inferred 0, unknown 149.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/495226025 historic=castle Q4712981 29 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 276 mapped (trace size budget); the rest of the town is not drawn
- origin moved 29 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.01423/-4.55754) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=8; wikidata:Q4712981 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 293 elements); data/traces/antequera-s-alcazaba-q4712981.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
