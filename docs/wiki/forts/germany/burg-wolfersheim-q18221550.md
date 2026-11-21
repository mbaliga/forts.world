# Burg Wölfersheim

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-wolfersheim-q18221550` |
| Coordinates | 50.40095, 8.81312 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.40095/8.81312)) |
| Wikidata | [Q18221550](https://www.wikidata.org/wiki/Q18221550) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 199 elements (outline 1, marker 3, road 70, building 843, waterway 1, wall 3, water 1).

Evidence: documented 0, mapped 199, inferred 0, derived 0; heights documented 0, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/549816005 historic=yes Q997878 120 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 843 mapped (trace size budget); the rest of the town is not drawn
- origin moved 120 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.40095/8.81312) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=1; wikidata:Q18221550 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 199 elements); data/traces/burg-wolfersheim-q18221550.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
