# Fuerte de San Lorenzo

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fuerte-de-san-lorenzo-q108651331` |
| Coordinates | 36.71724, -4.42455 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.71724/-4.42455)) |
| Wikidata | [Q108651331](https://www.wikidata.org/wiki/Q108651331) (CC0) |
| Wikidata class | ruin |
| Types | hornwork\|fort\|ruins |
| Administrative area | Málaga |
| Inception | 1701 |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 315 elements (outline 1, marker 14, road 197, building 204, waterway 3, coastline 1, zone 2, wall 24).

Evidence: documented 0, mapped 315, inferred 0, derived 0; heights documented 106, inferred 0, unknown 38.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/184108361 historic=building Q2834928 94 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 204 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 197 mapped (trace size budget); minor lanes are not drawn
- origin moved 95 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.71724/-4.42455) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; hornwork\|fort\|ruins; sitelinks=1; wikidata:Q108651331 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 315 elements); data/traces/fuerte-de-san-lorenzo-q108651331.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
