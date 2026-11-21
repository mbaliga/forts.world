# Müllegger Tor, Salzburg

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mullegger-tor-salzburg-q2242539` |
| Coordinates | 47.8066, 13.0303 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.8066/13.0303)) |
| Wikidata | [Q2242539](https://www.wikidata.org/wiki/Q2242539) (CC0) |
| Wikidata class | castle |
| Types | city gate\|château |
| Administrative area | Salzburg |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 331 elements (outline 1, marker 8, road 312, waterway 10, building 160, zone 19, wall 21, retaining-wall 2).

Evidence: documented 0, mapped 331, inferred 0, derived 0; heights documented 51, inferred 0, unknown 92.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/68943593 historic=yes 284 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 160 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 312 mapped (trace size budget); minor lanes are not drawn
- origin moved 284 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.8066/13.0303) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; city gate\|château; sitelinks=2; wikidata:Q2242539 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 331 elements); data/traces/mullegger-tor-salzburg-q2242539.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
