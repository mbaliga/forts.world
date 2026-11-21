# Morioka Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `morioka-castle-q251650` |
| Coordinates | 39.69995, 141.15011 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.69995/141.15011)) |
| Wikidata | [Q251650](https://www.wikidata.org/wiki/Q251650) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Morioka |
| Inception | 1598 |
| Designations | Historic Site of Japan |
| Wikipedia language editions | 12 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline-only`, 278 elements (outline 1, road 153, water 2, building 250, waterway 1, zone 4).

Evidence: documented 0, mapped 278, inferred 0, derived 0; heights documented 1, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/427693421 historic=building Q27528891 436 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 250 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 153 mapped (trace size budget); minor lanes are not drawn
- origin moved 436 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.69995/141.15011) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=12; wikidata:Q251650 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 278 elements); data/traces/morioka-castle-q251650.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
