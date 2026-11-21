# Hotel Imperial

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hotel-imperial-q1630919` |
| Coordinates | 48.20108, 16.37306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.20108/16.37306)) |
| Wikidata | [Q1630919](https://www.wikidata.org/wiki/Q1630919) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|hotel |
| Administrative area | Vienna |
| Inception | 1873 |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |
| OSM `website` | https://www.marriott.com/de/hotels/vieil-hotel-imperial-a-luxury-collection-hotel-vienna/overview/ |

## What the model contains

Tier **T1**, status `outline+walls`, 285 elements (outline 1, marker 2, road 319, building 57, zone 63, retaining-wall 8, waterway 1, wall 3).

Evidence: documented 0, mapped 285, inferred 0, derived 0; heights documented 48, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/151292 historic=castle Q1630919 10 m from ledger point
- roads capped: kept the 150 longest of 319 mapped (trace size budget); minor lanes are not drawn
- origin moved 14 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.20108/16.37306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|hotel; sitelinks=13; wikidata:Q1630919 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 285 elements); data/traces/hotel-imperial-q1630919.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
