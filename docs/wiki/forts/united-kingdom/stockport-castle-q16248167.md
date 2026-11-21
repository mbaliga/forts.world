# Stockport Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stockport-castle-q16248167` |
| Coordinates | 53.4114, -2.15422 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.4114/-2.15422)) |
| Wikidata | [Q16248167](https://www.wikidata.org/wiki/Q16248167) (CC0) |
| Wikidata class | castle |
| Types | archaeological site\|motte-and-bailey castle\|destroyed building or structure |
| Administrative area | Stockport |
| Wikipedia language editions | 4 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 358 elements (outline 1, marker 1, road 354, building 300, zone 76, retaining-wall 3, waterway 5, wall 2).

Evidence: documented 0, mapped 358, inferred 0, derived 0; heights documented 2, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/982054969 historic=building 271 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 300 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 354 mapped (trace size budget); minor lanes are not drawn
- origin moved 272 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.4114/-2.15422) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; archaeological site\|motte-and-bailey castle\|destroyed building or structure; sitelinks=4; wikidata:Q16248167 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 358 elements); data/traces/stockport-castle-q16248167.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
