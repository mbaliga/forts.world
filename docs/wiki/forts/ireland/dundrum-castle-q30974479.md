# Dundrum Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dundrum-castle-q30974479` |
| Coordinates | 53.28777, -6.24504 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.28777/-6.24504)) |
| Wikidata | [Q30974479](https://www.wikidata.org/wiki/Q30974479) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 305 elements (outline 1, marker 1, road 174, waterway 7, building 214, zone 10, water 2, wall 12, retaining-wall 2).

Evidence: documented 0, mapped 305, inferred 0, derived 0; heights documented 58, inferred 0, unknown 76.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/112490613 historic=ruins Q30974479 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 214 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 174 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.28777/-6.24504) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q30974479 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 305 elements); data/traces/dundrum-castle-q30974479.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
