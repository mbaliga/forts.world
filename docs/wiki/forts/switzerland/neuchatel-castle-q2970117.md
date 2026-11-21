# Neuchâtel Castle

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `neuchatel-castle-q2970117` |
| Coordinates | 46.99213, 6.92672 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.99213/6.92672)) |
| Wikidata | [Q2970117](https://www.wikidata.org/wiki/Q2970117) (CC0) |
| Wikidata class | castle |
| Types | castle\|built structure |
| Administrative area | Neuchâtel |
| Designations | class A Swiss cultural property of national significance |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.ne.ch/themes/culture-et-patrimoine/decouvrir-le-patrimoine-cantonal-et-unesco/guided-tours-castle-neuchatel |

## What the model contains

Tier **T1**, status `outline+walls`, 298 elements (outline 1, road 199, building 327, wall 15, zone 1, waterway 9, retaining-wall 2).

Evidence: documented 0, mapped 298, inferred 0, derived 0; heights documented 2, inferred 0, unknown 135.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/31565585 historic=castle Q2970117 16 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 327 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 199 mapped (trace size budget); minor lanes are not drawn
- origin moved 17 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.99213/6.92672) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|built structure; sitelinks=13; wikidata:Q2970117 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 298 elements); data/traces/neuchatel-castle-q2970117.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
