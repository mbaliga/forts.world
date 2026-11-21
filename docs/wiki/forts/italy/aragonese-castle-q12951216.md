# Aragonese Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `aragonese-castle-q12951216` |
| Coordinates | 37.38267, 14.36379 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.38267/14.36379)) |
| Wikidata | [Q12951216](https://www.wikidata.org/wiki/Q12951216) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Piazza Armerina |
| Inception | 1300 |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 279 elements (outline 1, marker 4, road 218, retaining-wall 31, building 778, wall 137).

Evidence: documented 0, mapped 279, inferred 0, derived 0; heights documented 0, inferred 0, unknown 194.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1135228635 historic=castle Q12951216 6 m from ledger point
- pruned to the outline plus 150 m: 1169 -> 797 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 515 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 143 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.38267/14.36379) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q12951216 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 279 elements); data/traces/aragonese-castle-q12951216.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
