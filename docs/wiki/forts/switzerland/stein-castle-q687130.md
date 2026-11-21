# Stein Castle

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stein-castle-q687130` |
| Coordinates | 47.47331, 8.30525 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.47331/8.30525)) |
| Wikidata | [Q687130](https://www.wikidata.org/wiki/Q687130) (CC0) |
| Wikidata class | ruin |
| Types | fortress\|archaeological site\|castle ruin |
| Administrative area | Baden |
| Inception | 1000 |
| Designations | class A Swiss cultural property of national significance |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 284 elements (outline 1, marker 1, road 320, building 161, zone 3, retaining-wall 6, wall 2, waterway 1).

Evidence: documented 0, mapped 284, inferred 0, derived 0; heights documented 45, inferred 0, unknown 83.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/128834280 historic=castle Q2222046 87 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 161 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 320 mapped (trace size budget); minor lanes are not drawn
- origin moved 86 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.47331/8.30525) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; fortress\|archaeological site\|castle ruin; sitelinks=6; wikidata:Q687130 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 284 elements); data/traces/stein-castle-q687130.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
