# Frias Castle

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `frias-castle-q3757086` |
| Coordinates | 42.76222, -3.29528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.76222/-3.29528)) |
| Wikidata | [Q3757086](https://www.wikidata.org/wiki/Q3757086) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Frías |
| Designations | bien de interés cultural |
| Wikipedia language editions | 7 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 293 elements (outline 1, marker 4, road 156, building 293, wall 5, waterway 2, retaining-wall 6, zone 5).

Evidence: documented 0, mapped 293, inferred 0, derived 0; heights documented 117, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1427357075 historic=yes 15 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 293 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 156 mapped (trace size budget); minor lanes are not drawn
- origin moved 15 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.76222/-3.29528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=7; wikidata:Q3757086 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 293 elements); data/traces/frias-castle-q3757086.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
