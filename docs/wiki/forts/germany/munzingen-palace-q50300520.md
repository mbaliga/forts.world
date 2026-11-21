# Munzingen Palace

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `munzingen-palace-q50300520` |
| Coordinates | 47.97029, 7.69843 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.97029/7.69843)) |
| Wikidata | [Q50300520](https://www.wikidata.org/wiki/Q50300520) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château\|royal palace |
| Administrative area | Freiburg im Breisgau |
| Inception | 1672 |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `website` | https://www.schlossreinach.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 241 elements (outline 1, marker 1, road 104, building 391, wall 2, zone 9, waterway 4).

Evidence: documented 0, mapped 241, inferred 0, derived 0; heights documented 1, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/104015909 historic=castle Q2243105 184 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 391 mapped (trace size budget); the rest of the town is not drawn
- origin moved 184 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.97029/7.69843) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château\|royal palace; sitelinks=3; wikidata:Q50300520 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 241 elements); data/traces/munzingen-palace-q50300520.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
