# Wasserturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wasserturm-q2092453` |
| Coordinates | 50.77583, 6.095 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.77583/6.095)) |
| Wikidata | [Q2092453](https://www.wikidata.org/wiki/Q2092453) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|destroyed building or structure |
| Administrative area | Aachen |
| Inception | 1300 |
| Wikipedia language editions | 2 |
| OSM `historic` | monastery |
| OSM `heritage` | 8 |
| OSM `description` | Ehemaliges Redemptoristenkloster St. Alfons |

## What the model contains

Tier **T1**, status `outline+walls`, 324 elements (outline 1, marker 10, road 57, waterway 1, building 344, wall 132, zone 3).

Evidence: documented 0, mapped 324, inferred 0, derived 0; heights documented 33, inferred 0, unknown 219.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/80513361 historic=monastery Q90409658 574 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 344 mapped (trace size budget); the rest of the town is not drawn
- origin moved 573 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.77583/6.095) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|destroyed building or structure; sitelinks=2; wikidata:Q2092453 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 324 elements); data/traces/wasserturm-q2092453.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
