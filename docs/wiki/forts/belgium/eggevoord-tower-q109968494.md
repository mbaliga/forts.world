# Eggevoord Tower

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `eggevoord-tower-q109968494` |
| Coordinates | 50.83756, 4.37925 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.83756/4.37925)) |
| Wikidata | [Q109968494](https://www.wikidata.org/wiki/Q109968494) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Brussels |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 288 elements (outline 1, marker 4, road 240, building 206, wall 3, water 2, waterway 6, zone 2).

Evidence: documented 0, mapped 288, inferred 0, derived 0; heights documented 7, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/397508973 historic=building Q109968602 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 206 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 240 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.83756/4.37925) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q109968494 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 288 elements); data/traces/eggevoord-tower-q109968494.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
