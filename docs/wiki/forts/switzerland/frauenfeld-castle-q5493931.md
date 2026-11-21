# Frauenfeld Castle

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `frauenfeld-castle-q5493931` |
| Coordinates | 47.55528, 8.89667 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.55528/8.89667)) |
| Wikidata | [Q5493931](https://www.wikidata.org/wiki/Q5493931) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Frauenfeld |
| Designations | besonders wertvoll (Thurgau)\|class A Swiss cultural property of national significance |
| Wikipedia language editions | 4 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 301 elements (outline 1, marker 1, road 385, waterway 9, building 188, zone 6, wall 14).

Evidence: documented 0, mapped 301, inferred 0, derived 0; heights documented 10, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/232921921 historic=yes Q29525942 64 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 188 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 385 mapped (trace size budget); minor lanes are not drawn
- origin moved 63 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.55528/8.89667) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q5493931 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 301 elements); data/traces/frauenfeld-castle-q5493931.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
