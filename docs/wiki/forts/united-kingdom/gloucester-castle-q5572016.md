# Gloucester Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gloucester-castle-q5572016` |
| Coordinates | 51.863, -2.249 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.863/-2.249)) |
| Wikidata | [Q5572016](https://www.wikidata.org/wiki/Q5572016) (CC0) |
| Wikidata class | castle |
| Types | castle\|destroyed building or structure |
| Administrative area | Gloucester |
| Wikipedia language editions | 8 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 300 elements (outline 1, marker 9, road 153, building 317, wall 17, retaining-wall 1, zone 2).

Evidence: documented 0, mapped 300, inferred 0, derived 0; heights documented 24, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/485838762 historic=ruins 198 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 317 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 153 mapped (trace size budget); minor lanes are not drawn
- origin moved 200 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.863/-2.249) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|destroyed building or structure; sitelinks=8; wikidata:Q5572016 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 300 elements); data/traces/gloucester-castle-q5572016.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
