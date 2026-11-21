# Hôtel de Blossac

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hotel-de-blossac-q3145754` |
| Coordinates | 48.11138, -1.68208 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.11138/-1.68208)) |
| Wikidata | [Q3145754](https://www.wikidata.org/wiki/Q3145754) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|private mansion |
| Administrative area | Rennes |
| Inception | 1728 |
| Designations | classified historical monument |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 306 elements (outline 1, marker 3, road 306, building 286, waterway 4, wall 22, retaining-wall 4, water 1, zone 1).

Evidence: documented 0, mapped 306, inferred 0, derived 0; heights documented 15, inferred 0, unknown 131.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/311766 historic=castle Q3145754 9 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 286 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 306 mapped (trace size budget); minor lanes are not drawn
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.11138/-1.68208) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|private mansion; sitelinks=5; wikidata:Q3145754 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 306 elements); data/traces/hotel-de-blossac-q3145754.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
