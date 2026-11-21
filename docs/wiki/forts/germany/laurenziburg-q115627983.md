# Laurenziburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `laurenziburg-q115627983` |
| Coordinates | 49.90841, 8.20289 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.90841/8.20289)) |
| Wikidata | [Q115627983](https://www.wikidata.org/wiki/Q115627983) (CC0) |
| Wikidata class | castle |
| Types | castle\|destroyed building or structure |
| Administrative area | Nieder-Olm |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 310 elements (outline 1, marker 5, road 187, zone 2, building 563, wall 29, retaining-wall 3).

Evidence: documented 0, mapped 310, inferred 0, derived 0; heights documented 30, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/321292551 historic=building 101 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 563 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 187 mapped (trace size budget); minor lanes are not drawn
- origin moved 101 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.90841/8.20289) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|destroyed building or structure; sitelinks=1; wikidata:Q115627983 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 310 elements); data/traces/laurenziburg-q115627983.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
