# Ptuj Castle

> Slovenia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ptuj-castle-q7257119` |
| Coordinates | 46.42136, 15.8677 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.42136/15.8677)) |
| Wikidata | [Q7257119](https://www.wikidata.org/wiki/Q7257119) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Urban Municipality of Ptuj |
| Designations | monument of national significance |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 359 elements (outline 1, marker 3, road 184, zone 45, waterway 2, building 195, wall 37, retaining-wall 1).

Evidence: documented 0, mapped 359, inferred 0, derived 0; heights documented 26, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/173946368 historic=castle Q7257119 44 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 195 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 184 mapped (trace size budget); minor lanes are not drawn
- origin moved 43 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.42136/15.8677) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=10; wikidata:Q7257119 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 359 elements); data/traces/ptuj-castle-q7257119.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovenia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
